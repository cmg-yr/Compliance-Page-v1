function initAutoComplete(opts) {

	var field = $('#' + opts.fieldId);
	var autocomplete = new google.maps.places.Autocomplete(field[0]);

	autocomplete.addListener('place_changed', function() {
		var address = {}
		var cleaned = '';
		var place = autocomplete.getPlace();

		if (place.types)
			address.type = place.types[0];

		if (!place.address_components)
			return;

		for (var i in place.address_components)
			address[place.address_components[i].types[0]] = place.address_components[i].short_name;

		cleaned = [ address.street_number, address.route ].join(' ').trim();
		field.val(cleaned || '');

		for (var id in opts.updateMap)
			$('#' + id).val(address[opts.updateMap[id]] || '');

		field.trigger('googleMaps:placeChanged');
	});

}