// Check if fields have values
async function validateForm() {
  // Get input values
  const gmailValue = document.getElementById("gmail").value; // checks= presense+
  const productValue = document.getElementById("product").value; // checks= presense+
  const numProductsValue = document.getElementById("numProducts").value; // checks= presense+Range
  const deliveryDateValue = document.getElementById("deliveryDate").value; // checks=presense+Logic+Format
  var checkboxChecked=true;// checks=  presense+
  // Checks done:
  /*  
    +presence check done for all 
    +Format and Logic check done for delievery date
    + Rnage done for numbers
    + 
   */
  const products = [
    "Whole-grain flour tortillas",
    "Brown rice 10kg",
    "Tomato sauce",
    "Mustard",
    "tofu",
    "KingBob's protein",
  ];
  // Check if value entered in the feild exists in the array, if not display error message to user
  // TO DO LIST

  // Stop execution if product not here

  //Check if numebr of products is valid

  //Stop execution if product value entered isn't realistic

  // Check if date entered is valid

  //Stop execution if date value entered isn't realistic

  //Check if checkbox selected

  // Check if input values are not empty

  /*  */
  // Check if product value exists in the array
  if (!products.includes(productValue)) {
    alert("Please select a valid product from the list");
    return; // Stop execution if product not in the array
  }

  // Check if the number of products is a valid positive integer
  if (!Number.isInteger(parseFloat(numProductsValue)) || numProductsValue < 1) {
    alert("Please enter a valid positive number for Number of Products");
    return; // Stop execution if invalid number of products
  }

  // Check if date entered is valid and not in the past
  if (
    deliveryDateValue === "" ||
    !isValidDateFormat(deliveryDateValue) ||
    isDateInPast(deliveryDateValue)
  ) {
    alert("Please enter a valid future delivery date");
    return; // Stop execution if invalid date
  }

  // Check if checkbox is selected
     if (!checkboxChecked.checked) {
      checkboxChecked = false;
      alert("We won't deliever to you");
  } else if (checkboxChecked.checked){
    checkboxChecked =true;
    alert("We will deleiver to you");
  }

  // Check if input values are not empty
  if (gmailValue === "" && productValue === "" && numProductsValue === "") {
    alert("Please fill in all fields");
  } else if (gmailValue === "") {
    alert("Please enter your gmail.");
  } else if (!isValidEmailFormat(gmailValue)) {
    alert("Please enter a valid Gmail address");
  } else {
    // Process the form data or submit the form
    alert("Form submitted successfully!");
  }
 
}
// Attach the function to the button click event
function isValidEmailFormat(email) {
  // Regular expression for basic email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// date functions
function isDateInPast(dateString) {
  // Convert the string to a Date object
  var selectedDate = new Date(dateString);

  // Get the current date
  var currentDate = new Date();

  // Set the time part of the current date to midnight
  currentDate.setHours(0, 0, 0, 0);

  // Compare the selected date with the current date
  return selectedDate < currentDate;
}
function isValidDateFormat(dateString) {
  var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  return dateRegex.test(dateString);
}
