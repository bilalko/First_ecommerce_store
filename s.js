let p1 = document.querySelector('p');
let h1 = document.querySelector('h1');
let a = document.querySelector('a');
let button = document.querySelector('button');
let login = document.getElementById('login');
let panier = document.getElementById('panier');
let imgairmax = document.getElementById('imgairmax');

window.addEventListener('load',s)

function s() {
    let T1 = new TimelineMax({paused: true});

    T1.from(login,0.3,{x:-100,opacity:0}); 
    T1.from(panier,0.3,{y:-100,opacity:0});
    T1.from(imgairmax,0.3,{x:-50,opacity:0}); 
    T1.from(p1,0.3,{x:-100,opacity:0}); 
    T1.from(button,0.4,{x:10,opacity:0}); 
    T1.play();

}
