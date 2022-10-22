let login = document.getElementById('login');
let panier = document.getElementById('panier');
let head = document.getElementsByTagName('header')[0];
let button1 = document.getElementsByTagName('button')[0];
let button2 = document.getElementsByTagName('button')[1];
let button3 = document.getElementsByTagName('button')[2];
let button4 = document.getElementsByTagName('button')[3];
let button5 = document.getElementsByTagName('button')[4];
let button6 = document.getElementsByTagName('button')[5];
let button7 = document.getElementsByTagName('button')[6];
let button8 = document.getElementsByTagName('button')[7];
let button9 = document.getElementsByTagName('button')[8];
let button10 = document.getElementsByTagName('button')[9];
let button = [button1,button2,button3,button4,button5,button6,button7,button8,button9,button10];
let span = document.getElementsByTagName('span')[0];



window.addEventListener('load',s);
window.addEventListener("scroll",s2);

function s() {
    let T1 = new TimelineMax({paused: true});
    T1.from(login,0.4,{x:-100,opacity:0}); 
    T1.from(panier,0.4,{y:-100,opacity:0});
    T1.from(span,0.2,{y:-100,opacity:0});
    T1.play();
    span.textContent = localStorage.getItem("panier");

}

function s2() {
    head.style.background= 'linear-gradient(45deg, #fb3182, blue)';
}

