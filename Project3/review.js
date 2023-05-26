const review = [
    {
        id: 1,
        img: "elon.jpg",
        author: "Elon musk",
        designation: "SpaceX Founder",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. < br /> It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. < br /> Richard McClintock, a Latin professor at Hampden- Sydney College in Virginia, <br />looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through < br /> the cites of the word in classical literature, discovered the undoubtable source. < br /> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  < br /> (The Extremes of Good and Evil) by Cicero, written in 45 BC.This book is a treatise on the < br /> theory of ethics, very popular during the Renaissance."

    },
    {
        id: 2,
        img: "ratantata.jpg",
        author: "Ratan Tata",
        designation: "Founder of TataConsultancy",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text." + "< br />" + "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." + " < br /> " + "Richard McClintock, a Latin professor at Hampden- Sydney College in Virginia," + " <br />" + "looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through " + "< br />" + " the cites of the word in classical literature, discovered the undoubtable source." + " < br />" + " Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of " + "< br /> " + "(The Extremes of Good and Evil) by Cicero, written in 45 BC.This book is a treatise on the" + " < br />" + " theory of ethics, very popular during the Renaissance."
    },
    {
        id: 3,
        img: "stevejobs.jpg",
        author: "Steve Jobs",
        designation: "CEO of Apple",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text." + "< br />" + "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." + " < br /> " + "Richard McClintock, a Latin professor at Hampden- Sydney College in Virginia," + " <br />" + "looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through " + "< br />" + " the cites of the word in classical literature, discovered the undoubtable source." + " < br />"+" Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of " + "< br /> "+"(The Extremes of Good and Evil) by Cicero, written in 45 BC.This book is a treatise on the" + " < br />" + " theory of ethics, very popular during the Renaissance."
    },
    {
        id: 4,
        img: "jeffbezos.jpg",
        author: "Jeff Bezos",
        designation: "CEO of Amazon",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text." + "< br />" + "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." + " < br /> " + "Richard McClintock, a Latin professor at Hampden- Sydney College in Virginia," + " <br />" + "looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through " + "< br />" + " the cites of the word in classical literature, discovered the undoubtable source." + " < br />" + " Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of " + "< br /> " + "(The Extremes of Good and Evil) by Cicero, written in 45 BC.This book is a treatise on the" + " < br />" + " theory of ethics, very popular during the Renaissance."
    }
];

var picture;
var names;
var work;
var text;

var count = 0;

function assign(person) {
    picture.src = review[person].img;
    names.innerHTML = review[person].author;
    work.innerHTML = review[person].designation;
    text.innerHTML = review[person].text;
}

function next() {
    count++;
    picture = document.getElementById("images");
    names = document.getElementById("name");
    work = document.getElementById("job");
    text = document.getElementById("text");
    if (count >= review.length)
        count = 0;
    assign(count);
}

function previous() {
    count--;
    picture = document.getElementById("images");
    names = document.getElementById("name");
    work = document.getElementById("job");
    text = document.getElementById("text");
    if (count < 0)
        count = review.length - 1;
    assign(count);
}
