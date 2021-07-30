const societiesList = [
  {
    id: 0,
    photo: "./assets/img/societies/0.jpg",
    name: "ACICTS",
    description: `
        Through hard work and commitment ACICTS has become the most renowned ICT society in the country by gaining consecutive victories and titles in all the fields of ICT in both the Local and Global Arena.
        `,
  },
  {
    id: 1,
    photo: "./assets/img/societies/1.jpg",
    name: "ACBU",
    description:
      "Entering its 46th year of existence, the Ananda College Broadcasting Unit still stands as the frontiersman in Sri Lanka's school based media coliseum.",
  },
  {
    id: 2,
    photo: "./assets/img/societies/2.jpg",
    name: "ACDC",
    description: `The Drama Circle of Ananda College was established in 2004 with a mission to revive English medium theatre activities at the school.`,
  },
  {
    id: 3,
    photo: "./assets/img/societies/3.jpg",
    name: "Ananda Club",
    description:
      "	The  Aeronautical Academy  of Ananda College was established in 2005 with the patronage of the past principal Mr. B.A. Aberathne and the master in charge Mr. Duminda Jayasuriya",
  },
  {
    id: 4,
    photo: "./assets/img/societies/4.jpg",
    name: "ACMUN",
    description:
      "Beginning a new chapter in the MUN history of Sri Lanka, the Ananda College MUN club introduces ‘Simulation SAARC’ in 2006. After two consecutive and successful editions, the MUN club of Ananda College created another milestone in the history of Sri Lankan MUN, with initiating the ‘Sri Lanka Model United Nations Conference (SLMUN) in 2008.",
  },
  {
    id: 5,
    photo: "./assets/img/societies/5.jpg",
    name: "ACLC",
    description:
      "The Leo club of Ananda College organizers a wide variety of projects in Every year mainly under the category of childcare eldercare fundraising and environmental Conservation with the concession stand guidance of the Teacher-In-Charge",
  },
];

const achievements = [
  {
    id: 0,
    title: "Google Prize Winner",
    description:
      "A student from the Ananda College ICT Society was able to get the grand prize winner position in the recently held Google Code-In Competition",
    date: "2019.12.24",
  },
  {
    id: 0,
    title: "Pentathlon Runners-Up",
    description:
      "A team from Ananda College Quiz Club was able to become Runners-Up at Sirasa Pentathlon",
    date: "2020.05.05",
  },
  {
    id: 0,
    title: "Champions from the Drama Cirlcle",
    description:
      "A team from Ananda College Drama Circle was able to become Champions at the All Island Interschool Shakespeare Drama Competition",
    date: "2020.10.03",
  },
  {
    id: 0,
    title: "NOI 19 - Best Performing School",
    description:
      "Ananda College became the Best Performing School in the National Olympiad of in Informatics 2019",
    date: "2019.03.22",
  },
];

window.onscroll = function () {
  if (window.pageYOffset >= 100) {
    $("#navigation").addClass("nav_attach");
    $("#modal").hide();
  } else {
    $("#navigation").removeClass("nav_attach");
  }
};

const clubCard = (id, photo, name, description) => {
  return $(`
<div class="clubCard" data-id="${id}">
<div class="clubContent">
    <img src="${photo}" alt="">
    <div class="text">
        <h2>${name}</h2>
    <p>${description}</p>
    <div class="buttons">
        <button class="viewClub" onclick="alert('More Information will be opening soon!')">More Info</button>
        <button class="register" onclick="alert('Registrations will be opening soon!')">Register</button>
    </div>
    </div>              
</div>
</div>
`);
};

const achievementCard = (id, title, description, date) => {
  return $(`
<div class="achievement" data-id="${id}">
    <h2>${title}</h2>
    <p>${description}</p>
    <p class="achievementDate"><i>${date}</i></p>
</div>
`);
};

societiesList &&
  societiesList.map((society) => {
    $("#societiesContainer").append(
      clubCard(society.id, society.photo, society.name, society.description)
    );
  });

achievements &&
  achievements.map((achievement) => {
    $("#achievementsContainer").append(
      achievementCard(
        achievement.id,
        achievement.title,
        achievement.description,
        achievement.date
      )
    );
  });

const mobileNav = document.querySelector(".navlinks");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});
