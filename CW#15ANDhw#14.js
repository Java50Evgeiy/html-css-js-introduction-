
// //  function coloringString(str1, str2) { const arStr2 = Array.from(str2); 
// //     const res = arStr2.map(function(symbol,index) { 
// //         let color; 
// //         if(symbol === str1[index]) { 
// //             color = "green" 
// //         } else { 
// //             color = str1.includes(symbol) ? "yellow" : "red"; 
// //             // color = str1.indexOf(symbol) > -1 ? "yellow" : "red"; 
// //         } 
// //         return color; 
// //     }) 
// //     return res; 
// // } 
// // // console.log(`function coloringString("pappy", "apple") returns ${coloringString("pappy", "apple").join(' ')}`) 
// // // console.log(`function coloringString("pappy", "pappy") returns ${coloringString("pappy", "pappy")}`)


// // function getNumbersWithDigitsAmount(digitsAmount, array) { 
// //     const res = array.filter(function(number) { 
// //      const nDigits = getNumberDigits(number); 
// //      return nDigits === digitsAmount; 
// //  }); 
// //  return res 
// // } 
// // function getNumberDigits(number) { 
// //  number = Math.abs(Math.trunc(number)); 
// //  const res = number.toString().length; 
// //  return res; 
// // } 
// // console.log(`getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000]) returns ${getNumbersWithDigitsAmount(3, [1, 100, -100, 25, 1000])}`)

// const array = [123,9,28,3,44];
// array.sort(function(e1,e2){
//     // return e1.toString().length - e2.toString.length;
//     let res = e1.toString().length - e2.toString().length;
//     if(!res){
//         res=e1-e2;
//     }
//     return res;
// });
// console.log(`result of sorting [123,9,28,3,44] is ${array}`)


// // hw#15 
// // sort 1 
//  function evenOddsort(array){
//     //todo
//     //sort array of numbers in the order aven go before the odd ones
//     //example input array [20,-10,333,1000,552,7,-7] =>  [20,-10,1000,552,333,7,-7]
//  }
//  function Oddsort(array){
//      //example input array [20,-10,333,1000,552,7,-7] =>  [333,7,-7,20,10,1000]
//  }
//  function EvenAscOddDesk(array){
//     //sort array of numbers in the order
//  }


//reduce 
//find sum of the numbers in the array
function sum(array){
    const res = array.reduce(function(res, cur){
         return res + cur;
    },-15);
    return res; 
}
console.log(`sum([1,2,3,4,5]) returns ${sum([1,2,3,4,5])} `)