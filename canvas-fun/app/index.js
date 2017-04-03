'use strict';

var canvas = document.querySelector('#draw');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
var direction = true;

var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;

function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = 'hsl(' + hue++ + ', 100%, 50%)';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();var _ref = [e.offsetX, e.offsetY];
    lastX = _ref[0];
    lastY = _ref[1];


    if (hue >= 360) hue = 0;

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
    direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousedown', function (e) {
    isDrawing = true;var _ref2 = [e.offsetX, e.offsetY];
    lastX = _ref2[0];
    lastY = _ref2[1];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', function () {
    return isDrawing = false;
});
canvas.addEventListener('mouseout', function () {
    return isDrawing = false;
});