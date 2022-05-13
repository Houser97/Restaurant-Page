let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let options = document.querySelectorAll('.option');

function currentOption(e) {
    options.forEach(element => element.classList.remove('activeOption'));
    e.target.classList.add('activeOption');
    console.log(e.target.textContent)
    clearPage();
}

function clearPage() {
    let mainContent = document.getElementById('content');
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