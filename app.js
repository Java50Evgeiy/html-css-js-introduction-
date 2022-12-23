// let num = 25.325;
// num=40.5;

// num=Math.floor(num);
// num=Math.trunc(num);
// num=Math.cell(num);
//  num=Math.round(num);
// num **=2;//num = num **2;


//strings
// let str= "a'bc'd";
// let str1= 'a"bc"d';  //mogno stavit skobki kak tebe udobnnee


// let res = "123" + 56;
// let res1= "123" - 56;
// let res2= "123" * 56;
// let res3=  Math.round("123" / 56);
// let res4= "123" / "2";
// let res5= "abc" /8;

// //boolean
// let a =10;
// let error = false;
// let res6= true + true;
// let res7= true && false;
// let res8= 123 && 256;
// let res9= a && 256 / a;
// let massage = error && "some error happenning"
// let res10 = a || 10;
// let res11 = a || 10;
// let res12 = "123" > "9";
// let res13 = "123" > 9;

//home work 
// function getDigitsSum(){
//     let sum = 0;
//     for(let i = 0; i < 10; i++){
//         sum += i;
//     }


    //computes sum of all digits in the integer part of the number
    //number may be either negative or positiv or 0
// }
//function computeExpression(expressionStr){
//example of expression "9000 / ((10+20))**2"
//returns 10
    //task for searching in internet
    //only one line code

//}
//console.log(computeExpression(9000 / ((10+20))**2)) ; prints 10;
//function printAnanas(){
    //use omly "A" and "S"
    //print ananas 
//}
//function reverse(number){
    //returns string with digits of given number inn the reverse ordder
    //example reverse(1234) should return "4321"
    

//}
// let n = 10;
// let count = 0;
// while (n>=0){
//     n--;
//     count++;
//}

//equlity operation (operacii sravnenia)
// let ret15="123"==123; //true
// let ret16="123"===123; //false

// //strind function for hw
// const str = "aBdTYgg";
// str= str.toLowerCase(); // s etoi funkciei vse buet s malenkoi bukvi




function getDigitsSum(number) {
    number=Math.trunc(Math.abs(number));

    let sum = 0;

   do{
    const digit =number % 10;
    nnumber = Math.trunc(number/10);
    sum += digit;
} while(number);
return sum;

}

function computeExpression(expressionString) {
    const res=eval(expressionString);
    return res;
}
function printAnanas(){
const res = ("A"+ +"A"+"AS").toLowerCase();
console.log (res);

}
function reverse(number){
    let res = number <0? "-" :"" ;
    if(number<0){
        number=-number;
 } number=Math.trunc(number);
 do{
    const digit =number % 10;
    number = Math.trunc(number/10);
    res += digit;
    } while(number);
    return res;

 }