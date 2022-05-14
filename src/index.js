import './style.css'

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

function addMenu(mainContent) {
    let section = document.createElement('section');
        section.classList.add('gallery');
    let h1 = document.createElement('h1');
        h1.classList.add('heading')
        h1.textContent = 'Our Food';
    let span = document.createElement('span');
        span.textContent = ' Gallery';
    
        h1.appendChild(span);
    
    let divBoxContainer = document.createElement('div');
        divBoxContainer.classList.add('box-container');

    let divBoxList = [];
    
        for(let i = 1; i<=9; i++){
            let divBox = document.createElement('div');
                divBox.classList.add('box');
            let img = document.createElement('img');
                img.src = `images/g-${i}.jpg`;
            let h3 = document.createElement('h3')
                h3.textContent = 'Tasty Food';
            let p = document.createElement('p');
                p.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error velit repudiandae, quo dolor culpa.';
            let a = document.createElement('a');
                a.classList.add('btn'); 
                a.textContent = 'Order Now'
            let divContent = document.createElement('div')
                divContent.classList.add('content');
                divContent.appendChild(h3);
                divContent.appendChild(p);
                divContent.appendChild(a);
                divBox.appendChild(img);
                divBox.appendChild(divContent);
                divBoxList.push(divBox);
        }
        console.log(divBoxList)




    section.appendChild(h1);
    
    for(let i=0;i<=8;i++){
        divBoxContainer.appendChild(divBoxList[i]);
    }    
    section.appendChild(divBoxContainer);
    mainContent.appendChild(section);
}

function addContact(mainContent){
    let section = document.createElement('section');
        section.classList.add('contacts');
    let h1 = document.createElement('h1');
        h1.classList.add('heading');
    let divContainerContacts = document.createElement('div');
        divContainerContacts.classList.add('container-contacts');
    let imagesNameList = ['Queso','Rocco','House','Lucky'];
    let professionList = ['Boss','Cheff','Cheff','Waiter']
    let emailList = ['Quemso@gmail.com','CoccoCoach@gmail.com','Houser@gmail.com','Luckys@gmail.com']
    let numberList = ['555-222-3333','555-222-4444','555-222-5555','555-222-6666']
    let staffMembers = [];

    for(let i=0;i<=3;i++){
        let divCard = document.createElement('div');
            divCard.classList.add('card')
        let img = document.createElement('img');
            img.src = 'images/'+imagesNameList[i]+'.jpg';
        let h3 = document.createElement('h3');
            h3.textContent = professionList[i];
        let divEmail = document.createElement('div');
            divEmail.textContent = emailList[i];
        let divTel = document.createElement('div');
            divTel.textContent = numberList[i];
        
        divCard.appendChild(img);
        divCard.appendChild(h3);
        divCard.appendChild(divEmail);
        divCard.appendChild(divTel);

        divContainerContacts.appendChild(divCard);
    }

    section.appendChild(h1);
    section.appendChild(divContainerContacts);
    mainContent.appendChild(section)
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