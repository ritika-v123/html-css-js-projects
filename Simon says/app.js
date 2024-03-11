let gameseq = [];
let userseq = [];
let btn = ["red","blue","green","purple"];
let level = 0;
let start = false;
let h2 = document.querySelector('h2');
let maxScore = 0;

document.addEventListener("keypress",function(){
    if(start == false){
    start = true;
    console.log("game started");
    levelup();
    }
});
function flashbtn(btn){
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 250);
    
}


function levelup(){
    userseq = [];
    level++;
    
    h2.innerText = `Level ${level}`;

    let randbtn = btn[Math.floor(Math.random()*4)];
    let randcolor =randbtn;
    randbtn = document.querySelector(`.${randbtn}`);
    gameseq.push(randcolor);
    flashbtn(randbtn);
    console.log(gameseq);
   

}

function check(idx){;
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,750);
        }
      console.log("same value");
    }else{
        if(level > maxScore){
            maxScore = level;
        }
        h2.innerHTML = `Game Over! Your score is <b>${level} </b> <br> press any key to restart <br> Your Highest Score is ${maxScore}.`;
      
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( ()=>{document.querySelector("body").style.backgroundColor = "white"},150);
        reset();
}
}
 
function pressbtn(){
    console.log("button was pressed");
    flashbtn(this);
    let user = this.getAttribute('id');
    userseq.push(user);
    console.log(userseq);
    check(userseq.length-1);
}

let btns = document.querySelectorAll('.box');
for(let btn of btns){
    btn.addEventListener("click",pressbtn);
}

function reset(){
  start = false;
  level =0;
  userseq =[];
  gameseq =[]; 
} 