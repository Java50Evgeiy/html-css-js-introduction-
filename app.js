

function myParseInt (str,base)
{
    base=base ? base : 10;
    let res = 0;
    if (str[0]==='-' && base <=10){
        for(let i =1 ; i< str.length ; i++)
        {
            if(getCode(str[i]<=9 && getCode(str[i]>=0))){
                res=res*base + getCode(str[i]);
            }
            else{
                break;
            }
        }
        return res;
    } else if (str[0]==='-' && base >10 ){
            for(let i =1 ; i< str.length ; i++){
                res=res*base + getCode(str[i]);

            }
            return res;
        }else if(base<=10){
                for(let i =1 ; i< str.length ; i++){
                    res=res*base + getCode(str[i]);
            }return res;
}
}
function getCode(symbol){
    return symbol <= "9" ? +symbol : -1; 
}

console.log(myParseInt("-123.456irf",10))






// let srt = "123m"
// let num = parseInt(srt) +10;
// let str1="js.5"
// let nunInt = parseInt(str1, 32);
// let numFloat = parseFloat(str1);
// function myParseInt(str, base) { 
//     base = base || 10; 
//     let res = 0; 
//     for(let i = 0; i < str.length; i++) { 
//         res = res * base + getCode(str[i]); 
//     } 
//     return res; 
// } 
// function getCode(symbol) { 
//     symbol = symbol.toLowerCase(); 
//     const codeA = "a".charCodeAt(); 
//     const res = symbol <= "9" ? +symbol : symbol.charCodeAt() - codeA + 10; 
//     return res; 
// } 
 
// let str1 = "ff"; 
// let str2 = "123"; 
// let str22 = "Java"; 
// let str3 = "123m"; 
// let str4 = "123.5"; 
// let num = parseInt(str1, 16); 
// let myNum = myParseInt(str1, 16); 
// num = parseInt(str2); 
// myNum = myParseInt(str2); 
// num = parseInt(str22, 36); 
// myNum = myParseInt(str22, 36); 
// num = parseInt(str3); 
// myNum = myParseInt(str3); 
// num = parseInt(str4); 
// myNum = myParseInt(str4);
// let number=255;
// let str = "" +number;
// str = number.toString(36);
// function myToString(nnumber,base){
// let res="";
// base = base ||10;
// number= Math.trunc(Math.abs(number));
// do{
//     const ddigit= number % base;
//     const digit=getSymbol(digit,base);
//     rea=symbol+res;
//     number= Math.trunk(number/base)
// }while(number);
// return rea;
// }
// function getSymbol(digit){
//     const codeA = "a".charCodeAt();
//     let symbol;
//     if(digit<10){
//         symbol= ""+digit;

//     }else{
//         const codeAscii = digit - 10 + codeA;
//         symbol= String.fromCharCode(codeAscii);
//     }
// return symbol;


// }
// let num100 = 990500;
// let str100= num100.toString();
// let myStr100 = myToString(num100);
// str100 = num100.toString(36);
// myStr100 = myToString(num100,36);
