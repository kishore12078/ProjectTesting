
var count = 0;

function increase() {
    document.getElementById("number").value = ++count;
    if (count > 0) {
        document.getElementById("number").style.color = "green";
    }
}

function decrease() {
    document.getElementById("number").value = --count;
    if (count < 0) {
        document.getElementById("number").style.color = "red";
    }
}

function reset() {
    count = 0;
    document.getElementById("number").value = count;
    document.getElementById("number").style.color = "black";
}
