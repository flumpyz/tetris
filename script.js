window.onload = function () {
    const c_canvas = document.getElementById("tetris-canvas");
    let context = c_canvas.getContext("2d");

    for (let x = 0.5; x < 1500; x += 50) {
        context.moveTo(x, 0);
        context.lineTo(x, 1000);
    }

    for (let y = 0.5; y < 1000; y += 50) {
        context.moveTo(0, y);
        context.lineTo(1500, y);
    }

    context.strokeStyle = "#000000";
    context.lineWidth = 2;
    context.stroke();

    context.rect(200, 0, 50, 50);
    context.rect(250, 0, 50, 50);
    context.rect(250, 50, 50, 50);
    context.rect(300, 50, 50, 50);
    context.strokeStyle = "#000000";
    context.fillStyle = "#EBD753";
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowColor = "#bbbbbb";
    context.shadowBlur = 10;
    context.fill();
    context.stroke();
}