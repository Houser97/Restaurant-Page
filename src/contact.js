export default function addContact(mainContent){
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