// Select the button, unordered list (ul), and input field from the DOM
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// Add event listener to the button to add a new list item
btn.addEventListener("click", function () {
    // Create a new list item (li)
    let item = document.createElement("li");
    item.innerText = inp.value; // Set its text to the input value

    // Create a delete button for the list item
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete"; // Set button text
    delBtn.classList.add("delete"); // Add a class to the delete button

    // Append the delete button to the list item
    item.appendChild(delBtn);
    // Append the list item to the unordered list
    ul.appendChild(item);
    
    // Clear the input field after adding the item
    inp.value = "";
});

// Add event listener to the unordered list to handle delete button clicks
ul.addEventListener("click", function (event) {
    // Check if the clicked element is a button
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement; // Get the parent list item
        listItem.remove(); // Remove the list item
        console.log("deleted"); // Log deletion for debugging
    }
});
