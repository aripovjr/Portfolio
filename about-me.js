const down = document.querySelectorAll('.down')  
const up = document.querySelectorAll('.up')  
const btnExpand = document.querySelectorAll('#button')
const icon = document.getElementById('icon')

btnExpand.forEach(item=>{
    item.addEventListener('click', ()=>{
       item.parentElement.classList.toggle('height')  
       item.childNodes[0].classList.toggle('rotated')
})
})
