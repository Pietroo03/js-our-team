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

const teamEl = document.getElementById('team')
const rowEl = document.querySelector('.row')



for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  console.log(member);
  
  const markup = generateMemberCard(member)
  console.log(markup);
  
  
  teamEl.insertAdjacentHTML('beforeend', markup)
}


function generateMemberCard(member) {

  const {name, role, email, img} = member

  return `
    <div class="col-12 col-md-5 col-lg-3 d-flex bg-dark p-0">
      <img src="${img}" alt="" width="100">                         
      <div class="ps-2">
        <h5 class="text-white pt-2"><strong>${name}</strong></h5>
        <div class="text-white">${role}</div>
        <div class="text-primary">${email}</div>
      </div>
    </div>
    `
}


const formEl = document.querySelector('form')
const buttonEl = document.querySelector('button')

formEl.addEventListener('submit', (e) => {
  e.preventDefault()

  let name = document.getElementById('inputName').value
  let role = document.getElementById('inputRole').value
  let email = document.getElementById('inputEmail').value
  let img = document.getElementById('inputImg').value

  const newMember = {
    name,
    role,
    email,
    img
  }
  console.log(newMember);
  

  const markup = generateMemberCard(newMember)
  console.log(markup);
  

  teamEl.insertAdjacentHTML('beforeend', markup)
  

}) 




