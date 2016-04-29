window.onload = function() {

    var Hour = document.getElementById("hour");
    var Minute = document.getElementById("minute");
    var Second = document.getElementById("second");
    var time = null;

    function setClock() {
        SetTransform(Second,getRotate().SecRto);
        SetTransform(Minute,getRotate().MinRto);
        SetTransform(Hour,getRotate().HourRto);
    }

    setClock();

    var time = setInterval(function(){
        setClock();
    },1000)
};

function getTime() {
    var nowDate = new Date();
    var nowHour = nowDate.getHours();
    var nowMinute = nowDate.getMinutes();
    var nowSecond = nowDate.getSeconds();
    return {hour:nowHour, minute:nowMinute, second:nowSecond};
}

function getRotate() {
    var time = getTime();
    var secondRotate = time.second * (360 / 60);
    var minuteRotate = (time.minute + time.second / 60) * (360 / 60);
    var hourRotate = (time.hour + time.minute / 60 + time.second / 3600) * (360 / 12);
    return {HourRto : "rotate("+hourRotate+"deg)", MinRto : "rotate("+minuteRotate+"deg)", SecRto : "rotate("+secondRotate+"deg)"}
}


function SetTransform(element,value){
    element.style.webkitTransform = value;
    element.style.MozTransform = value;
    element.style.msTransform = value;
    element.style.OTransform = value;
    element.style.transform = value;
}