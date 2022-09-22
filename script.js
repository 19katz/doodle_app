/* This section contains the JavaScript code, which adds functionality
for adding, checking, removing, and keeping count of todo items. */

// Gets the list of dates using ID
var list = document.getElementById("myUL");
// addEventListener adds an event handler that will handle
// any event where the user clicks.
// If a click is made, the handler will check if the target
// is a list item. If so, the item will be set to "checked"
// and its appearance will change (according to the CSS).
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    if (ev.target.className == 'checked') {
        ev.target.classList.toggle('checked');
        ev.target.classList.toggle('twicechecked');
    } else if (ev.target.className == 'twicechecked') {
        ev.target.classList.toggle('twicechecked');
    } else {
        ev.target.classList.toggle('checked');
    }
  }
}, false);