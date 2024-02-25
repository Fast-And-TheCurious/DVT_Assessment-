async function validateForm() {
  // Get input values
  const gmailValue = document.getElementById("gmail").value.trim(); 
  const productValue = document.getElementById("product").value.trim();
  const numProductsValue = document.getElementById("numProducts").value; 
  const deliveryDateValue = document.getElementById("deliveryDate").value; 
  var checkboxChecked = document.getElementById("myCheck").checked;
  const deliveryAddressValue = document.getElementById("deliveryAddress").value.trim();
    // Check if specific fields are empty and alert the user
    if (gmailValue === "") {
      alert("Please enter your Gmail.");
      return;
    }
  if(productValue ===""){
    alert("Please enter a prduct.");
  }
  if(numProductsValue===""){
    alert("Please enter the  number of products");
  }
    if (deliveryAddressValue === "") {
      alert("Please enter an address.");
      return;
    }
  
    // Check if any field is empty and alert the user
    if (gmailValue === "" || productValue === "" || numProductsValue === "" || deliveryAddressValue === "") {
      alert("Please fill in all fields.");
      return;
    }
  

  const products = [
    "Whole-grain flour tortillas",
    "Brown rice 10kg",
    "Tomato sauce",
    "Mustard",
    "tofu",
    "KingBob's protein powder",
  ];
  // Check if product value exists in the array
  if (!products.includes(productValue)) {
    alert("Please select a valid product from the list.");
    return; // Stop execution if product not in the array
  }
   // Check if the number of products is within a realistic range (1 and 200)
   if (!Number.isInteger(parseFloat(numProductsValue)) || numProductsValue < 1 || numProductsValue > 100 ) {
    alert("Please enter a valid number of products between 1 and 200.");
    return; // Stop execution if invalid number of products
  }
  // Check if date entered is valid and not in the past
  if (deliveryDateValue === "" || !isValidDateFormat(deliveryDateValue) || isDateInPast(deliveryDateValue)) {
    alert("Please enter a valid future delivery date.");
    return; // Stop execution if invalid date
  }

  // Check if input values are not empty
  if (gmailValue === "" && productValue === "" && numProductsValue === "" && deliveryAddressValue ==="") {
    alert("Please fill in all fields.");
  } else if (gmailValue === "") {
    alert("Please enter your gmail.");
  } else if(deliveryAddressValue === ""){
    alert("Please enter an address.");
  }else if (!isValidEmailFormat(gmailValue)) {
    alert("Please enter a valid Gmail address.");
  } else {
    // Process the form data or submit the form
    alert("Form submitted successfully!");
      // Display the summary popup form
      displaySummaryForm(gmailValue, productValue, numProductsValue, deliveryDateValue, deliveryAddressValue, checkboxChecked);
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


function displaySummaryForm(gmail, product, numProducts, deliveryDate, deliveryAddress,deliverToUser) {
  // Create a div to hold the summary content
  var summaryDiv = document.createElement("div");
  summaryDiv.id = "summaryDiv";

  summaryDiv.style.display = "flex";
  summaryDiv.style.justifyContent ="center";
  summaryDiv.style.flexDirection = "column";
  summaryDiv.style.position = "fixed";
  summaryDiv.style.top = "50%";
  summaryDiv.style.left = "50%";
  summaryDiv.style.transform = "translate(-50%, -50%)";
  summaryDiv.style.padding = "20px";
  summaryDiv.style.zIndex = "1000";
  summaryDiv.style.backgroundColor ="#1b1a1a";
  summaryDiv.style.color = "#fff";  
  summaryDiv.style.border = "2px solid #fff";
  
  // Create and append elements with the entered information
  var heading = document.createElement("h2");
  heading.textContent = "Summary of Information";
  summaryDiv.appendChild(heading);

  var gmailInfo = document.createElement("p");
  gmailInfo.textContent = "Gmail: " + gmail;
  summaryDiv.appendChild(gmailInfo);

  var productInfo = document.createElement("p");
  productInfo.textContent = "Product: " + product;
  summaryDiv.appendChild(productInfo);

  var numProductsInfo = document.createElement("p");
  numProductsInfo.textContent = "Number of Products: " + numProducts;
  summaryDiv.appendChild(numProductsInfo);

  var deliveryDateInfo = document.createElement("p");
  deliveryDateInfo.textContent = "Delivery Date: " + deliveryDate;
  summaryDiv.appendChild(deliveryDateInfo);

  var deliveryAddressInfo = document.createElement("p");
  deliveryAddressInfo.textContent = "Delivery Address: " + deliveryAddress;
  summaryDiv.appendChild(deliveryAddressInfo);

  var deliveryStatusInfo = document.createElement("p");
  deliveryStatusInfo.textContent = "Delivery Status: " + (deliverToUser ? "Yes" : "No");
  summaryDiv.appendChild(deliveryStatusInfo);

  // Create a close button
  var closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.style.padding = "8px 18px";
  closeButton.style.size ="8px";  
  closeButton.style.fontSize ="12px";
  closeButton.style.border ="none";
  closeButton.style.cursor = "pointer";
  closeButton.style.background = "#fff";
  closeButton.style.color = " #000";

  closeButton.addEventListener("click", function () {
    summaryDiv.style.display = "none";
  });
  summaryDiv.appendChild(closeButton);

  // Append the summary div to the body or another container element
  document.body.appendChild(summaryDiv);
}

function updateDeliveryStatus() {
  var deliveryStatusDiv = document.getElementById("deliveryStatus");
  var checkbox = document.getElementById("myCheck");

  if (checkbox.checked) {
      deliveryStatusDiv.textContent = "Will deliver to you";
  } else {
      deliveryStatusDiv.textContent = "Will not deliver to you";
  }
}
