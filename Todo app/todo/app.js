let input = document.querySelector('input');
let btn= document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener("click",function(){
    let newli = document.createElement('li');
    if(input.value != ""){
    newli.innerText = input.value;

    let dlt = document.createElement('button');
    dlt.classList.add("delete");
    dlt.innerText="Delete";
    newli.appendChild(dlt);

    ul.appendChild(newli);
    input.value = "";
    }
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == 'BUTTON'){
        let dltbtn = document.querySelector('.delete');
        dltbtn.parentElement.remove();
    }
})