integration.on('init', function(){
    var divArray = document.body.getElementsByTagName("div");
    var divCheck = divArray.length;
    var widthArray = [0];
    console.log(divArray);
    console.log(divCheck);
    console.log(divArray[1].clientWidth);
    for (var i = 0; i < divCheck; i++){
        console.log(divArray[i].clientWidth);
        //widthArray += divArray[i].clientWidth;
        //console.log(widthArray);
    }
});