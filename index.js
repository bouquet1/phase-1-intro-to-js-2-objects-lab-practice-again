const employee = {
    name: "employeeNAme",
    address: "employeeAddress",
}  //assign an employee variable to an Object containing name and streetAddress keys; you can use whatever values you like. Use literal syntax to create your Object. 


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
} // should take in 3 arguments: an employee Object, a key and a value. This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!
// ✓ returns an employee with the original key value pairs and the new key value pair
// ✓ it does not modify the original employee, but rather returns a clone with the new data


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value;
    return employee;
} // this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
// ✓ returns an employee with the original key value pairs and the new key value pair
// ✓ it does not modify the original employee, but rather returns a clone with the new data


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}  //this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
// ✓ returns an employee with the original key value pairs and the new key value pair
// ✓ it does not modify the original employee, but rather returns a clone with the new data


function deleteFromEmployeeByKey(employee, key) {
    employee = {
        key: "Sam"
    }
    delete employee[key];
    return employee;
} // ✓ deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
// ✓ does not modify the original employee (it is non-destructive)
//this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!