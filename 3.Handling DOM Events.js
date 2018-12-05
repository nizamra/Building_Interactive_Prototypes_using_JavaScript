element.onevent = handlerFunction;
function myHandlerFunction(){
    //  do stuff here
    // handle the event
}
element.onevent = myHandlerFunction;


element.onevent = function(){
    // do stuff here
};

element.addEventListener("event", handlerFunction);



//change the good morning paragraph to good night
<html>
<p id="myParagraph">Good Morning!</p>
</html>
var paragraph = document.getElementById("myParagraph");
paragraph.onclick = changeGreeting;
function changeGreeting(){
    paragraph.innerHTML = "Good Night!";
}
//another way
paragraph.addEventListener("click", function() {
    paragraph.innerHTML = "Good Night!";
});



//The mouseover event
//mouseover
//mouseout: fired when a user moves the mouse cursor out of the boundaries of an element.
//mousemove: fired when a user moves the mouse within an element.
//mouseenter: fired when a user moves the mouse cursor into the boundaries of an element.
//mousedown: the first part of a mouse click- fired when a user clicks the mouse down (doesn't include the release of the click)
//mouseup: the release of a mouse click- fired when a user releases a mouse press
//The change event
//The load event
document.body.onload = doStuff;
