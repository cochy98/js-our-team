/**
 * Viene fornito un array di oggetti in allegato in cui è definito un array di oggetti che rappresentano i membri del team.
    Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
    MILESTONE 1:
    stampare su console le informazioni di nome, ruolo e la stringa della foto
    MILESTONE 2:
    stampare le stesse informazioni su DOM sottoforma di stringhe
    BONUS 1:
    trasformare la stringa foto in una immagine effettiva
    BONUS 2:
    organizzare i singoli membri in card/schede
 */

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];



const myColOut = document.querySelector('.my-col-out');
myColOut.appendChild(createNewDivElement());


const userOut = document.querySelector('#output');
let output = '';


const cardsContainer = document.querySelector('#cards-container');


// Stampo su console le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++){
    output = `${team[i].name} -- ${team[i].role} -- ${team[i].image}`;
    console.log(output);
    userOut.innerHTML += `${i + 1}) ${output} <br>`;
    cardsContainer.innerHTML += createMemberCard(`img/${team[i].image}`, team[i].name, team[i].role);
}

/* Al click del pulsante del form, aggiungo un nuovo membro al team */
const formAction = document.getElementById('submit');
formAction.addEventListener('click', function(){
    const newMember = [];
    // Converto un HTML collection in array
    const inputValue = Array.from(document.getElementsByTagName('input'));
    // Ciclo su tutti gli elementi dell'array 'inputValue' e prendo solo il valore
    inputValue.forEach((element, i) => {
        newMember[i] = element.value;
        element.value = '';
    });
    console.log(newMember);
    cardsContainer.innerHTML += createMemberCard (newMember[2], newMember[0], newMember[1]);
});








/*********************************FUNCTIONS*****************************************/


function createNewDivElement (){
    const divOutput = document.createElement('div');
    divOutput.classList.add('alert', 'alert-primary', 'fs-4');
    divOutput.id = 'output';
    return divOutput;
}

function createMemberCard (imgSource, nameMember, roleMember){
    const memberCard = `
        <div class="col">
            <div class="card">
                <img src="${imgSource}" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title">${nameMember}</h5>
                    <p class="card-text">${roleMember}</p>
                </div>
            </div>
        </div> `;

    return memberCard;
}