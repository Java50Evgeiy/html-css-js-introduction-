import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
import { getRandomNumber } from "./utils/random.js";
import { Table } from "./ui/table.js";

    const schema = [ 
        {columnName: 'Employee ID', fieldName: 'id'}, 
        {columnName: 'Name', fieldName: 'name'}, 
        {columnName: 'Birth year', fieldName: 'birthYear'},
        {columnName: 'Salary (NIS)',fieldName: 'salary'},
        {columnName: 'Country', fieldName: 'country'},
        {columnName: 'City', fieldName: 'city'},
]

const company = new Company();
const employeeForm = new EmployeeForm("form-section");
const tableEmployees = new Table("table-section", "Employees", schema);
function addEmployee(employeeData) {
   
    const employee = createEmployee( employeeData.name,
        +employeeData.birthYear, +employeeData.salary,
        employeeData.city, employeeData.country);
       const res = company.addEmployee(employee);
        if(!res.messege){
            employeeData.id = res.id;
            tableEmployees.addrow(employeeData); 
        }
        return res.messege;
   
}
employeeForm.addFormHandler(addEmployee)
