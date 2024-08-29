//Day 4 Looops

//how to check if a number is even and divisible by 8

// let num = 16;//even and divisible by 8//true

// let num2 = 12;//even and not divisivle by 8//false

// if(num2 % 2 == 0 && num2 % 8 == 0){
//   console.log(true);
// }else{
//   console.log(false);
// }



// not operator --> ! (reverse boolean value)

// console.log(!true);//false
// console.log(!false && true);//true
// console.log(!true || true);//true



//Increment / Decrement
// let num = 10;
// num = num + 1;//11
// num = num + 3;//14
// num = num + 2;//16
// num = num + 1;//17
// console.log(num);

// let num = 10;
// num = num - 1;//9
// num = num - 2;//7
// num = num + 2;//9
// num = num - 1;//8
// num = num + 3;//11
// console.log(num);


// let num = 10;
// num--;//9
// console.log(num)

// let num = 10;
// num++;//11
// console.log(num)





//LOOP

// console.log("hello pablo");// run 1 time

//run 6 time
// console.log("hello pablo");
// console.log("hello pablo");
// console.log("hello pablo");
// console.log("hello pablo");
// console.log("hello pablo");
// console.log("hello pablo");


//run 10000 time
//Here we need lOOP
// print "hello pablo" 10 times using Loop

//syntax of for loop
// for(start; condition; inc/dec){
//  print()
// }


// for(let start = 0; start < 5; start++){
//   console.log("hello pablo");
// }


//print 1 to 100 using a loop
// for(let start = 1; start <= 100; start++){
//   console.log(start);
// }



//print 10 to 35 using a loop
// for(let start = 10; start <= 35; start++){
//   console.log(start);
// }




//print 10 to 20 using a loop in horizontal line
// let bag = "";
// for(let start = 10; start <= 20; start++){
//   bag = bag + start + " ";
//   console.log(bag);
// }
// console.log(bag);





// for(let i = 1; i<=5; i++){
//   console.log(i);
// }



//Reverse Loop
// 5 4 3 2 1

// for(let i = 5; i>=1; i--){
//   console.log(i);
// }



// break : break means come out of loop
//5 relative member to drop them at station one by one
//o/t 1 2 3
// for(let i=1; i<=5; i++){
  
//   // console.log(i)
//   if(i==4){
//     break;
//   }
//   console.log(i);
// }


//continue: continue means skip an iteration

//o/t 1 2 4 5

// for(let i = 1 ; i<=5; i++){
  
//   if(i===3){
//     continue;
//   }
  
//   console.log(i);
// }










//Q: what will be the day after jump , number of days from current day
let day = "saturday";
let jump = 7;

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

let final_day = (current_day+jump)%7;
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
}else{
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




