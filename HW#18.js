
// function createEmployee(id,name,birthYear,salary,city,country) {
//     return{id,name,birthYear,salary, address:{city,country}};
// }
// const employees = [
//     createEmployee(123,"Vasya",2000,15000,"Lod","Israel"),
//     createEmployee(124,"David",1975,15500,"Tel-Aviv","Israel"),
//     createEmployee(125,"Sara",1985,20000,"New York","USA"),
//     createEmployee(126,"Abraham",1990,13000,"London","UK"),
//     createEmployee(127,"Moshe",2000,15000,"Rehovot","Israel"),
//     createEmployee(128,"Goga",1993,10000,"Tbilise","Gorgia"),
//     createEmployee(129,"Sasha",2000,25000,"Ramat Gann","Israel"),
//     createEmployee(130,"Viktor",2003,10000,"Arad","Israel")

// ]
// //task1
// function getEmployee(employees,id){
// //     const worker = employees.find(function(person){
// //         return person.id===idEmp})
// //         return worker;
// return employees.find(emp1=>emp1.id === id);

//  }
// console.log(getEmployee(employees,127));

// //task2
// function getEmployeesBySalary(employees,salaryFrom,salaryTo){
// //    const salaryPersons = employees.filter(function(person){
// // if(person.salary>=salaryFrom && person.salary<=salaryTo)
// // {return person};

// //    });
// //   return salaryPersons; 
// return employees.filter(empl => empl.salary>=salaryFrom && empl.salary<=salaryTo);
// }
// console.log(getEmployeesBySalary(employees,15000,20000));

// //task3
// function getEmployeesByCity(employees,city){
// //    const simCity = employees.find(function(Kiev){
// //     return Kiev.address.city === city;
// //    })
// //     return simCity;
// return employees.filter(empl => empl.address.city === city);
// }
// console.log(getEmployeesByCity(employees,"London"));


// //task4
// function getEmployeesNames(employees){
// //   const book = employees.map(function(person){
// //     return person.name;
// //   });
// //   return book;
// return employees.map(empl => empl.name);
// }
// console.log(`workers name ${getEmployeesNames(employees)}`);

// //task5
// function computeSalaryBudget(employees){
// //     const companySalary = employees.reduce(function(money,workers){
// //         money = money + workers.salary;
// // return money;

// //     },0)
// //     return companySalary;

// return employees.reduce((res,empl) => res + empl.salary, 0); 
// }
// console.log(computeSalaryBudget(employees),0);


// function sortEmployeesByAge(employees){
//    employees.sort((e1,e2)=> e2.birthYear - e1.birthYear);
    
//     }
    // console.log(sortEmployeesByAge(employees));

    let field = "salary";
function displayFieldValue(employees,index,field){
    console.log(employees[index][field]);
}
// employees[0].salary = 20000;
// employees[0].department = "qa";
// displayFieldValue(employees,0,"department")

// function computeMinMaxAvgSalary(employees){
// const res = employees.reduce((res,empl,) => {
//         if(res.minSalary > empl.salary){
//             res.minSalary = empl.salary;
//         }else if(res.max < empl.salary){
//             res.maxSalary = empl.salary;
//         }
//         res.avgSalary  += empl.salary;
//         return res;
//     },{minSalary: employees[0].salary, maxSalary: employees[0].salary, avgSalary: 0});
//     res.avgSalary /= employees.length;
//     return res;
// }
// function displayValue(minMaxAvg,field){
//     console.log(`value of the field ${field}  is ${minMaxAvg[field]}`)
// };
// const minMaxAvg = computeMinMaxAvgSalary(employees);
// // displayValue(minMaxAvg,"avgSalary");
// // displayValue(minMaxAvg,"minSalary");
// // displayValue(minMaxAvg,"maxSalary");

const strings = ["b" , "xyz" , "lmk" , "xyz" , "lmk" , "xyz" , "a"];
//assumed result:
//xyz->3
//lmk->2
//a->1
//b->1
function displayStringOccurrences(strings){
const stringOccurrences = getStringOccurrences(strings);
const arrayOccurrences = obj.entries(stringOccurrences);
arrayOccurrences.sort(stringComp);
arrayOccurrences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
    
}
function getStringOccurrences(strings) {
    const res = {};
    strings.forEach(str => {
        if(!res[str]) {
            res[str] = 1;

        } else {
            res[str] ++;
        }
    });
    return res;
}
function stringComp(entry1, entry2) {
    let res = entry2[1] - entry1[1];
    if (res === 0) {
        res = entry1[0] < entry2[0] ? -1 :1
    }
    return res;
}
displayStringOccurrences(strings);

//hw#19

function getMostPopulateCountry(employees)
{
    //todo
    //returns country with most amoun of employees
}

function getMostPopulatedCountrys(employees,country){
    //todo
    //returns a given number(conter) of countries with most amoun of employees
}
function isAnagram(word,anagram){
    //todo
    //returns true if a given anagram is indee an annagram of a given word
    //anagram should have the same length as word
    //anagrammust have the same letters as word
}

