const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

//remove menu
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//skills

const skillsContent = document.getElementsByClassName('skills_content')
const skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
let itemClass = this.parentNode.className
    for (let i=0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if (itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}
skillsHeader.forEach((el) => {el.addEventListener('click', toggleSkills)})

//qualification

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

//swiper
let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: false,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    keyboard: true,
});

//scroll sections active link

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//change background header
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// show scroll up

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//dark light theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


let languageButton = document.getElementById('language-button')
const languageIconTheme = 'uil-english-to-chinese'
let langArray = {
    'desc': {
        'ru': "Мой путь в разработке начался в 2020 году, с тех пор я улучшаюсь в данном направлении каждый день. Я верю, что развитие себя и других главная цель в нашей жизни.",
        'en': "My path to development began in 2020, since then I have been trying to develop in this way every day. I believe that improving ourselves and others is the main goal of our life."
    },
    'aboutDesc': {
        'ru': "Я начинающий разработчик, изучаю стек React-Redux. Мои главные навыки это - трудолюбиие, проактивность, желание решать трудности и получать новые знания.",
        'en': "I am a junior developer studying React-Redux technologies. My main soft skills are hard work, proactivity, a desire to solve difficulties and learn new things."
    },
    'work1': {
        'ru': "Моя первая небольшая игра на чистом CSS и HTML. Код выполнен в стиле ООП.",
        'en': "My first attempt at making a small game with pure CSS and HTML. File Js uses an object oriented model."
    },
    'work2': {
        'ru': "Приложение разработано в React, используется API открытой базы данных фильмов, только функциональные компоненты и хуки. Оформление выполнено с помощью библиотеки Materialize.",
        'en': "An application developed in React, in the application we use the OMDb (The Open Movie Database) API, only functional components and hooks. The Materialize component library is also used."
    },
    'work3': {
        'ru': "Мое первое приложение для электронной коммерции, разработано в React, используется API Fortnite, используются хуки useReducer и useContext. Оформление выполнено с помощью библиотеки Materialize",
        'en': "My first e-commerce Application developed in React, in the application we use Fortnite API, hooks useReducer and useContext.The Materialize component library is also used."
    },
    'work4': {
        'ru': "Это приложение специально разработано для моей жены, в данном приложении применяется технология React Router. В частности используются хуки useHistory, useParams, useLocation. Оформление - библиотека Materialize",
        'en': "This app, specially made for my wife, uses a React Router and hooks useHistory, useParams, useLocation. The Materialize component library is also used."
    },
    'work5': {
        'ru': "При разработке данного приложения использовал TypeScript, для управления состоянием - Redux. Две библиотеки для форм: Formik и Redux-Form, а оформление сделано при помощи AntDesign.",
        'en': "In this App I try to use TypeScript, React-Redux, two different libraries form as Formik and Redux-Form.\n" +
            "                            Design made with AntDesign."
    },
    'work6': {
        'ru': "Небольшой сайт, предоставляющий информацию для путешествий на дальнем востоке. Используется чистый JS, SASS.",
        'en': "A small site providing information for traveling in the Far East. Pure JS, SASS is used."
    },
    'work7': {
        'ru': "Используется связка React-Redux и TypeScript, дополнительные библиотеки React Router и JSON Server.",
        'en': "In this App I try to use TypeScript, React-Redux, React Router and JSON Server."
    }
}
function changeLanguage() {
    let lang = languageButton.lang
    for (let key in langArray){
        document.querySelector('.lng-' + key).innerHTML = langArray[key][lang]
    }
    (lang === 'en')
        ? languageButton.lang = 'ru'
        : languageButton.lang = 'en'

    if (languageButton.classList.contains(languageIconTheme)){
        languageButton.classList.remove('uil-english-to-chinese')
        languageButton.classList.add('uil-hindi-to-chinese')
    }else{
        languageButton.classList.remove('uil-hindi-to-chinese')
        languageButton.classList.add('uil-english-to-chinese')
    }


}
languageButton.addEventListener('click', changeLanguage)
