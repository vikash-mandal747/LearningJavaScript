//Day 5 Nested Loop:


//Grand father and Sam

//start - 0
//ens - 3

//sam
//start - 0
//ens - 3

//dada
// for(let dada = 0; dada < 4; dada++){
//   //sam
//   for(let sam = 0; sam<4; sam++){
//     console.log("dada",dada,"sam",sam)
//   }
// }


//nested loop with dada = i and sam = j

// for(let i = 0; i<4; i++){
//   for(let j = 0; j<4; j++){
//     console.log(i,j)
//   }
// }



//pattern
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * * * * * * * *

// for(let i = 0; i<5; i++){
//   //dada ji bag
//   let bag = "";  
//   for(let j = 0; j<10; j++){
//     bag = bag+"*"+" ";
//   }
//   console.log(bag)
// }


// * 
// * * 
// * * * 
// * * * * 
// * * * * *

// for(let i = 1; i<=5; i++){
//   let bag = ""
//   for(let j = 1; j<=i; j++){
//     bag = bag + "*"+" ";
//   }
//   console.log(bag);
// }


// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


// for(let i = 1; i<=5; i++){
//   let bag = "";
//   for(let j = 1; j<=i; j++){
//     bag = bag + j + " ";
//   }
//   console.log(bag);
// }




// * * * * * 
// * * * * 
// * * * 
// * * 
// *

for(let i = 5; i>=1; i--){
    let bag = ""
    for(let j = 1; j<=i; j++){
      bag = bag + "*"+" ";
    }
    console.log(bag);
  }
  
  
  
  //Q:Sultan share his power with bahulbali till bahubali does not exceed sultan power
  
  
  
  
  
  
  
  
  