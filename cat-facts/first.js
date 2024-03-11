// console.log("hello world");
// var age = "Tony stark";
// console.log(age);

// const student = {
//     name : "rahul",
//     age:12,
//     marks:45
// };
// student["age"] = student["age"]+1;
// student["name"] = "ritika";

// const product = {
//     productName : "Parker jotter Standard CT ball pen(black)",
//     rating:4, 
//     price:270,
//     offer:5
// };

// const profile ={
//     userName:"Shradhakhapra",
//     post:198,
//     followers:568,
//     following:24
// }
// a?a:b

// let a = prompt("enter a number");
// if(a%5 == 0){
//     console.log("multiple of 5");

// }
// else{ 
//     console.log("not a multiple of 5");
// }

// let str = "helllo world"
// for(let i of str){
//     console.log(i);
// }

// for(let obj in profile){
//     console.log(profile[obj]);
// }
// for(let i = 0 ; i<= 100 ; i++){
//     if(i%2 == 0)
//     console.log(i);
// }
// let target = 8;
// let a = (prompt("enter any number"));
// while(a != target){
//      a= (prompt("enter any number"));
   
//     }
// console.log("congratulatios !!")\

// let size = prompt("enter popcorn size");
// if(size == "XL"){
//     console.log("price is ", 250 );
// }else if(size == "L"){
//     console.log("Price is ", 150);
// }else if(size == "M"){
//     console.log("price is", 100);
// }else if(size == "S"){
//     console.log("price is ", 50);
// }
// else{
//     console.log("Invalid size")
// }

// let string = "a1332";
// if(string[0]== 'a' && string.length > 3){
//     console.log("it is a good string");
// }else{
//     console.log("it is not a good string");
// }
// console.log(string.startsWith('a'));

// let num  = 10;
// if(num%10 == 0){
//     console.log("number is good");
// }else{
//     console.log("number is bad");
// }

// let fullname = prompt("enter your name:");
// let age = prompt("enter your age:");
// console.log(`${fullname} is ${age} years old`);

// let quarter = parseInt(prompt("enter a quater month"));
// switch(quarter){
//     case 1: console.log("January, february, march");
//     break;
//     case 2: console.log("April","May","June");
//     break;
//     case 3: console.log("july","aug","sep");
//     break;
//     case 4: console.log("oct", "nov", "dec");
//     break;
//     default: console.log("you have entered a wrong quarter month");
// }
// let string = prompt("enter a string:");
// if((string.charAt(0) == 'A'||string.charAt(0) == 'a')&& string.length > 5){
//     console.log("Golden String")
// }else{
//     console.log("bad string");
// }

// let a = 3;
// let b = 5;
// let c = 6;
// if(a > b){
//     if(a > c){
//         console.log(" a is greater");
//     }else{
//         console.log(" c is greater");
//     }
// }else{
//    if( b > c){
//     console.log("b is greater");
//    }else{
//     console.log("c is greater");
//    }
// }

// let num1 = 34 %10 ;
// let num2 = 2334532%10;

// if(num1 == num2){
//     console.log("same");
// }else{
//     console.log("different");
// }

// let str = "hello!"
// console.log(str.trim().toUpperCase());

// let str = 'apnacollege';
// console.log(str.slice(4).replaceAll('l','t'));
// let arr = [3,4,6,7,6];
// let n = 3;
// console.log(arr.slice(0,3));
// console.log(arr.slice(-n));
// let string = "Hello";
// if(string == ""){
//     console.log("string is empty");
// }else{
//     console.log("string is not empty");
// }
// let i = 0;

// if(string[i] == string[i].toUpperCase()){
//     console.log("index's is in uppercase");
// }else{
//     console.log("not in uppercase");
// }


// let arr = [1,3,3,9,5,3,5,4,2,3,3];
// let max = arr[0];
// for(let i  = 0; i< arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
  
// }
// console.log(max);

//     console.log(arr);

// let num = 4;
// let count =1 ;
// while(num > 0){
//     count *= num;
//     num--;
   
// }
// console.log(count);
// let random  = Math.floor(Math.random()*6)+1;
// console.log(random);

// const car ={
//     namee: "BMW",
//     model: 132,
//     color:"Black"

// }
// console.log(car.namee);

// const person ={
//     FullName : "abcd",
//     age:23,
//     city:"delhi"
// }
// person.city ="newyork";
// person.country = "us";
// console.log(person);

// function largerNumber(arr, number){
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] > number)return arr[i];
//         else return -1;
//     }
// }
// let arr = [7,3,4,5,6];
// let num = largerNumber(arr, 4);
// console.log(num)
// function func(country){
//     let max = country[0].length;
//     let ans ="";
//     for(let i = 0 ; i< country.length; i++){
//          if(max < country[i].length){
//             max = country[i].length;
//             ans = country[i];
//          }
//     }
//     return ans;
// }
// country = ["Australia", "Germany", "United States of America"]
// console.log(func(country));


