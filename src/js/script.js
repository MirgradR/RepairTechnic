let selectCity = document.getElementById('selectCity')
let cities = document.querySelectorAll('option')
let titleCity = document.querySelector('.info-title')

for (let city of cities) {
    selectCity.addEventListener('change', function() {
        let currentCity = city.value 
        if (city.selected) {
            city.setAttribute('selected', 'selected')//
            localStorage.setItem('city', city.value)//
            let text = `Сервисный центр <span>INDESIT</span> в ${currentCity}e`
            titleCity.innerHTML = text 
            
   
        }
    }) 
    
    let local = localStorage.getItem('city')//
    //city.selected = local
    let text = `Сервисный центр <span>INDESIT</span> в ${local}e`
    titleCity.innerHTML = text     
}

// Slider menu

let btnPrev = document.querySelector('.btn-prev')
let btnNext = document.querySelector('.btn-next')
let cards = document.querySelector('.slider__menu-items')
scroll = 0
if (window.innerWidth > 1400) {
    btnNext.addEventListener('click', function() {
        scroll += 350
        if (scroll > 850) {
            scroll = 850
        }
        cards.style.left = -scroll + 'px'
    })
    btnPrev.addEventListener('click', function() {
        scroll -= 350
        if (scroll < 0) {
            scroll = 0
        }
        cards.style.left = -scroll + 'px'
    })
} else if (window.innerWidth > 1200) {
    btnNext.addEventListener('click', function() {
        scroll += 350
        if (scroll > 1280) {
            scroll = 1280
        }
        cards.style.left = -scroll + 'px'
    })
    btnPrev.addEventListener('click', function() {
        scroll -= 429
        if (scroll < 0) {
            scroll = 0
        }
        cards.style.left = -scroll + 'px'
    })    
} else {
    btnNext.addEventListener('click', function() {
        scroll += 429
        if (scroll > 1700) {
            scroll = 1700
        }
        cards.style.left = -scroll + 'px'
    })
    btnPrev.addEventListener('click', function() {
        scroll -= 350
        if (scroll < 0) {
            scroll = 0
        }
        cards.style.left = -scroll + 'px'
    })     
}

// Api map yandex

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });

}

// popup

let btns = document.querySelectorAll('.btn-callback')
let popup = document.querySelector('.popup')
let close = document.querySelector('.popup__close')

for (let btn of btns) {
    btn.addEventListener('click', function(e) {
        popup.classList.add('open')
    })
}
close.addEventListener('click', function(e) {
    popup.classList.remove('open')
})
popup.addEventListener('click', function(e) {
    if (!e.target.closest('.popup__content')) {
        popup.classList.remove('open')
    }
})


