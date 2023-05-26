const color = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


function colors() {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += color[random()];
    }
    document.body.style.backgroundColor = hex;
    document.getElementById("span").innerHTML = '' + hex;
}

function random() {
    return Math.floor(Math.random() * color.length);
}
