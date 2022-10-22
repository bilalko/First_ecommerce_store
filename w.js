let login = document.getElementById('login');
let panier = document.getElementById('panier');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let emailsignup = document.getElementById('emailsignup');
let password = document.getElementById('passwordsignup')
let bouttonsignup = document.getElementById('boutton1');
let bouttonlogin = document.getElementById('boutton2');
let form1 = document.getElementById("form1");
let error1 = document.getElementsByTagName('small')[0];
let error2 = document.getElementsByTagName('small')[1];
let error3 = document.getElementsByTagName('small')[2];
let error4 = document.getElementsByTagName('small')[3];


window.addEventListener('load',s);

function s() {
    let T1 = new TimelineMax({paused: true});
    T1.from(login,0.4,{x:-100,opacity:0}); 
    T1.from(panier,0.4,{y:-100,opacity:0});
    T1.play();
}

form1.addEventListener('submit',event => {
    event.preventDefault();
    if(prenom.value.length === 0) {
        prenom.style.borderColor = "red";
        error1.style.display = "block";
        
    }

    if(nom.value.length === 0) {
        nom.style.borderColor = "red"
        error2.style.display = "block";
    }

    if(emailsignup.value.length === 0) {
        emailsignup.style.borderColor = "red"
        error3.style.display = "block";
    }

    if(password.value.length === 0) {;
        password.style.borderColor = "red"
        error4.style.display = "block";
    }
    else{
        error1.style.display = "none";
        error2.style.display = "none";
        error3.style.display = "none";
        error4.style.display = "none";
        prenom.style.borderColor = "black";
        nom.style.borderColor = "black";
        emailsignup.style.borderColor = "black";
        password.style.borderColor = "black";
        let formdata = new FormData(form1);
        let data = Object.fromEntries(formdata);
        fetch('https://getform.io/f/c9a69bc3-46dc-41db-966c-12b825f62d46', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(data)}); 
    }
})

