/*
var canv= document.getElementById("myCanvas");
resize();
drawText("Lin & Ren Accounting Services",30,65,"bold  50px Times");
    //colorback();
    
canv.addEventListener("mousedown",function(event){       
       
});
canv.addEventListener("mousemove",function(event){ 
       
});
    
*/

setInterval(function(){
       
},20);

function resize(){
    canv.width=window.innerWidth;
    canv.height= window.innerHeight;
    drawText("Lin & Ren Accounting Services",30,65,"bold  50px Times");
} 
    
function drawText(stringN,x,y,styleX){
    
    var ctx = canv.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.font = styleX;
    ctx.fillText(stringN, x, y);
}
    
function makeGradient(){
    var ctx = canv.getContext("2d");
        // Create gradient
        var grd = ctx.createLinearGradient(0, 100, 0, 400);
        grd.addColorStop(0, "rgba(51, 102, 255, 1)");
        grd.addColorStop(1, "rgba(255, 255, 255, 1)");

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 101, canv.width, 400);
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillRect(0, 500, canv.width, canv.height);
        
        //ctx.fill();
}
function colorback(){
    var ctx = canv.getContext("2d");
    ctx.strokeStyle="rgba(51, 102, 255, 1)";
    ctx.fillStyle="rgba(51, 102, 255, 1)";
    ctx.rect(0, 0, canv.width, canv.height);
    //ctx.stroke();
    ctx.fill();
    ctx.moveTo(0,100);
    ctx.lineTo(canv.width, 100);
    ctx.strokeStyle="rgba(100, 100, 100, 1)";
    //ctx.stroke();
    
    
}
  