// ա)Տրված են a և b բնական թվերը: Արտածել Yes, եթե դրանք երկուսն էլ կենտ են,հակառակ դեպքում արտածել No:

// function x(a, b){
//     if( a % 2 == 1 && b % 2 == 1){
//         console.log("Yes");
//     }else{
//         console.log("No");
//     }
// }
// x (3, 3);

// բ)Տրված են a և b բնական թվերը: Արտածել Yes, եթե դրանցից գոնե մեկը կենտ է,հակառակ դեպքում արտածել No:

// function x(a, b){
//     if( a % 2 == 1 || b % 2 == 1){
//         console.log("Yes");
//     }else{
//         console.log("No");
//     }
// }
// x (3,44);

// գ)Տրված են a և b բնական թվերը: Արտածել Yes, եթե դրանցից ճիշտ մեկը կենտ է,հակառակ դեպքում արտածել No:

// function x(a, b){
//     if ((a % 2 !== 0 && b % 2 == 0) || (a % 2 == 0 && b % 2 !== 0)) {
//         console.log("Yes");
//     }else{
//         console.log("No");
//     }
// }   
// x (4, 3)

// դ)Տրված են a և b բնական թվերը: Արտածել Yes, եթե դրանք երկուսն էլ կենտ են կամ երկուսն էլ զույգ,հակառակ դեպքում արտածել No:

// function x(a, b){
//      if((a % 2 == 1 && b % 2 == 1) || (a % 2 == 0 && b % 2 == 0)){
//         console.log("Yes");
//      }else{
//         console.log("No");
//      }
// }
// x(3,3)







// 2
// ա)Տրված են a, b և c ամբողջ թվերը: Արտածել Yes, եթե դրանցից գոնե մեկը զրո է,հակառակ դեպքում արտածել No

// function x(a, b, c){
//     if( a == 0 || b == 0 || c == 0){
//         console.log("Yes");
//     }else{
//         console.log("No");
//     }
// }
// x(5,8,0);

// բ)Տրված են a, b և c ամբողջ թվերը: Արտածել Yes, եթե դրանցից ճիշտ մեկը հինգ է,հակառակ դեպքում արտածել No

// function x(a, b, c) {
//     if (a === 5 || b === 5 || c === 5) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }
// }
// x(4,9,5);

// գ)Տրված են a, b և c ամբողջ թվերը: Արտածել Yes, եթե դրանցից ոչ մեկը մյուսներին հավասար չէ,հակառակ դեպքում արտածել No

// function x(a, b, c){
//     if( (a !== b &&  b !== c && a !== c)){
//         console.log("Yes");
//     }else{
//         console.log("No");
//     }
// }
// x(8,4,7);

// դ)Տրված են a, b և c ամբողջ թվերը: Արտածել Yes, եթե դրանցից ճիշտ երկուսն են հավասար,հակառակ դեպքում արտածել No

// function x(a, b, c) {
//     if ((a == b && a !== c) || (a == c && a !== b) || (b == c && b !== a)) {
//         console.log("Yes");
//     }else {
//         console.log("No");
//     }
// }
// x(3,0,9);


// ե)Տրված են a, b և c ամբողջ թվերը: Արտածել Yes, եթե դրանցից բոլոր երեքն իրար հավասար են,հակառակ դեպքում արտածել No

// function x(a, b, c){
//     if( a == b && a == c && b == c){
//         console.log("Yes");
//     }else{
//         console.log("No");
//     }
// }
// x(9,9,9);

// զ)Տրված են a, b և c ամբողջ թվերը: Արտածել Yes, եթե դրանցից գոնե մեկը բացասական է,հակառակ դեպքում արտածել No  


// function x(a, b, c){
//     if( a < 0 || b < 0 || c < 0){
//         console.log("Yes");
//     }else{
//         console.log("No");
//     }
// }
// x(9,-8,5);


// let daynumber = 0;
// if(daynumber === 0){
//     console.log("sunday");
// }else if(daynumber === 1){
//     console.log("Monday");
// }else if(daynumber ===2){
//     console.log("Tuesday");
// }else if(daynumber ===3){
//     console.log("wednsday");
// }else if(daynumber ===4){
//     console.log("thursday");
// }else if(daynumber ===5){
//     console.log("friday");
// }else if(daynumber === 6){
//     console.log("saturday");
// }else{
//     console.log("Invalid day number");
// }


// let daynumber = 13;
// switch(daynumber){
//     case 0:
//      console.log("sunday");
//     break;
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("wednsday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;

//      default:{
//         console.log("sdxfcgvhj");
//      }
// }


let x = function hello(){
    console.log("barevner");
} 

x();

let y = 4;