const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// 1. Creo la funzione dove destrutturo gli oggetti e creo l'output inserendo le variabili ottenute in un tamplate literal che mi restituisce la card html
 

const personalCard = (member) => {

const {name, role, email, img} = member;
 console.log(name, role, email, img)
  
  const card = `<div id="card" class="col d-flex bg-warning">
                  <img src="${img}" alt="${name}">
                  <div class="dati">
                    <h3 id="name">${name}</h3>
                    <span id="role">${role}</span> <br>
                    <span id="email">${email}</span>
                  </div>
                </div>`

  return card;
         
}

// 2. Creo una seconda funzione in cui inserisco un ciclo per poter concatenare una carda per ogni oggetto dell'array


const printTeam = (array) => {
  //richiamo l'elemento che voglio riempire dal file html
  const membersContainer = document.getElementById('members-container');
  //Inizializzo una variabile vuota
  let cards = '';
  //creo il ciclo per ottenere ogni oggerro dall'array
  for (let member of array){
  //concateno le card utilizzando la prima il cui valore sarà quello della funzione precedente 
  cards += personalCard(member)
  }
  //inserisco la card creata precedentemente nel file html attraverso .innerHTML
  membersContainer.innerHTML = cards;

console.log(cards)

}


// INVOCO LA FUNZIONE
printTeam(teamMembers)