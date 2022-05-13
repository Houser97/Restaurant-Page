let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let options = document.querySelectorAll('.option');

function currentOption(e) {
    let mainContent = document.getElementById('content');
    options.forEach(element => element.classList.remove('activeOption'));
    e.target.classList.add('activeOption');
    clearPage(mainContent);

    if(e.target.textContent == 'Home') addHome(mainContent);
}

function clearPage(mainContent) {
    mainContent.innerHTML = '';
}

function addHome(mainContent){
    let section = document.createElement('section');
        section.classList.add('home');
        section.id = 'home';
    let divContent = document.createElement('div');
        divContent.classList.add('content')
    let h3 = document.createElement('h3');
        h3.textContent = 'Food made with love';
    let a = document.createElement('a'); 
        a.classList.add('btn');
        a.textContent = 'Order Now'
    let p = document.createElement('p');
        p.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quos tempora eligendi adipisci at fugiat iste accusantium architecto dolore sit voluptatibus tenetur repellat, sunt mollitia, expedita numquam culpa reiciendis quas.'

    let divImage = document.createElement('div'); 
        divImage.classList.add('image');
    let img = document.createElement('img');
        img.src = 'images/home-img.png';
        
    divContent.appendChild(h3);
    divContent.appendChild(p);
    divContent.appendChild(a);

    divImage.appendChild(img);



    section.appendChild(divContent);
    section.appendChild(divImage);
    mainContent.appendChild(section);
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