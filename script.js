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
  
  const card = `<div id="card" class="col d-flex bg-grey text-light ">
                  <img src="${img}" alt="${name} class="m-5">
                  <div class="dati m-3">
                    <h3 id="name">${name}</h3>
                    <span id="role">${role}</span> <br>
                    <a href="#" id="email" >${email}</a>
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
  for (let member of teamMembers){
  //concateno le card utilizzando la prima il cui valore sarà quello della funzione precedente 
  cards += personalCard(member)
  }
  //inserisco la card creata precedentemente nel file html attraverso .innerHTML
  membersContainer.innerHTML = cards;


}

// INVOCO LA FUNZIONE
printTeam(teamMembers)

//richiamo il form da HTML

const form = document.querySelector('form');

//creo una funzione che mi cancella tutti i campi, da usare sia per dopo l'invio del form che collegata al bottone "Cancella"
const resetFields = () => {
  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('email').value = '';
  document.getElementById('img').value = '';
}



form.addEventListener('submit', e => {
  e.preventDefault();


  //recupero i dati inseriti nel form e gli assegno una variabile omonima a quelle usate in precedenza
  form.classList.add('d-none')

  document.querySelector('.loader').classList.remove('d-none')
  setTimeout(() => {
    document.querySelector('.loader').classList.add('d-none')
    addMember();
  }, 3000)
  
})

function addMember () {
    const name = document.getElementById('name-input').value;
    const role = document.getElementById('role-input').value;
    const email = document.getElementById('email-input').value;
    const img = document.getElementById('img').value;

    console.log(document.getElementById('name-input'))
    console.log(name, role, email, img)
    // creo un nuovo oggetto da pushare nell'array precedente
    const newMember = {
      name,
      role,
      email,
      img
    }

    console.log(newMember)
    teamMembers.push(newMember)

    //inserisco il nuovo oggetto all'interno della funzione per creare la nuova card
    printTeam(teamMembers)
    //e resetto il form
    resetFields()
    
    form.classList.add('d-none')

    document.getElementById('messaggio').classList.remove('d-none')
}