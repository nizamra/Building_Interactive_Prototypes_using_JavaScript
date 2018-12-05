document.getElementById("special");
document.querySelector(".cool");
var images = document.getElementsByTagName("img");
var firstImage= images[0];
//You can use the length property to determine how many elements have been returned.
var numImages = images.length;
document.getElementsByClassName("highlight");
//returns a collection of all elements with the given class name.
document.querySelectorAll(".highlight");
document.querySelectorAll("p a");
//returns a collection of all anchor elements on the page that are descendants of paragraph elements.
document.head //returns the <head> element of the page.

document.body //returns the <body> element of the page.

document.title //returns the title of the document

document.forms //returns a collection of all <form> elements on the page.

document.images //returns a collection of all <img> elements on the page.

document.scripts //returns a collection of all <script> elements on the page.
var myList = document.getElementById("myList");
var listChildren = myList.children;
//stores a collection of all of the children of the unordered list:
element.firstElementChild
element.parentElement
var item = document.getElementById("myListItem");
var parentList = item.parentElement;
element.getElementsByTagName
document.getElementById("myArticle").getElementsByTagName("h3");
//return all <h3> elements that are descendants of the element with the id
// myArticle. This is a useful way to identify all of the h3 subtitles within 
//an article or section of a page, as opposed to searching the entire document.
document.getElementById("mySection").getElementsByClassName("special");
//return all elements with class special that are descendants of the element with the id mySection.
element.querySelector
element.querySelectorAll
element.getAttribute(attribute);
var source = document.getElementById("myImage").getAttribute("src");
//gets the src attribute of an image and stores it into a variable.
document.getElementById("myImage").setAttribute("src", "images/newImage");
//This updates the src attribute to now contain the value "images/newImage".
element.style.property
var color = document.getElementById("myParagraph").style.color;
element.style.property = "value";
document.body.style.backgroundColor = "yellow";

