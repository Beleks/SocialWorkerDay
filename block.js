const divCounter = document.querySelector('.counter')
const divPreloder = document.querySelector('.preloder')

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

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

const years = document.querySelectorAll('span')

const anchors = document.querySelectorAll('.block-years div')
const yearBlock = document.querySelector('.year')


function changeYear(year){
    yearBlock.innerHTML = year
}

function scrollTo(element){
    window.scroll({
        left: '0',
        top: element.offsetTop,
        behavior: 'smooth'
    })
}



let year2008 = {
    name: '2008',
    photo: [
        '<img src="img/20080000.JPG.jpg" alt="">',
        '<img src="img/20080001.JPG.jpg" alt="">',
        '<img src="img/20080002.JPG.jpg" alt="">',
        '<img src="img/20080003.JPG.jpg" alt="">'
    ],
    text: [
        'Довольные:)',
        'text2',
        'text3',
        'text4'
    ]
}
let year2009 = {
    name: '2009',
    photo: [
        '<img src="img/20090004.JPG.jpg" alt="">',
        '<img src="img/20090005.JPG.jpg" alt="">',
        '<img src="img/20090006.JPG.jpg" alt="">',
    ],
    text: [
        'Довольные:)',
        'text2',
        'Тут тоже довольные',
    ]
}
let year2010 = {
    name: '2010',
    photo: [
        '<img src="img/20100007.JPG.jpg" alt="">',
        '<img src="img/20100008.JPG.jpg" alt="">',
        '<img src="img/20100009.JPG.jpg" alt="">',
        '<img src="img/20100010.JPG.jpg" alt="">',
        '<img src="img/20100011.JPG.jpg" alt="">',
        '<img src="img/20100012.JPG.jpg" alt="">',
        '<img src="img/20100013.JPG.jpg" alt="">',
        '<img src="img/20100014.JPG.jpg" alt="">'
    ],
    text: [
        'Довольные:)',
        'text2',
        'Тут тоже довольные',
        'text4',
        'text5',
        'text6',
        'text7',
        'text8'
    ]
}
let year2011 = {
    name: '2011',
    photo: [
        '<img src="img/20110015.JPG.jpg" alt="">',
        '<img src="img/20110016.JPG.jpg" alt="">',
        '<img src="img/20110017.JPG.jpg" alt="">',
        '<img src="img/20110018.JPG.jpg" alt="">',
        '<img src="img/20110019.JPG.jpg" alt="">',
        '<img src="img/20110020.JPG.jpg" alt="">',
        '<img src="img/20110021.JPG.jpg" alt="">',

    ],
    text: [
        'Довольные:)',
        'text2',
        'Тут тоже довольные',
        'text4',
        'text5',
        'text6',
        'text7'
    ]
}
let year2012 = {
    name: '2012',
    photo: [
        '<img src="img/20120031.JPG.jpg" alt="">',
        '<img src="img/20120032.JPG.jpg" alt="">',
        '<img src="img/20120033.JPG.jpg" alt="">',
        '<img src="img/20120034.JPG.jpg" alt="">',
        '<img src="img/20120035.JPG.jpg" alt="">'

    ],
    text: [
        'Довольные:)',
        'text2',
        'Тут тоже довольные',
        'text4',
        'text5'
    ]
}
let year2013 = {
    name: '2013',
    photo: [
        '<img src="img/20130036.JPG.jpg" alt="">',
        '<img src="img/20130037.JPG.jpg" alt="">',
        '<img src="img/20130038.JPG.jpg" alt="">',
        '<img src="img/20130039.JPG.jpg" alt="">'

    ],
    text: [
        'Довольные:)',
        'text2',
        'Тут тоже довольные',
        'text4'
    ]
}
let year2014 = {
    name: '2014',
    photo: [
        '<img src="img/20140040.JPG.jpg" alt="">',
        '<img src="img/20140041.JPG.jpg" alt="">',
        '<img src="img/20140042.JPG.jpg" alt="">',
        '<img src="img/20140043.JPG.jpg" alt="">',
        '<img src="img/20140044.JPG.jpg" alt="">',
        '<img src="img/20140045.JPG.jpg" alt="">',
        '<img src="img/20140046.JPG.jpg" alt="">',
        '<img src="img/20140047.JPG.jpg" alt="">',
        '<img src="img/20140048.JPG.jpg" alt="">',
        '<img src="img/20140049.JPG.jpg" alt="">'

    ],
    text: [
        'Довольные:)',
        'text2',
        'Тут тоже довольные',
        'text4',
        'text5',
        'text6',
        'text7',
        'text8',
        'text9',
        'text10'
    ]
}
let year2015 = {
    name: '2015',
    photo: [
        '<img src="img/20150053.JPG.jpg" alt="">',
        '<img src="img/20150054.JPG.jpg" alt="">',
        '<img src="img/20150055.JPG.jpg" alt="">',
        '<img src="img/20150056.JPG.jpg" alt="">',
        '<img src="img/20150057.JPG.jpg" alt="">',
        '<img src="img/20150058.JPG.jpg" alt="">',
        '<img src="img/20150059.JPG.jpg" alt="">'

    ],
    text: [
        'Довольные:)',
        'text2',
        'Тут тоже довольные',
        'text4',
        'text5',
        'text6',
        'text7'
    ]
}
let year2016 = {
    name: '2016',
    photo: [
        '<img src="img/20160060.JPG.jpg" alt="">',
        '<img src="img/20160061.JPG.jpg" alt="">',
        '<img src="img/20160062.JPG.jpg" alt="">',
        '<img src="img/20160063.JPG.jpg" alt="">',
        '<img src="img/20160064.JPG.jpg" alt="">',
        '<img src="img/20160065.JPG.jpg" alt="">',
        '<img src="img/20160066.JPG.jpg" alt="">',
        '<img src="img/20160067.JPG.jpg" alt="">',
        '<img src="img/20160068.JPG.jpg" alt="">',
        '<img src="img/20160069.JPG.jpg" alt="">'

    ],
    text: [
        'Довольные:)',
        'text2',
        'Тут тоже довольные',
        'text4',
        'text5',
        'text6',
        'text7',
        'text8',
        'text9',
        'text10'
    ]
}
let year2017 = {
    name: '2017',
    photo: [
        '<img src="img/20170085.JPG.jpg" alt="">',
        '<img src="img/20170086.JPG.jpg" alt="">',
        '<img src="img/20170087.JPG.jpg" alt="">',
        '<img src="img/20170088.JPG.jpg" alt="">',
        '<img src="img/20170089.JPG.jpg" alt="">',
        '<img src="img/20170090.JPG.jpg" alt="">',
        '<img src="img/20170091.JPG.jpg" alt="">',
        '<img src="img/20170092.JPG.jpg" alt="">',
        '<img src="img/20170093.JPG.jpg" alt="">',
        '<img src="img/20170094.JPG.jpg" alt="">'

    ],
    text: [
        'Довольные:)',
        'text2',
        'Тут тоже довольные',
        'text4',
        'text5',
        'text6',
        'text7',
        'text8',
        'text9',
        'text10'
    ]
}
let year2018 = {
    name: '2018',
    photo: [
        '<img src="img/20180101.JPG.jpg" alt="">',
        '<img src="img/20180102.JPG.jpg" alt="">',
        '<img src="img/20180103.JPG.jpg" alt="">',
        '<img src="img/20180104.JPG.jpg" alt="">',
        '<img src="img/20180105.JPG.jpg" alt="">',
        '<img src="img/20180106.JPG.jpg" alt="">',
        '<img src="img/20180107.JPG.jpg" alt="">',
        '<img src="img/20180108.JPG.jpg" alt="">',
        '<img src="img/20180109.JPG.jpg" alt="">',
        '<img src="img/20180110.JPG.jpg" alt="">'

    ],
    text: [
        'Довольные:)',
        'text2',
        'Тут тоже довольные',
        'text4',
        'text5',
        'text6',
        'text7',
        'text8',
        'text9',
        'text10'
    ]
}
let year2019 = {
    name: '2019',
    photo: [
        '<img src="img/20190115.JPG.jpg" alt="">',
        '<img src="img/20190116.JPG.jpg" alt="">',
        '<img src="img/20190117.JPG.jpg" alt="">',
        '<img src="img/20190118.JPG.jpg" alt="">',
        '<img src="img/20190119.JPG.jpg" alt="">',
        '<img src="img/20190120.JPG.jpg" alt="">',
        '<img src="img/20190121.JPG.jpg" alt="">',
        '<img src="img/20190124.JPG.jpg" alt="">',
        '<img src="img/20190125.JPG.jpg" alt="">',
        '<img src="img/20190126.JPG.jpg" alt="">'

    ],
    text: [
        'Довольные:)',
        'text2',
        'Тут тоже довольные',
        'text4',
        'text5',
        'text6',
        'text7',
        'text8',
        'text9',
        'text10'
    ]
}
let objNames = [year2008, year2009, year2010, year2011, year2012, year2013, year2014, year2015, year2016, year2017, year2018 , year2019]


