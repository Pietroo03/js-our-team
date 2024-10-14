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

const rowEl = document.querySelector('.row')

for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log(member);
    let {name, role, email, img} = member
    let markup = `
    <div class="col d-flex bg-dark m-2">
      <div class="">
        <img src="${img}" alt="" width="80">
      </div>                         
      <div class="ps-2">
        <div class="text-white">${name}</div>
        <div class="text-white">${role}</div>
        <div class="text-primary">${email}</div>
      </div>
    </div>
    `
    rowEl.innerHTML += markup
}