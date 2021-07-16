let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
    setwelcome();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
function setwelcome(){
    let myName = prompt('请输入你的名字');
    if(!myName || myName === null){
        setwelcome();
    }
    localStorage.setItem('name',myName);
    myHeading.textContent = '你好啊'+myName;
}

myButton.onclick = function(){
    setwelcome();
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kanna.JPG') {
      myImage.setAttribute('src', 'images/kanna2.jpeg');
    } else {
      myImage.setAttribute('src', 'images/kanna.JPG');
    }
}
