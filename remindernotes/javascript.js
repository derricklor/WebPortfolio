
//do not delete, stops the page from reloading
document.getElementById("form").addEventListener("click", function(event){
  event.preventDefault()
});




function addToList() {
  // Get the text input value
  var text = document.getElementById("textinput").value;

  // Create a new li element with the text input
  var li = document.createElement("li");
  var textNode = document.createTextNode(text);
  li.appendChild(textNode);


  
  // Add a delete button to the new li element
  var div = document.createElement("div");
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add('delete');
  deleteButton.onclick = function() {
    //button------->li----->ul.remove(li)
    this.parentNode.parentNode.removeChild(this.parentNode);
  };
  li.appendChild(deleteButton);
  div.appendChild(li);

  // Add the new li element to the list
  document.getElementById("list").appendChild(div);

  // Clear the text input
  document.getElementById("textinput").value = "";
}


function addToTable() {

  // Get table
  var table = document.getElementById('table');

  // Get the text input value
  var text = document.getElementById("textinput").value;


  // Insert a row at the end of the table
  let newRow = table.insertRow(-1);

  // Insert two cells in the row at index 0 and 1
  let cell1 = document.createElement('td');
  cell1.appendChild(document.createTextNode(text));
  newRow.appendChild(cell1)

  // Add the delete button in cell 2
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add('delete');
  deleteButton.onclick = function() {
    //button->tr.remove(tr)
    this.parentNode.remove(this.parentNode);

  };
  newRow.appendChild(deleteButton);
}