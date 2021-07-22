const societiesList = [
    {
        id:0,
        photo: './assets/img/Hero.jpg',
        name: 'Ananda Club',
        description: 'Ananda Club is a student-run club at Ananda College. We are a mix of students from all over the world who are interested in the world of technology and science. We are a mix of students from all over the world who are interested in the world of technology and science.',
    },
    {
        id:0,
        photo: './assets/img/Hero.jpg',
        name: 'Ananda Club',
        description: 'Ananda Club is a student-run club at Ananda College. We are a mix of students from all over the world who are interested in the world of technology and science. We are a mix of students from all over the world who are interested in the world of technology and science.',
    },
    {
        id:0,
        photo: './assets/img/Hero.jpg',
        name: 'Ananda Club',
        description: 'Ananda Club is a student-run club at Ananda College. We are a mix of students from all over the world who are interested in the world of technology and science. We are a mix of students from all over the world who are interested in the world of technology and science.',
    },
    {
        id:0,
        photo: './assets/img/Hero.jpg',
        name: 'Ananda Club',
        description: 'Ananda Club is a student-run club at Ananda College. We are a mix of students from all over the world who are interested in the world of technology and science. We are a mix of students from all over the world who are interested in the world of technology and science.',
    },
    {
        id:0,
        photo: './assets/img/Hero.jpg',
        name: 'Ananda Club',
        description: 'Ananda Club is a student-run club at Ananda College. We are a mix of students from all over the world who are interested in the world of technology and science. We are a mix of students from all over the world who are interested in the world of technology and science.',
    },
]

const achievements = [
    {
        id:0,
        title:"Google Prize Winner",
        description:"A student from the Ananda College ICT Society was able to get the grand prize winner position in the recently held Google Code-In Competition",
        date:"2020.10.17"
    },
    {
        id:0,
        title:"Google Prize Winner",
        description:"A student from the Ananda College ICT Society was able to get the grand prize winner position in the recently held Google Code-In Competition",
        date:"2020.10.17"
    },
    {
        id:0,
        title:"Google Prize Winner",
        description:"A student from the Ananda College ICT Society was able to get the grand prize winner position in the recently held Google Code-In Competition",
        date:"2020.10.17"
    },
    {
        id:0,
        title:"Google Prize Winner",
        description:"A student from the Ananda College ICT Society was able to get the grand prize winner position in the recently held Google Code-In Competition",
        date:"2020.10.17"
    },
]

window.onscroll = function() {
    if(window.pageYOffset>=100){
      $('#navigation').addClass('nav_attach')
      $('#modal').hide()
    }else{
      $('#navigation').removeClass('nav_attach')
    }
  };

const clubCard = (id,photo,name,description) =>{ return $(`
<div class="clubCard" data-id="${id}">
<div class="clubContent">
    <img src="${photo}" alt="">
    <div class="text">
        <h2>${name}</h2>
    <p>${description}</p>
    <div class="buttons">
        <button class="viewClub">More Info</button>
        <button class="register">Register</button>
    </div>
    </div>              
</div>
</div>
`)}

const achievementCard = (id,title,description,date) =>{ return $(`
<div class="achievement" data-id="${id}">
    <h2>${title}</h2>
    <p>${description}</p>
    <p class="achievementDate"><i>${date}</i></p>
</div>
`)}

societiesList && societiesList.map(society=>{
    $('#societiesContainer').append(clubCard(society.id,society.photo,society.name,society.description))
})

achievements && achievements.map(achievement=>{
    $('#achievementsContainer').append(achievementCard(achievement.id,achievement.title,achievement.description,achievement.date))
})
