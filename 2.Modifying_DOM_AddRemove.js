//Creating Elemants
//create a new heading element and then modify its innerHTML with the text we want to display:
var newHeading = document.createElement("h1");
newHeading.innerHTML = "New section here";
//create a new text node that contains the text "Hi, I'm new here":
var newText = document.createTextNode("Hi, I'm new here");
//creates a new element that is a clone of the myList element. Since the parameter is set to true, the clone includes any list items and other children that the element contains.
var originalList = document.getElementById("myList");
var exactCopy = originalList.cloneNode(true);



//Adding and Removing Elements
element.appendChild(newChild);
<html>
<ol id="myList">
  <li>First</li>
  <li>Second</li>
</ol>
</html>
var list = document.getElementById("myList");
var newItem = document.createElement("li");
newItem.innerHTML = "new item created dynamically";
list.appendChild(newItem);
//All the above code is just to add a new line to the list.



element.insertBefore(newChild, existingChild);
<html>
<ul id="myList">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
</html>
var list = document.getElementById("myList");
var newItem = document.createElement("li");
newItem.innerHTML = "new item created dynamically";
var listItems = list.children; // get a collection of the ul element's children
list.insertBefore(newItem, listItems[1]); //insert before the 2nd element in the list 



//Moving Elements
<html>
<ul id="yours">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
</ul>
<ul id="mine">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
</html>
var list1 = document.getElementById("yours");
var list2 = document.getElementById("mine");
var item = list1.children[3]; // obtain the fourth element from the first list
list2.appendChild(item);



//Deleting elements
var removed = parentElement.removeChild(childElement);
<html>
<ul id="myList">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
</ul>
</html>
var list = document.getElementById("myList");
var listItems = list.children; // get list of list items in the list
var removed = list.removeChild(listItems[2]); // remove the 3rd item from list
var message = document.createElement("p"); // create a paragraph element to display a message
message.innerHTML = "The following item was deleted " + removed.innerHTML; // message sharing which element was deleted
document.body.appendChild(message); // append paragraph message to the body to display on page
