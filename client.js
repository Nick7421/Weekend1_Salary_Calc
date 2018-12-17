class Employee{
    constructor( firstName, lastName, Id, title, annualSalary ){
      this.firstName = firstName
      this.lastName = lastName
      this.Id = Id
      this.title = title
      this.annualSalary = annualSalary
    } //end constructor
} //end of class

//created empty array to push new employee too
let employee =[];


$(document).ready(function(){

    $('#submit').on('click',function(){
       let newEmployees = newEmployee($('#firstname').val(),$('#lastname').val(),$('#id').val(),$('#title').val(),$('#annualsalary').val());
        console.log('Click');

    updateEmployee()
 

    }); //end of on Click function
});

function newEmployee( firstName, lastName, Id, title, annualSalary ){
    console.log( 'in newEmployee:', firstName, lastName, Id, title, annualSalary );
    employee.push( new Employee( firstName, lastName, Id, title, annualSalary ) );
    return true;
  } // end newEmployee

function updateEmployee(){
    let outputEmployee = $('table tbody');
    outputEmployee.empty();
    for (let employeeItem of employee ){
      outputEmployee.append ('<tr><td>' + employeeItem.firstName + '</td><td>' + employeeItem.lastName +'</td><td>' +employeeItem.Id +'</td><td>' +employeeItem.title +'</td><td>' + employeeItem.annualSalary + '</td></tr>');
    }//end of for loop
}// end of updateEmployee function





function consoleTest(){
    console.log('in JQ');
};