// Write your solution in this file!
const employee = {
    name: "Bob",
    streetAddress: "201 Main St"
  };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key] : value});
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, { [key] : value});
}

function deleteFromEmployeeByKey(employee, key) {
    const clone = Object.assign({}, employee);
    delete clone[key];
    return clone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}