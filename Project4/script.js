// JavaScript source code

var number_of_boxes = 10;


function myColor() {
    var unorderd_list = document.querySelector(".list");
    unorderd_list.innerHTML='';
    for (let i = 0; i < number_of_boxes; i++) {
        var random_val = Math.floor(Math.random() * 0xffffff).toString(16); //convert the value into hexadecimal string value because 16 is a hexadecimal value 
        var hex_val = `#${random_val.padStart(6, '0')}`;

        var box = document.createElement("li");
        box.classList.add("box");
        box.innerHTML = `<div class="colour" style="background-color:${hex_val}"></div>
                <div class="text">${hex_val}</div>`
        box.addEventListener("click", () => myFunction(box, hex_val));
        unorderd_list.appendChild(box);
    }
    var myFunction = (box, hex_val) => {
        var texts = box.querySelector(".text");
        navigator.clipboard.writeText(hex_val).then(() => {
            texts.innerHTML = 'Copied';
            setTimeout(() => { texts.innerHTML = hex_val,1000 })
        })
    }
}