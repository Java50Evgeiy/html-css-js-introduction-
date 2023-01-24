// const employee1 = {"id":123, name:"Vasia" , birthYear:2000,salary:15000,address:{city:"Lod", country:"Israel"}};
// const employee2 = {"id":123, name:"Vasia" , birthYear:2000,salary:15000,address:{city:"Lod", country:"Israel"}};
// console.log(`employee1==employee2 is ${employee1==employee2}`);
// const employee3 = employee1;
// console.log(`employee3==employee1 is ${employee3==employee1}`);
// employee3.salary = 20000;
// console.log(`employee1 salary = ${employee1.salary} `)
// function createEmployee(id,name,birthYear,salary,city,country) {
//     return{id,name,birthYear,salary, address:{city,country}};
// }
const employees = [
    createEmployee(123,"Vasya",2000,15000,"Lod","Israel"),
    createEmployee(124,"David",1975,15500,"Tel-Aviv","Israel"),
    createEmployee(125,"Sara",1985,20000,"New York","USA"),
    createEmployee(126,"Abraham",1990,13000,"London","UK"),
    createEmployee(127,"Moshe",2000,15000,"Rehovot","Israel"),
    createEmployee(128,"Goga",1993,10000,"Tbilise","Gorgia"),
    createEmployee(129,"Sasha",2000,25000,"Ramat Gann","Israel"),
    createEmployee(130,"Viktor",2003,10000,"Arad","Israel")

]
// //const index = employees.indexOf( createEmployee(126,"Abraham",1990,13000,"London","UK"));
// const index = employees.findIndex(function(emp1){
//     return emp1.id === 126;
// });
// const employee = employees.find(function(emp1){
//     return emp1.id === 126;
// })
// //HW#18
// function getEmployee(employee,id){
//     //return reference to an employee object with a given id value
// }
// function getEmployeesBySalary(employees,salaryFrom,salaryTo){
//     //return array of employees object that have salary in [salaryFrom,salaryTo]
// }
// function getEmployeesByCity(employees,city){
//     //return array of employees object FROM A GIVEN city
// }function getEmployeeNNames(employees){
//     //return array names of employees
// }

// function sortEmployeesByAge(employees){
// //return array of employees sortedd by age in ascending order

// }
let field = "salary";
function displayFieldValue(employees,index,field){
    console.log(employees[index][field]);
}
employees[0].salary = 20000;
employees[0].department = "qa";