$(document).ready(function(){
    var longHand = $("img#long");
    var shortHand = $("img#short");
    
    setClock();
    
    setInterval(setClock, 10000); // every 10 seconds
    
    function setClock() {
        var time = new Date();
        var hour = time.getHours()%12;
        var minute = time.getMinutes();
        
        var longHandPercent = minute / 60.0;
        var shortHandPercentRough = hour / 12.0; 
        var shortHandPercentAccurate = shortHandPercentRough + longHandPercent * 1/12.0;

        var rotateLongHandDegree = 360*longHandPercent - 90;
        var rotateShortHandDegree = 360*shortHandPercentAccurate - 90;
        
        longHand.css({'transform': 'rotate('+ rotateLongHandDegree +'deg)'});
        shortHand.css({'transform': 'rotate('+ rotateShortHandDegree +'deg)'});
    }
});