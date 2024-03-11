let max = prompt("enter the maximum number");

let random = Math.floor(Math.random()*max)+1;

let guess = prompt("enter the guess the number");

while(true){
    if(guess == "quit"){
        console.log("quiting the game");
        break;
    }else if(guess == random){
        console.log("congrats!!");
        break;
    }else if(guess < random){
        guess = prompt("you have entered a small no. please try again!");
    }else{
        guess = prompt("you have entered a big number, Please try again!");
    }
   
}
