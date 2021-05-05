let myImage = document.querySelector('img');
let myButton = document.getElementById('lebuton');
let myHeading = document.querySelector('h1');



function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName)
    {
        setUserName();
    }
    else
    {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Sloth is cool, ' + myName;
    }
  }


  myButton.onclick = function(){
    setUserName();
}

if(!localStorage.getItem('name'))
  setUserName();
  else 
  {
      let storedName = localStorage.getItem('Name');
      myHeading.textContent = 'Sloth is cool, ' + storedName;
  }

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'sloth.jpg')
        myImage.setAttribute('src', 'sloth2.jpg');
    else 
        myImage.setAttribute('src','sloth.jpg');
}