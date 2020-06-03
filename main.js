const divCounter = document.querySelector('.counter')
const divPreloder = document.querySelector('.preloder')

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

// prevBtn.classList.add('hide-btn')
// nextBtn.classList.add('hide-btn')

function co() {
    let a = parseInt(document.querySelector(".counter").innerHTML)
    
    let count = setInterval(function () {
        document.querySelector(".counter").innerHTML = (++a).toString()
        if( a == 2020 ){
            
            clearInterval(count)
            setTimeout(function(){
                divCounter.classList.add('hide')
                divPreloder.classList.add('active')
            }, 1500)
        }
    }, 100)
}



co()

const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')



const textDes = document.querySelector('.text')

let text = ['text 4', 'text 1', 'text 2', 'text 3', 'text 4', 'text 1']
let counter = 1
const size = carouselImages[0].clientWidth

console.log(carouselImages[0])

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
textDes.innerHTML = text[counter]
textDes.classList.add('active')
textDes.classList.remove('hide')

nextBtn.addEventListener('click', function(){
    if(counter >= carouselImages.length - 1) return
    remove()
    carouselSlide.style.transition = 'transform 0.9s ease-in-out'
    counter++
    textDes.innerHTML = text[counter]
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

})

prevBtn.addEventListener('click', function(){
    if(counter <= 0) return
    remove()
    carouselSlide.style.transition = 'transform 0.9s ease-in-out'
    counter--
    textDes.innerHTML = text[counter]
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

    
})

carouselSlide.addEventListener('transitionend', function(){
    // console.log('good')
    // textDes.classList.remove('active')
    // textDes.classList.add('hide')
    textDes.classList.add('active')
    textDes.classList.remove('hide')
    textDes.classList.remove('hide-remove')

    if(carouselImages[counter].id === 'last'){
        
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length -2
        
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if(carouselImages[counter].id === 'first'){
        
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length - counter
        
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})

function remove(){
    textDes.classList.add('hide-remove')
    textDes.classList.remove('active')
}



