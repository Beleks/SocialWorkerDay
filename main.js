const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let counter = 1
const size = carouselImages[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'


nextBtn.addEventListener('click', function(){
    if(counter >= carouselImages.length - 1) return
    carouselSlide.style.transition = 'transform 0.8s ease-in-out'
    counter++
    console.log(counter)
    console.log(size)
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

prevBtn.addEventListener('click', function(){
    if(counter <= 0) return
    carouselSlide.style.transition = 'transform 0.8s ease-in-out'
    counter--
    console.log(counter)
    console.log(size)
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

carouselSlide.addEventListener('transitionend', function(){
    // console.log('good')
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