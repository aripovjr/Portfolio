import projects from '/data.js'

const projectContainer = document.querySelector('.projects-container')
projectContainer.innerHTML = projects.map(project=>{
    const {img, title, link, website} = project
    return`
            <article class="project">
                <img src="${img}" alt="${title}">
                <p><a href="${website}" target="_blank" rel="noopener noreferrer">${title}</a></p>
                <a href="${link}" target="_blank" rel="noopener noreferrer">source code</a>
            </article>`
}).join('')

const btn = document.querySelector('.upBtn')

btn.addEventListener('click', ()=>{
    projectContainer.style.overflow = "none"
})