var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 2;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function pencil(){
window.onresize = function(){
    var image = context.getImageData(0,0,canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.putImageData(image, 0,0);
}


var putPoint = function(e){
    if(dragging){
        context.lineWidth = radius*2;
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
        context.fill();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
}

var engage = function(e){
    dragging = true;
    putPoint(e);
}

var disengage = function(){
    dragging = false;
    context.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);
}




function erase(color){
    context.strokeStyle = color;
    context.fillStyle = color;
}




var clearButton = document.getElementById('clearCanvas');
clearButton.addEventListener('click', clear);
function clear() { context.clearRect(0, 0, canvas.width, canvas.height); }


var saveButton = document.getElementById('saveCanvas');
saveButton.addEventListener('click', save);
function save() { 
    var data = canvas.toDataURL();
    window.open(data, '_blank', 'location=0, menubar=0');    
}