// function unique(str){
//     let ans = "";
//     for(let i =0; i< str.length; i++){
//         if(!(ans.includes(str[i]))){
//             ans+=str[i];
//         }
//     }
//     console.log(ans);
// }

// unique("abcdabcdefgggh");

// function count(str){
//     let count = 0;
//     for(let i = 0; i< str.length;i++){
//         if(str[i]=='a'||str[i]=='e'||str[i]=="i"||str[i]=='o'||str[i]=='u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(count("avni"));

// let start = 50;
// let end = 70;
// function func(){
//  console.log(Math.floor(Math.random()*20)+50);
// }


// let arr =  [1,3,4,5];
// let sum = 0;
// let avg = (arr) => {
//     for(let i = 0; i< arr.length; i++){
//         sum += arr[i];
//         return sum/arr.length;
//     }
    
// }
// console.log(avg(arr));

// let isEven = (n) => {
//     if(n%2 == 0){
//         console.log("even");
//     }else{
//         console.log("not even");
//     }
// }

// // isEven(3);
// const object ={ 
// message : 'hello, world',
// logMessage(){
// console.log(this.message);
// }
// };
// setTimeout(object.logMessage,1000);


// let length = 4
// function callback(){
// console.log(this.length);
// }
// const object = {
// length:5,
// method(callback){
// callback();
// },
// };
// object.method(callback(), 1,2);

// let arr = [1,2,3,4,5];
// let newarr = arr.map((el)=>{
//     return el+5;


// });
// let red = arr.reduce((res, el)=> {return (res+el**2)})
// console.log(red);
// console.log(newarr);

// let arr1 = ['a','b','c'];
// let newarr1 = arr1.map((el)=> {
//     return el.toUpperCase();
// }
// );
// console.log(newarr1);


// function func(arr, ...args){
//     let newarr = [...arr,...args];
//     console.log(newarr);
// }
// function fun(obj1,obj2){
//     let newobj = {...obj1, ...obj2};
//     console.log(newobj);
// }
// const obj1={
//     userName: "ritika",
//     marks:6.5,
// }
// const obj2={
//     city:'amritsir',
//     country:"india"
// }
// fun(obj1,obj2);

// let newp = document.createElement('p');
// newp.innerText = "hey i am red";
// let body = document.querySelector('body');
// body.appendChild(newp);
// newp.classList.add('red');

// let newh3 = document.createElement('h3');
// newh3.innerText = " i am a blue h3";
// body. appendChild(newh3);
// newh3.classList.add('blue');

// let newdiv = document.createElement('div');
// let newh1 = document.createElement('h1');
// let newp2 = document.createElement('p');
// newh1.innerText ="i am in div";
// newdiv.appendChild(newh1);
// newp2.innerText = "me too!";
// newdiv.appendChild(newp2);
// body.appendChild(newdiv);
// newdiv.classList.add('box');
// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText= 'Click Me!';
// let body = document.querySelector('body');
// body.append(input);
// body.append(btn);

// input.setAttribute('placeholder',"username");
// btn.setAttribute('id',"btn");

// let btn1 = document.querySelector('#btn');
// btn.classList.add("white");

// let h1 = document.createElement('h1');
// h1.innerHTML = "<u>DOM practice</u>";
// h1.classList.add('purple');
// body.prepend(h1);

// let p = document.createElement('p');
// p.innerHTML = "Apna college <b>delta</b> practice";
// body.append(p);


// function one(){
//     return 1;

// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two()+one();
//     console.log(ans);
// }

// three();

// let h1 = document.querySelector('h1');

// function changeColor(color,delay,nextColor){
//    setTimeout(()=>{
//     h1.style.color=color;
//     if(nextColor)nextColor();
//    },delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("blue",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("purple",1000,()=>{
//             });
//         });
//     });
// });


let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//         console.log("fact1 ",data.fact);
//         return fetch(url);
//     })
// .then((res)=>{
//         console.log(res);
//         return res.json();
//     })
// .then((data1)=>{
//         console.log("fact2 ",data1.fact);
//     })
// .catch((err)=>{
//     console.log(err);
// })

// async function getfact(){
//     try{
//     let res =  await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
    
//     let res1 = await fetch(url);
//     let data1 = await res1.json();
//     console.log(data1.fact);

//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//     }
//     catch(e){
//         console.log(e);
//     }
// }


let btn = document.querySelector("button");
btn.addEventListener('click',  async() => {
    let fact = await getfact();
    let p = document.querySelector(".result");
    p.innerText = fact;
})


async function getfact(){
   try{ let res = await axios.get(url);
    return res.data.fact;
}
    catch(e){
        return "Not found";
    }
}