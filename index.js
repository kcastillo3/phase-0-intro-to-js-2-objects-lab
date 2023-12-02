// Write your solution in this file!
// Step 1: Initialize the employee object
let employee = {
  name: "John Doe",
  streetAddress: "123 Main St"
};

// Step 2: Create the functions
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Step 3: Test the functions
console.log(updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith"));
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St"));
console.log(deleteFromEmployeeByKey(employee, "name"));
console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));