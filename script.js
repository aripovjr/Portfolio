//transition appears when user clicks the media-link button
//from left to right 
const showBtn = document.getElementById('show')
const hideBtn = document.getElementById('hide')
const links = document.querySelector('.link-container')
showBtn.addEventListener('click', ()=>{
    links.classList.add('show')
})
hideBtn.addEventListener('click', ()=>{
    links.classList.remove('show')
})
//finish the code above


//auto text effect for p in the main page 
const textEl = document.getElementById('text')
const speedRange = 8
const text = "Frontend Developer / Student at University of Lodz"
let idx = 1
let speed = 1000/speedRange
writeText()
function writeText(){
    textEl.innerHTML = text.slice(0, idx)
    idx++
    if(idx>text.length){
        idx=1
    }
    setTimeout(writeText, speed)
}
//finish the code above

//Generate API of google for map
initMap()

function initMap(){
    var location = {lat: 51.776016, lng: 19.485582}
    var current_location = {lat: 40.974026, lng: 29.151094}
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 4,
        center: location
    })
    var marker = new google.maps.Marker({
        position: location,
        map: map
    })
    var current_mark = new google.maps.Marker({
        position: current_location,
        map: map
    }) 
}