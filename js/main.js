const team = [
    { nome: 'Wayne Barnett', ruolo: 'Founder & CEO', immagine: 'wayne-barnett-founder-ceo.jpg' },
    { nome: 'Angela Caroll', ruolo: 'Chief Editor', immagine: 'angela-caroll-chief-editor.jpg' },
    { nome: 'Walter Gordon', ruolo: 'Office Manager', immagine: 'walter-gordon-office-manager.jpg' },
    { nome: 'Angela Lopez', ruolo: 'Social Media Manager', immagine: 'angela-lopez-social-media-manager.jpg' },
    { nome: 'Scott Estrada', ruolo: 'Developer', immagine: 'scott-estrada-developer.jpg' },
    { nome: 'Barbara Ramos', ruolo: 'Graphic Designer', immagine: 'barbara-ramos-graphic-designer.jpg' }
]

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    console.log(member.nome + ' - ' + member.ruolo)
    // for (let key in member) {
    //     console.log(member[key])
    // }

}