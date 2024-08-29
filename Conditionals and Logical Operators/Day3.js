//Day3 Conditional statement and Logical operator
//there is raining or not
// let isRaining = false;

// //true than it wil run
// if(isRaining === true){
//   console.log("lets watch a movie");
//}


// let a = 1;
// let b = 3;
// //1>3-false..if condtion will not run
// if(a>b){
//   console.log("a is greater than b");
// }



// let isRaining = false;

// if(isRaining===true){
//   console.log("watch a movie");
// }
// //if condition give you false
// else{
//   console.log("lets go for party");
// }



// let totalPrice = 500;
// //min limit = 500
// //300 - pay dc
// //600 - free
// //500>=500-true

// if(totalPrice >=500){
//   console.log("Free Shipping");
// }
// else{
//   console.log("rs.50 applicabe for shipping");
// }



//login

// let isLogin = true;

// if(isLogin===true){
//   console.log("you can buy product now");
// }
// else{
//   console.log("please login first...");
// }




// let signalColor = "pink";

// if(signalColor==="red"){
//   console.log("please stop the car");
// }
// else if(signalColor==="yellow"){
//   console.log("please stop or go slow");
// }
// else if(signalColor==="green"){
//   console.log("you can go");
// }
// else{
//   console.log("give the right signal");
// }




//science - 95 - AA
//80 - BB


// let pabloScore = 80;
// if(pabloScore>=90){
//   console.log("AA");
// }
// else if(pabloScore>=80){
//   console.log("A+");
// }
// else if(pabloScore>=70){
//   console.log("B+");
// }
// else if(pabloScore>=60){
//   console.log("B");
// }
// else{
//   console.log("better luck next time");
// }




//discount problem:
//more than 50,000 = 35% disct
//more than 30,000 = 30% disct
//more than 15,000 = 20% disct
//more than 5,000 = 10% disct

//55,000 - 35%disct
//3000 - no disct
//21,000 - 20% disct

// let shoppingBill = 2000;

// if(shoppingBill>50000){
//   console.log("35% disct")
// }
// else if(shoppingBill>30000){
//   console.log("30% disct")
// }
// else if(shoppingBill>15000){
//   console.log("20% disct")
// }
// else if(shoppingBill>5000){
//   console.log("10% disct")
// }
// else{
//   console.log("no disct")
// }







//mother - market - rice , wheat , apple

let riceAvl = false;
let wheatAvl = true;
let appleAvl = true;

//2

// if(riceAvl===true){
//   console.log("buy rice");
// }
// else if(wheatAvl===true){
//   console.log("buy wheat");
// }
// else if(appleAvl===true){
//   console.log("buy apple");
// }



//if we need multiple output than we need multiple if block

// if(riceAvl===true){
//   console.log("buy rice");
// }
// if(wheatAvl===true){
//   console.log("buy wheat");
// }
// if(appleAvl===true){
//   console.log("buy apple");
// }




//Marriage problem

// let age = 21;
// let gender = "male";
// //first we need to check gender
// if(gender==="male"){
//   if(age>=21){
//     console.log("you can marry");
//   }else{
//     console.log("you can not marry");
//   }
  
// }
// else{
  
//   if(age>=18){
//     console.log("you can marry");
//   }else{
//     console.log("you can not marry");
//   }
  
// }













//Q: what will be the day after jump , number of days from current day
let day = "sunday";
let jump = 4;//sunday

let current_day;
if(day=="monday"){
  current_day = 1;
}else if(day=="tuesday"){
  current_day = 2;
}else if(day=="wednesday"){
  current_day = 3;
}else if(day=="thursday"){
  current_day = 4;
}else if(day=="friday"){
  current_day = 5;
}else if(day=="saturday"){
  current_day = 6;
}else if(day=="sunday"){
  current_day = 7;
}

let final_day = current_day + (jump%7);
console.log(final_day)
if(final_day==1){
  console.log("monday");
}else if(final_day==2){
  console.log("tuesday");
}else if(final_day==3){
  console.log("wednesday");
}else if(final_day==4){
  console.log("thursday");
}else if(final_day==5){
  console.log("friday");
}else if(final_day==6){
  console.log("saturday");
}else if(final_day==7){
  console.log("sunday");
}








// if(jump%7==0){
//   console.log("wednesday");
// }
// else if(jump%7==1){
//   console.log("thursday");
// }
// else if(jump%7==2){
//   console.log("friday");
// }
// else if(jump%7==3){
//   console.log("saturday");
// }
// else if(jump%7==4){
//   console.log("sunday");
// }
// else if(jump%7==5){
//   console.log("monday");
// }
// else if(jump%7==6){
//   console.log("tuesday");
// }
