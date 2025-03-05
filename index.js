// Write your solution in this file!
// Declare customerName globally and assign 'bob'
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer in global scope and assign a value
function setBestCustomer() {
  bestCustomer = 'not bob'; // No 'var', 'let', or 'const' makes it global
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newCustomer) {
  bestCustomer = newCustomer;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'someone';

// Function that tries to change leastFavoriteCustomer (should throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will cause an error
}
