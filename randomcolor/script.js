let btn = document.querySelector('button');
let div = document.querySelector('.color');
let h1 = document.querySelector('h1');

btn.addEventListener("click",function(){
    let change = changeColor();
    h1.innerText = change;
    btn.style.backgroundColor= change;
    div.style.backgroundColor = change;
})

function changeColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let rgb=`rgb(${red},${green},${blue})`;
    return rgb;
}

let divv = document.querySelector('.divv');
console.log(divv);
divv.addEventListener("mouseover",function(){
    divv.style.backgroundColor = changeColor();
});

let input = document.querySelector('input');
let h11 = document.querySelector('h1');
input.addEventListener('input',function(){
    let name = input.value;
    const filteredName = name.replace(/[^a-zA-Z ]/g, "");


    h1.innerText = filteredName;
    
})