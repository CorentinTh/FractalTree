/**
 * Created by Corentin THOMASSET on 17/09/2017.
 */

var canvas;
var ctx;
var W, H, hW, hH;

window.onload = function () {
    canvas=document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");

    if (!ctx) {
        alert("Error: can't get the context of the canvas.");
        return;
    }

    W = canvas.width;
    H = canvas.height;

    hW = W/2;
    hH = H/2;

    draw();
};

var angle, len, reducer;

function draw(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, W, H);

    // We move the 0,0 point of the canvas to the middle-bottom
    ctx.translate(hW, H);

    ctx.moveTo(0,0);

    console.log("draw");
    angle = document.getElementById("angle").value;
    len = document.getElementById("lenght").value;
    reducer = document.getElementById("reducer").value;


    ctx.beginPath();
    drawBranch(len);
    ctx.strokeStyle = "#eeeeee";
    ctx.stroke();
}

function drawBranch(lenght) {
    ctx.moveTo(0,0);
    ctx.lineTo(0,-lenght);
    ctx.translate(0, -lenght);

    if (lenght > 4) {
        ctx.save();
        ctx.rotate(angle);
        drawBranch(lenght * reducer);
        ctx.restore();

        ctx.save();
        ctx.rotate(-angle);
        drawBranch(lenght * reducer);
        ctx.restore();
    }
}
