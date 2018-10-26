app.controller('ExitController', ['$scope', function ($scope) {
    
}]), $.exitpop({
    predict_amt: .02
    , fps: 1e3
    , popCount: 1
    , tolerance: {
        x: 10
        , y: 10
    }
    , cta: "#form"
    , callback: function () {
        $("#popover-1").fadeIn(), $("#pop-box-1").css({
            top: 0
            , opacity: 1
        })
    }
});