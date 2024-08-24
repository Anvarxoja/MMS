let section2 = document.querySelector(".section2")
let ourmission = document.querySelector(".ourmission")
let text = document.querySelector(".text")
let mission = document.querySelector(".mission")
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")
let box5 = document.querySelector(".box5")
let box6 = document.querySelector(".box6")
let box7 = document.querySelector(".box7")

var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}

box1.addEventListener('mouseover', function () {
    mission.style.backgroundColor = 'rgb(90, 31, 6)'
    text.innerHTML = 'CIAO'
    ourmission.style.color = 'white'

})
box1.addEventListener('mouseleave', function () {
    mission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box2.addEventListener('mouseover', function () {
    mission.style.backgroundColor = 'rgb(250, 100, 0)'
    text.innerHTML = 'BOOO'
})
box2.addEventListener('mouseleave', function () {
    mission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box3.addEventListener('mouseover', function () {
    mission.style.backgroundColor = 'rgb(138, 26, 155)'
    text.innerHTML = 'HI!'
})
box3.addEventListener('mouseleave', function () {
    mission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box4.addEventListener('mouseover', function () {
    mission.style.backgroundColor = 'rgb(215, 1, 0)'
    text.innerHTML = 'HEY'
})
box4.addEventListener('mouseleave', function () {
    mission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box5.addEventListener('mouseover', function () {
    mission.style.backgroundColor = '#ffd200'
    text.innerHTML = 'howdy'

})
box5.addEventListener('mouseleave', function () {
    mission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''

})

box6.addEventListener('mouseover', function () {
    mission.style.backgroundColor = 'rgb(0, 168, 50)'
    text.innerHTML = 'hiya'

})
box6.addEventListener('mouseleave', function () {
    mission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''

})

box7.addEventListener('mouseover', function () {
    mission.style.backgroundColor = 'rgb(14, 116, 225)'
    text.innerHTML = 'SUP'

})
box7.addEventListener('mouseleave', function () {
    mission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box1.addEventListener('mouseover', function () {
    text.style.backgroundColor = 'rgb(90, 31, 6)'
    text.innerHTML = 'CIAO'
    text.style.color = 'white'

})
box1.addEventListener('mouseleave', function () {
    text.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box2.addEventListener('mouseover', function () {
    text.style.backgroundColor = 'rgb(250, 100, 0)'
    text.innerHTML = 'BOOO'
})
box2.addEventListener('mouseleave', function () {
    text.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box3.addEventListener('mouseover', function () {
    text.style.backgroundColor = 'rgb(138, 26, 155)'
    text.innerHTML = 'HI!'
})
box3.addEventListener('mouseleave', function () {
    text.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box4.addEventListener('mouseover', function () {
    text.style.backgroundColor = 'rgb(215, 1, 0)'
    text.innerHTML = 'HEY'
})
box4.addEventListener('mouseleave', function () {
    text.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box5.addEventListener('mouseover', function () {
    text.style.backgroundColor = '#ffd200'
    text.innerHTML = 'howdy'

})
box5.addEventListener('mouseleave', function () {
    text.style.backgroundColor = '#ffd200'
    text.innerHTML = ''

})

box6.addEventListener('mouseover', function () {
    text.style.backgroundColor = 'rgb(0, 168, 50)'
    text.innerHTML = 'hiya'

})
box6.addEventListener('mouseleave', function () {
    text.style.backgroundColor = '#ffd200'
    text.innerHTML = ''

})

box7.addEventListener('mouseover', function () {
    text.style.backgroundColor = 'rgb(14, 116, 225)'
    text.innerHTML = 'SUP'

})
box7.addEventListener('mouseleave', function () {
    text.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box1.addEventListener('mouseover', function () {
    section2.style.backgroundColor = 'rgb(90, 31, 6)'
    text.innerHTML = 'CIAO'
    text.style.color = 'white'

})
box1.addEventListener('mouseleave', function () {
    section2.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box2.addEventListener('mouseover', function () {
    section2.style.backgroundColor = 'rgb(250, 100, 0)'
    text.innerHTML = 'BOOO'
})
box2.addEventListener('mouseleave', function () {
    section2.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box3.addEventListener('mouseover', function () {
    section2.style.backgroundColor = 'rgb(138, 26, 155)'
    text.innerHTML = 'HI!'
})
box3.addEventListener('mouseleave', function () {
    section2.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box4.addEventListener('mouseover', function () {
    section2.style.backgroundColor = 'rgb(215, 1, 0)'
    text.innerHTML = 'HEY'
})
box4.addEventListener('mouseleave', function () {
    section2.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box5.addEventListener('mouseover', function () {
    section2.style.backgroundColor = '#ffd200'
    text.innerHTML = 'howdy'

})
box5.addEventListener('mouseleave', function () {
    section2.style.backgroundColor = '#ffd200'
    text.innerHTML = ''

})

box6.addEventListener('mouseover', function () {
    section2.style.backgroundColor = 'rgb(0, 168, 50)'
    text.innerHTML = 'hiya'

})
box6.addEventListener('mouseleave', function () {
    section2.style.backgroundColor = '#ffd200'
    text.innerHTML = ''

})

box7.addEventListener('mouseover', function () {
    section2.style.backgroundColor = 'rgb(14, 116, 225)'
    text.innerHTML = 'SUP'

})
box7.addEventListener('mouseleave', function () {
    section2.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box1.addEventListener('mouseover', function () {
    ourmission.style.backgroundColor = 'rgb(90, 31, 6)'
    text.innerHTML = 'CIAO'
    text.style.color = 'white'

})
box1.addEventListener('mouseleave', function () {
    ourmission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box2.addEventListener('mouseover', function () {
    ourmission.style.backgroundColor = 'rgb(250, 100, 0)'
    text.innerHTML = 'BOOO'
})
box2.addEventListener('mouseleave', function () {
    ourmission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box3.addEventListener('mouseover', function () {
    ourmission.style.backgroundColor = 'rgb(138, 26, 155)'
    text.innerHTML = 'HI!'
})
box3.addEventListener('mouseleave', function () {
    ourmission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box4.addEventListener('mouseover', function () {
    ourmission.style.backgroundColor = 'rgb(215, 1, 0)'
    text.innerHTML = 'HEY'
})
box4.addEventListener('mouseleave', function () {
    ourmission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})

box5.addEventListener('mouseover', function () {
    ourmission.style.backgroundColor = '#ffd200'
    text.innerHTML = 'howdy'

})
box5.addEventListener('mouseleave', function () {
    ourmission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''

})

box6.addEventListener('mouseover', function () {
    ourmission.style.backgroundColor = 'rgb(0, 168, 50)'
    text.innerHTML = 'hiya'

})
box6.addEventListener('mouseleave', function () {
    ourmission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''

})

box7.addEventListener('mouseover', function () {
    ourmission.style.backgroundColor = 'rgb(14, 116, 225)'
    text.innerHTML = 'SUP'

})
box7.addEventListener('mouseleave', function () {
    ourmission.style.backgroundColor = '#ffd200'
    text.innerHTML = ''
})



