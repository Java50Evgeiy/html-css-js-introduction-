const array=[10,20,30,-10,11,100];
//array.splice(2,2);
const index = array.indexOf(30);
//remove all numbers from 30
//const res = array.splice(index,10);


//insert
//array.splice(index,0,-10,-20)

//replace
//array.splice(index,2,20);
// const ar1 = [40,200];
// array.splice(index,1,...ar1);
// const numbersPerPage=2;
// const page=2;
// const firsiIndex =(page-1)*numbersPerPage;
// const pageNumbers = array.slice(firsiIndex,firsiIndex+numbersPerPage); 



// const ar1 = array.map(multiply2);
// function multiply2(number){
//     return number*2;
// }
// const ar2 = array.map(function(number,index){
//     return index+1+'. ' + number;

// })
// const ar3 = array.map(function(number){
// return `<li>${number}</li>`;
// })
// const ulElement = `<ul>${ar3.join('')} </ul>`



//filter function (getting array of numbers in a given rage)

// const min=5;
// const max=15;
// const ar4 = array.filter(function(number){
//     return number>=min && number <=max;
// })

//getting array of the elements of the sourse array with even

const ar5 = array.filter(function(__,index){
    return index%2===0;
})
