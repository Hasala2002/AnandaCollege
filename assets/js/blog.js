const blogData = [
    {
        title: "BITS, the intra-school ICT competition is about to start",
        description: "The First-Ever Task-Based Intra-School ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT",
        photo: "./assets/img/bits.png",
        date: "2021.07.20"
    },
    {
        title: "BITS, the intra-school ICT competition is about to start",
        description: "The First-Ever Task-Based Intra-School ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT",
        photo: "./assets/img/bits.png",
        date: "2021.07.20"
    },
    {
        title: "BITS, the intra-school ICT competition is about to start",
        description: "The First-Ever Task-Based Intra-School ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT",
        photo: "./assets/img/bits.png",
        date: "2021.07.20"
    },
    {
        title: "BITS, the intra-school ICT competition is about to start",
        description: "The First-Ever Task-Based Intra-School ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT",
        photo: "./assets/img/bits.png",
        date: "2021.07.20"
    },
    {
        title: "BITS, the intra-school ICT competition is about to start",
        description: "The First-Ever Task-Based Intra-School ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT",
        photo: "./assets/img/bits.png",
        date: "2021.07.20"
    },
    {
        title: "BITS, the intra-school ICT competition is about to start",
        description: "The First-Ever Task-Based Intra-School ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT",
        photo: "./assets/img/bits.png",
        date: "2021.07.20"
    },
    {
        title: "BITS, the intra-school ICT competition is about to start",
        description: "The First-Ever Task-Based Intra-School ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT",
        photo: "./assets/img/bits.png",
        date: "2021.07.20"
    },
    {
        title: "BITS, the intra-school ICT competition is about to start",
        description: "The First-Ever Task-Based Intra-School ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT",
        photo: "./assets/img/bits.png",
        date: "2021.07.20"
    },
    {
        title: "BITS, the intra-school ICT competition is about to start",
        description: "The First-Ever Task-Based Intra-School ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT",
        photo: "./assets/img/bits.png",
        date: "2021.07.20"
    },
]

window.onscroll = function() {
    if(window.pageYOffset>=100){
      $('#navigation').addClass('nav_attach')
    }else{
      $('#navigation').removeClass('nav_attach')
    }
  };

const createNewBlogCard = (title,description,photo,date) => {
    let blogCard = document.createElement('div')
    let blogContent = document.createElement('div')
    let blogImage = document.createElement('img')
    let blogDate = document.createElement('div')
    let blogButton = document.createElement('button')
    let blogTitle = document.createElement('h3')
    let blogDescription = document.createElement('h5')
    blogCard.className = "blogCard"
    blogContent.className = "content"
    blogDate.className = "date"
    blogButton.className = "blogButton"
    blogButton.textContent = 'View Story'
    blogImage.src = photo
    blogImage.alt = title
    blogTitle.textContent = title
    blogDescription.textContent = description
    blogContent.append(blogTitle)
    blogContent.append(blogDescription)
    blogDate.textContent = date
    blogCard.append(blogImage)
    blogCard.append(blogContent)
    blogCard.append(blogDate)
    blogCard.append(blogButton)
    return blogCard
}

blogData && blogData.map(data=>{
    let blogContainer = document.getElementById('blogContainer')
    blogContainer.append(createNewBlogCard(data.title,data.description,data.photo,data.date))
})


