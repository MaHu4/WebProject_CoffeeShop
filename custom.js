


async function callApi(){
  const response = await fetch('https://randomuser.me/api/?results=3'); 
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




/* contact- field

   change text of submit button */

   const btn = document.getElementById('submitButton');

   // Change text of button text on click
   btn.addEventListener('click', function handleClick() {
     const textContent = '.submit';
   
     btn.textContent = `.thank you!`;
   });
   // change style of new text
   document.getElementById("submitButton").style.color = "#005580";
   document.getElementById("submitButton").style.fontFamily = "'Merriweather', serif;";
   document.getElementById("submitButton").style.fontSize = "36px";
   

