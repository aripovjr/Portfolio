
//about me and skills
const main = document.querySelector('main') 
const aboutMe = document.querySelector('.about-me')
const skills = document.querySelectorAll('.skills') 

main.addEventListener("scroll", ()=>{
    aboutMe.classList.add('show')
    skills.forEach(skill=>{
        skill.classList.add('show')
    })
})
