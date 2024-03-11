let todo = [];

let req = prompt("Please enter your request!");


while(true) {
    if(req == "Quit"){
        console.log("Quitting the App!");
        break;
    }

    else if(req == "List") {
        console.log("-----------------------------");
        for(let i  = 0 ; i< todo.length ; i++){
            console.log(i, todo[i]);
        }
        console.log("-----------------------------");
    }

    else if(req == "Add"){
        let task = prompt("Enter your task");
        todo.push(task);
        console.log("task added!")
    }

    else if( req == "Delete"){
        let idx = prompt("please enter the index you want to delete!")
        todo.splice(idx,1);
        console.log("task deleted!" )
    }
    else{
        console.log("Wrong request!");
    }
     req = prompt("Please enter your next request!");

}