

  // BACK TO TOP BUTTON
  // code example: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// RANDOM USER GENERATOR FOR TEAM-SECTION

async function callApi(){
  const response = await fetch('https://randomuser.me/api/?results=4'); 
  const users = await response.json();
  const userList = users.results;
  //console.log(userList); 

// with for loop method
for (let i = 0; i < userList.length; i++) {

let div = document.getElementById('team-members');

//creating tags inside div
let img = document.createElement('img');
let person = document.createElement('div');
let name = document.createElement('h4');
let nat = document.createElement('span');

//adding image
let image = userList[i].picture.large; 
img.setAttribute('src', image);

//adding name
let firstName = userList[i].name.first;
let lastName = userList[i].name.last;
let fullName = firstName + ' ' + lastName;
name.innerHTML = fullName;


//adding nationality
let nationality = userList[i].nat.toLowerCase(); 
nat.classList.add('flag-icon', 'flag-icon-'+nationality);


//append
person.append(img, name, nat); 
div.appendChild(person);

//console.log(fullName);
}
}

callApi()


// CONTACT FIELD

// change text of submit button 

   const btn = document.getElementById('submitButton');

   // Change text of button text on click
   btn.addEventListener('click', function handleClick() {
     const innerText = '.submit';
   
     btn.innerText = `.thank you!`;
   });
   // change style of new text
   document.getElementById("submitButton").style.color = "#005580";
   document.getElementById("submitButton").style.fontFamily = "'Merriweather', serif;";
   document.getElementById("submitButton").style.fontSize = "36px";
   

