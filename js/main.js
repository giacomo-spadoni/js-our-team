const team = [
    { nome: 'Wayne Barnett', ruolo: 'Founder & CEO', immagine: '<img class="card-img-top" src="./img/wayne-barnett-founder-ceo.jpg" alt="">' },
    { nome: 'Angela Caroll', ruolo: 'Chief Editor', immagine: '<img class="card-img-top" src="./img/angela-caroll-chief-editor.jpg" alt="">' },
    { nome: 'Walter Gordon', ruolo: 'Office Manager', immagine: '<img class="card-img-top" src="./img/walter-gordon-office-manager.jpg" alt="">' },
    { nome: 'Angela Lopez', ruolo: 'Social Media Manager', immagine: '<img class="card-img-top" src="./img/angela-lopez-social-media-manager.jpg" alt="">' },
    { nome: 'Scott Estrada', ruolo: 'Developer', immagine: '<img class="card-img-top" src="./img/scott-estrada-developer.jpg" alt="">' },
    { nome: 'Barbara Ramos', ruolo: 'Graphic Designer', immagine: '<img class="card-img-top" src="./img/barbara-ramos-graphic-designer.jpg" alt="">' }
]

const section = document.getElementById('cards')

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    section.innerHTML +=
        `<div class="card" style="width: 18rem;">
        ${member.immagine}
        <div class="card-body">
            <h5 class="card-title">${member.nome}</h5>
            <p class="card-text">${member.ruolo}</p>
        </div>
    </div>`
    /* console.log(member.nome + ' - ' + member.ruolo)
    for (let key in member) {
        console.log(member[key])
    } */

}