let inputBox = document.getElementById("inputBox"); // Get the input element by its ID
let listContainer = document.getElementById("list-container"); // Get the list container element by its ID

function addTask(){
    console.log("addTask() called"); // Log a message to the console to check if the function is being called
    if(inputBox.value === ''){
        alert("You must write something!"); // Display an alert if the input field is empty
    }
    else{
        let li = document.createElement("li"); // Create a new list item element
        li.innerHTML = inputBox.value; // Set the inner HTML of the list item to the input value
        listContainer.appendChild(li); // Append the list item to the list container
        let span = document.createElement("span"); // Create a new span element
        span.innerHTML = "\u00d7"; // Set the inner HTML of the span to the 'x' symbol
        li.appendChild(span); // Append the span to the list item
    }
    inputBox.value = ""; // Clear the input field after adding a task
    saveData(); // Save the updated task list to localStorage
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded"); // Log a message to the console when the DOM is fully loaded
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); // Toggle the 'checked' class for list items when clicked
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); // Remove the parent element of the span (list item) when the span is clicked
        saveData(); // Save the updated task list to localStorage
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); // Save the task list HTML to localStorage with the key "data"
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // Retrieve task list HTML from localStorage and display it
}

showTask(); // Call the showTask() function to display tasks when the page is loaded
