$(document).ready(onReady);

function onReady() {
  console.log('Hey jQuery!');
  $('.submitButton').on('click', handleSubmit) //This line of code accesses the .submitButton, and on 'click' will run handleSubmit function
  
}


function handleSubmit(event) { //function with 'handleSubmit' identifier and 'event' perameter
    event.preventDefault(); // this line will cancel any default code that html will try to run due to the form element.
    
    let monthlySalary = 0;
    console.log('inside of handleSubmit') // testing to see if the function is getting run....It is.
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const idNumber = $("#idNumber").val();
    const jobTitle = $("#jobTitle").val();
    const annualSalary = $("#annualSalary").val();
    $("#tableInfo").append(`
  <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNumber}</td>
    <td>${jobTitle}</td>
    <td>${annualSalary}</td>
    <td><button>Delete</button</td>
  </tr> `)
    monthlySalary += annualSalary / 12
    $('#totalMonthly').append(`$${Math.floor(monthlySalary).toLocaleString()}`)


    
}












































// const employeesData = [{
//     firstName: "Jenn",
//     lastName: "Flemming",
//     idNumber: 8675309,
//     jobtitle: "Head of Operations",
//     annualSalary: 1500000
// },{
//     firstName: "Andrew",
//     lastName: "Cannon",
//     idNumber: 8008,
//     jobtitle: "Web Developer",
//     annualSalary: 70000
// },{
//     firstName: "John",
//     lastName: "Cena",
//     idNumber: 7337,
//     jobtitle: "Janitor",
//     annualSalary: 40000
// },{
//     firstName: "Bobby",
//     lastName: "Flay",
//     idNumber: 12345,
//     jobtitle: "Driver",
//     annualSalary: 30000
// },
// ]

// console.log(employeesData);