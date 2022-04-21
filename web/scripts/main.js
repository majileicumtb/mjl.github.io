let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/dog.png') {
        myImage.setAttribute('src', 'images/tx.png');
    } else {
        myImage.setAttribute('src', 'images/dog.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '热烈欢迎' + myName + '来指导工作!';
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '热烈欢迎' + storedName + '来指导工作!';
}
myButton.onclick = function() {
    setUserName();
}