// ================================================================







const carouselSlide = document.querySelector('.carousel-slide')
let text 

function changeMas(yaerObj){
    let firstElPhoto = yaerObj.photo[0]
    let lastElPhoto = yaerObj.photo[yaerObj.photo.length - 1]
    let firstElText = yaerObj.text[0]
    let lastElText = yaerObj.text[yaerObj.text.length - 1]

    yaerObj.photo.push(firstElPhoto)
    yaerObj.photo.unshift(lastElPhoto)
    yaerObj.text.push(firstElText)
    yaerObj.text.unshift(lastElText)

    text = yaerObj.text

    // console.log(yaerObj.photo)
}
changeMas(year2008)

function addImg(yaerObj){
    // Перебор массива с добавлением тегов IMG (    Уже нафиг не надо :)    )
    // console.log(year2008.photo.join())
    carouselSlide.innerHTML = yaerObj.photo.join('')
    carouselSlide.firstElementChild.setAttribute('id', 'last')
    carouselSlide.lastElementChild.setAttribute('id', 'first')
}

addImg(year2008)

let carouselImages = document.querySelectorAll('.carousel-slide img')

console.log(carouselImages)
// 
// 
// 
// 

let thisMas

function whatIsObj(nameYearObj){
    objNames.forEach(function(item){
        if(item.name === nameYearObj){
            console.log(item) 
            thisMas = item
        }
    })
}

for(let anchor of anchors){
    anchor.addEventListener('click', function(event){
        scrollTo(yearBlock)
        // console.log(event.target.parentNode.lastChild.innerHTML)
        let getYear = event.target.parentNode.lastChild.innerHTML
        changeYear(getYear)
        whatIsObj(getYear)

        changeMas(thisMas)
        addImg(thisMas)

        carouselImages = document.querySelectorAll('.carousel-slide img')
    })
}




// 
// 
// 
//  

const textDes = document.querySelector('.text')


let counter = 1
let size = carouselImages[1].clientWidth

console.log(carouselImages[0]) 
// ВАЖНО ?! Почему у нулевого элемента clientWidth = 0 ???, а у первого clientWidth отличный от 0

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

