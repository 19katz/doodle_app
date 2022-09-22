/* This section contains the JavaScript code, which adds functionality
for indicating availability. */

// Gets the list of dates using ID
var list = document.getElementById("myUL");
// addEventListener adds an event handler that will handle
// any event where the user clicks.
// If a click is made, we check the current class and
// determine the appearance as follows:
// If the item is in the "checked" state (yes), then clicking on it
// should turn off that state and toggle into the "twice checked" state (maybe).
// If the item is in the "twice checked" state (maybe), then clicking on it
// should turn off that state and leave it without any state toggled.
// If the item is neither in a "yes" or "maybe" state, then clicking on it
// should turn it to the "checked" state (yes).
// Thus, clicking on an item with no state will cause it to cycle through
// "yes," "maybe," and "no."
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