let landingPage = document.querySelector (".landing-page");

let imgsArray = ["../img/2.jpg", "../img/3.jpg", "../img/4.jpg", "../img/5.jpg", "../img/6.jpg", "../img/7.jpg"];

landingPage.style.backgroundImage = 'url ()'; 



setInterval (() => {

    let randomNumber = Math.floor(Math.random()* imgsArray.length);

    landingPage.style.backgroundImage = 'url("../img/' +imgsArray[randomNumber]+ '")'; 

},1000);

