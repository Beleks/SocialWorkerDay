// const divCounter = document.querySelector('.counter')
// const divPreloder = document.querySelector('.preloder')

// function co() {
//     let a = parseInt(document.querySelector(".counter").innerHTML)
    
//     let count = setInterval(function () {
//         document.querySelector(".counter").innerHTML = (++a).toString()
//         if( a == 8 ){
            
//             clearInterval(count)
//             setTimeout(function(){
//                 divCounter.classList.add('hide')
//                 divPreloder.classList.add('active')
//             }, 1500)
//         }
//     }, 700)
// }

// co()

const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let counter = 1
const size = carouselImages[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'


nextBtn.addEventListener('click', function(){
    if(counter >= carouselImages.length - 1) return
    carouselSlide.style.transition = 'transform 1s ease-in-out'
    counter++
    console.log(counter)
    console.log(size)
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

prevBtn.addEventListener('click', function(){
    if(counter <= 0) return
    carouselSlide.style.transition = 'transform 1s ease-in-out'
    counter--
    console.log(counter)
    console.log(size)
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    textDes.classList.add('active')
    textDes.classList.remove('hide')
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

let text = ['text 4', 'text 1', 'text 2', 'text 3', 'text 4', 'text 1']

const textDes = document.querySelector('.text')

textDes.innerHTML = text[counter]