


var c=document.getElementById("myCanvas");


console.log(c);
var ctx=c.getContext("2d");

var grd=ctx.createLinearGradient(0,0,300,50);

grd.addColorStop(0,"#FF0000");
grd.addColorStop(1,"#2196F3");

// ctx.fillStyle=grd;
// ctx.fillRect(0,0,300,150); 

/*width: 50px;
height: 100px;
multi 1500
*/


ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(150,150); 
ctx.lineTo(300,0);
// ctx.stroke();  

ctx.closePath();
ctx.fillStyle=grd;
ctx.fill();

 


console.log("i am canva")