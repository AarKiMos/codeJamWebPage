let vh = window.innerHeight;
let nav = document.querySelectorAll(".navButtons");
let btt = document.querySelector(".backToTop");

const SEC_COORS = [
    window.scrollY + document.querySelector('#section1').getBoundingClientRect().top,
    window.scrollY + document.querySelector('#section2').getBoundingClientRect().top - 100,
    window.scrollY + document.querySelector('#section3').getBoundingClientRect().top - 100,
    window.scrollY + document.querySelector('#section4').getBoundingClientRect().top - 100,
    window.scrollY + document.querySelector('#section5').getBoundingClientRect().top - 100
]

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    nav.forEach( e => {
        e.classList.remove("navButtonActive")
    })

    if(window.scrollY < SEC_COORS[1]) {
        nav[0].classList.add("navButtonActive")
    } else if(window.scrollY >= SEC_COORS[1] && window.scrollY < SEC_COORS[2]) {
        nav[1].classList.add("navButtonActive")
    } else if(window.scrollY >= SEC_COORS[2] && window.scrollY < SEC_COORS[3]) {
        nav[2].classList.add("navButtonActive")
    } else if(window.scrollY >= SEC_COORS[3] && window.scrollY < SEC_COORS[4]) {
        nav[3].classList.add("navButtonActive")
    } else if(window.scrollY >= SEC_COORS[4]) {
        nav[4].classList.add("navButtonActive")
    }

    if(window.scrollY >= 100) {
        btt.classList.remove('invisible');
    } else {
        btt.classList.add('invisible');
    }
}

nav.forEach( e => {
    e.addEventListener("click", eve => {

        if (eve.target.id == "nav1") {
            window.scrollTo(0,SEC_COORS[0]);
        } else if (eve.target.id == "nav2") {
            window.scrollTo(0,SEC_COORS[1]);
        } else if (eve.target.id == "nav3") {
            window.scrollTo(0,SEC_COORS[2]);
        } else if (eve.target.id == "nav4") {
            window.scrollTo(0,SEC_COORS[3]);
        } else if (eve.target.id == "nav5") {
            window.scrollTo(0,SEC_COORS[4]);
        }

        if(window.scrollY >= 100) {
            btt.classList.remove('invisible');
        } else {
            btt.classList.add('invisible');
        }
    })
})

btt.addEventListener('click', () => {
    window.scrollTo(0,0);
})

window.scrollTo(0,0);

