//Cambio el titulo de la página
/* Joreg */

/* document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
} */

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/mozila.jpg') {
      myImage.setAttribute('src','../images/paisaje.jpg');
    } else {
      myImage.setAttribute('src','../images/mozila.jpg');
    }
}
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName(){
    let myName=prompt('Please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent='Mozila is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
   function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  } 