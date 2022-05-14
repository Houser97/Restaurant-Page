import './style.css'
import addHome from './home.js'
import addMenu from './menu.js'
import addContact from './contact.js'

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let options = document.querySelectorAll('.option');

function currentOption(e) {
    let mainContent = document.getElementById('content');
    options.forEach(element => element.classList.remove('activeOption'));
    e.target.classList.add('activeOption');
    clearPage(mainContent);

    if(e.target.textContent == 'Home') addHome(mainContent);
    else if(e.target.textContent == 'Menu') addMenu(mainContent);
    else if(e.target.textContent == 'Contact') addContact(mainContent);
}

function clearPage(mainContent) {
    mainContent.innerHTML = '';
}

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

options.forEach(element => element.addEventListener('click', currentOption))

console.log('Houmser weno');