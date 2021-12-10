const down = document.querySelectorAll('.down')  
const up = document.querySelectorAll('.up')  
const btnExpand = document.querySelectorAll('#button')
const btnShorten = document.querySelectorAll('#cut')

btnExpand.forEach(item=>{
    item.addEventListener('click', ()=>{
       item.parentElement.classList.add('height')  
       down.forEach(item=>item.style.display = 'none')
       up.forEach(item=>item.style.display = 'initial') 
})
})

btnShorten.forEach(item=>{
    item.addEventListener('click', ()=>{
        item.parentElement.classList.remove('height')
            down.forEach(item=>item.style.display = 'initial')
            up.forEach(item=>item.style.display = 'none') 
        
    })
})