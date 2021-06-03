var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var width=screen.width;
var newwidth=screen.width-70;
var newheight=screen.height-300;
if (width<992){
    canvas.width=newwidth;
    canvas.height=newheight;
    document.body.style.overflow="hidden";
    }
canvas.addEventListener("touchstart",mytouchstart );
function mytouchstart(e) {
 console.log("mytouchstart");
 color=document.getElementById("color").value ;
 width_of_line=document.getElementById("width_of_line").value ;
 last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
 last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
 }
 canvas.addEventListener("touchmove",mytouchmove );
 function mytouchmove(e) {
    console.log("mytouchmove");
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
    
    ctx.beginPath() ;
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("last position of x,y coordinates= ");
    console.log("x= "+last_position_of_x+"y= " +last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);    
    console.log("current position of x,y coordinates= ");
    console.log("x= "+current_position_of_touch_x+"y= " +current_position_of_touch_y);
    ctx.moveTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
    }
     function cleararea() {
         ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
     }