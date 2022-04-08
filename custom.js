



/* contact- field

   change text of submit button */

const btn = document.getElementById('submitButton');

// ✅ Change text of button text on click
btn.addEventListener('click', function handleClick() {
  const initialText = '.submit';

  btn.innerHTML = `<span>.thank you!<span>`;
});
// change style of new text
document.getElementById("submitButton").style.color = "#005580";
document.getElementById("submitButton").style.fontFamily = "'Merriweather', serif;";
document.getElementById("submitButton").style.fontSize = "36px";


