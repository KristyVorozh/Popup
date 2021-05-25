var modal=document.getElementById("mymodal");
var btn=document.getElementById("button");
var close=document.getElementsByClassName("modal_close")[0];

btn.onclick=function(){
    modal.style.display="block";
}
close.onclick=function(){
    modal.style.display="none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
var yesblock=document.getElementById("yesvalid")
let inp=document.querySelector('#phone');
let reg1=/[A-Za-zA-Яа-яЁё]/;
var yesblock1=document.getElementById("yesvalid1")
let inp1=document.querySelector('#name');
var error=0;

document.querySelector('#modal_button').onclick=function (e) {
    e.preventDefault();

    if (!validate(reg, inp.value)) {
        notValid(inp);
    } else {
        valid(inp);
    }
    if (!(validate1(reg1, inp1.value))) {
        notValid1(inp1);
    } else {
        valid1(inp1);
    } 
}


function validate(regex, inp) {
    return regex.test(inp);
}

function notValid(inp) {
    inp.classList.add('is-invalid');
}

function valid(inp) {
    inp.classList.remove('is-invalid');
    yesblock.style.display="block";
}

function validate1(regex1,inp1) {
    return regex1.test(inp1);
}

function notValid1(inp1) {
    inp1.classList.add('is-invalid');
}

function valid1(inp1) {
    inp1.classList.remove('is-invalid');
    yesblock1.style.display="block";
}