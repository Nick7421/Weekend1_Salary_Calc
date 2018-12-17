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
let totalSalary = 0;


$(document).ready(function(){

    $('#submit').on('click',function(){
       let newEmployees = newEmployee($('#firstname').val(),$('#lastname').val(),$('#id').val(),$('#title').val(),$('#annualsalary').val());
        console.log('Click');

    updateEmployee();
    clearInputs();
    updateMonthlySalary();
 

    }); //end of on Click function

    $('#delete').on('click',deleteItem());
}); //end of document ready function

//this function will push the new employee to the employee array
function newEmployee( firstName, lastName, Id, title, annualSalary ){
    console.log( 'in newEmployee:', firstName, lastName, Id, title, annualSalary );
    employee.push( new Employee( firstName, lastName, Id, title, annualSalary ) );
    return true;
  } // end newEmployee

  // this function appends to the DOM and calculates the total salary in the array.
function updateEmployee(){
    let outputEmployee = $('table tbody');
    outputEmployee.empty();
    for (let employeeItem of employee ){
      outputEmployee.append ('<tr><td>' + employeeItem.firstName + '</td><td>' + employeeItem.lastName +'</td><td>' +employeeItem.Id +'</td><td>' +  employeeItem.title +'</td><td>' + '$' + ' ' + Number(employeeItem.annualSalary) + '</td><td>'+ '<button class = "delete">Delete Item</button>'+'</td></tr>');
      totalSalary += Number(employeeItem.annualSalary);
    }//end of for loop

monthlySalary(totalSalary);
}// end of updateEmployee function


//this function will clear the inputs.
function clearInputs(){
    $('#firstname').val('');
    $('#lastname').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualsalary').val('');
}
// This function will calculate the monthly Salary
function monthlySalary(salary){
    let finalSalary = salary / 12;
    $('#finaloutput').html('Monthly Salary:'+ ' '+'$'+ finalSalary)
    let output = $('#finaloutput');
    if (finalSalary > 20000){
        output.css('background-color','red')
    }
}

//I was able to delete an item using a list but was unable to delete an Item in a table.
function deleteItem() {  
        $(this).remove();   
          };
        
         

//used the below function to test my jQ
function consoleTest(){
    console.log('in JQ');
};