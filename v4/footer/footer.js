function showPop(page){
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            document.getElementById("popupcontent").innerHTML=xmlhttp.responseText;
            document.getElementById('popup').style.display="block";
        }
    }
    xmlhttp.open("POST", page+".php?t=" + Math.random(),true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xmlhttp.setRequestHeader("Content-length", 0);
    //xmlhttp.setRequestHeader("Connection", "close");
    xmlhttp.send();
}

function closePop(){
    document.getElementById('popup').style.display="none";
}