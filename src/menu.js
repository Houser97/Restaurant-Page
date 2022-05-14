export default function addMenu(mainContent) {
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

    section.appendChild(h1);
    
    for(let i=0;i<=8;i++){
        divBoxContainer.appendChild(divBoxList[i]);
    }    
    section.appendChild(divBoxContainer);
    mainContent.appendChild(section);
}