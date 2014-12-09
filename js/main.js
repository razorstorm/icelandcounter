$(document).ready(function(){
    var targetTime = Date.parse('8 April 2015 10:15:00 PST');
    setInterval(setTime, 1000); // every 1 second
    
    var allTime = $('div#allTime span');

    setTime();
    
    function setTime() {
        var time = new Date();
        console.log(time.getMonth());
        console.log(time.getDate());
        console.log(time.getHours());
        var days, hours, minutes;
        var secondsLeft = (targetTime - time) / 1000;

        days = parseInt(secondsLeft / 86400);
        secondsLeft = secondsLeft % 86400;

        hours = parseInt(secondsLeft / 3600);
        secondsLeft = secondsLeft % 3600;

        minutes = parseInt(secondsLeft / 60);
        seconds = parseInt(secondsLeft % 60);
        
        console.log(days);
        allTime.text(days+" Days "+hours+" Hours "+minutes+"' "+seconds+'"');
    }
});