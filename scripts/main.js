let myImg = document.querySelector('img')

myImg.onclick = function () {
    let mySrc = myImg.getAttribute("src")
    if(mySrc === "images/lul.png"){
        myImg.setAttribute('src','images/earth.jpg')
    }else{
        myImg.setAttribute('src',"images/lul.png")
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName()
    }else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Earth is cool, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Earth is cool and Loaded, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }