const showBtn = document.getElementById('show')
const hideBtn = document.getElementById('hide')
const links = document.querySelector('.link-container')

showBtn.addEventListener('click', ()=>{
    links.classList.add('show')
})
hideBtn.addEventListener('click', ()=>{
    links.classList.remove('show')
})

