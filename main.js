fill(0.8, 0.4, 0.5);

function fill(a, b, c) {
    empty();
    var main = document.querySelector('.main'),
        blocks = (parseInt(main.offsetWidth / 20)) * 20;

    for (var i = 0; i < blocks; i++) {

        var div = document.createElement("div");

        div.className = `square a${i}`;
        main.appendChild(div);
        div.setAttribute(`onclick`, `text('.a${i}');`);

        div.style.background = colour(a, b, c);
    }
}

function text(square) {
    document.querySelector(square).innerHTML = "♡";
}


function empty() {
    var main = document.querySelector('.main');
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
}


function colour(r, g, b) {
    var red, green, blue;
    hex = "#";

    red = random(parseInt(255 * r), 255);
    if (red < 16)
        hex += "0" + red.toString(16);
    else
        hex += red.toString(16);

    green = random(parseInt(255 * g), 255);
    if (green < 16)
        hex += "0" + green.toString(16);
    else
        hex += green.toString(16);

    blue = random(parseInt(255 * b), 255);
    if (blue < 16)
        hex += "0" + blue.toString(16);
    else
        hex += blue.toString(16);

    return hex;
}

function grey(a, b) {
    var x, r = random(a, b);
    if (r < 16)
        x = "0" + r.toString(16);
    else
        x = r.toString(16);
    return "#" + x + x + x;
}

function random(from, to) {
    var interval = (to + 1) - from;
    var number = Math.floor(Math.random() * interval) + from;
    return number;
}