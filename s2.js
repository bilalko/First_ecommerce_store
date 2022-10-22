let login = document.getElementById('login');
let panier = document.getElementById('panier');
let contacter = document.getElementById('contacter');


window.addEventListener('load',s)

function s() {
    let T1 = new TimelineMax({paused: true});
    T1.from(login,0.3,{x:-100,opacity:0}); 
    T1.from(panier,0.3,{y:-100,opacity:0});
    T1.from(contacter,0.3,{x:-100,opacity:0});
    T1.play();
}