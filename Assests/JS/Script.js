// =================== SHOW MENU ===================== //
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

//  ==================== Menu Show ================= //
if (navToggle){
    navToggle.addEventListener("click" , () => {
        navMenu.classList.add('show-menu');
    })
}

// ======== MENU HIDDEN ========= //
if (navClose){
    navClose.addEventListener("click" , () => {
        navMenu.classList.remove("show-menu")
    })
}

// ========= REMOVE MENU FOR MOBILE =========== //
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // When click on this it removes show menu
    navMenu.classList.remove('show-menu'); 
}
navLink.forEach(n => n.addEventListener("click" , linkAction))

// =============== SHADOW HEADER ================ //
const shadowHeader = () => {
    const header = document.getElementById("header")

    this.scrollY >= 50 ? header.classList.add("shadow-header") : header.classList.remove("shadow-header")
}
window.addEventListener("scroll" , shadowHeader)

// ======================= E-MAIL JS ==================== //

const contactForm = document.getElementById("contact-form"),
      contactMessage = document.getElementById("contact-message")
        
const sendEmail = (e) => {
    e.preventDefault();

    // Service id - template id - #form - public key 
    emailjs.sendForm('service_8n791pf' , 'template_nb5apku' , '#contact-form' , '09NqdYDevBWcdlaCf')
    .then(() => {
        // SHOW SENT MESSAGE 
        contactMessage.textContent = "Message sent successfull 🫠✅"

        //  REMOVE MESSAGE AFTER 5 SEC
        setTimeout(() => {
            contactMessage.textContent = "";
        }, 5000);

        // clear input fields
        contactForm.reset();

    }, () => {
        // ERROR MESSAGE
        contactMessage.textContent = "Message was insuccessful to sent ❌😡"
    })

}

contactForm.addEventListener("submit" , sendEmail);


// ========================= SHOW SCROLL UP ====================== //
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener("scroll" , scrollUp)


/* ===================== SCROLL SECTION ACTIVE LINKS ============================ */
const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
    const scrollDown = window.screenY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsettop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else {
            sectionsClass.classList.remove('active-link')
        }  
    })
}
window.addEventListener('scroll' , scrollActive)


// =========================== DARK LIGHT THEME =================== //
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'] (iconTheme)
}

themeButton.addEventListener('click' , () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme' , getCurrentTheme())
    localStorage.setItem('selected-icon' , getCurrentIcon())
})

// ======================== SCROLL REVEAL ANIMATION ====================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1600,
    delay: 200,
})

sr.reveal(`.home__perfil, .about__image, .contact__mail ` , {origin: 'right'})
sr.reveal(`.home__name, .home__info ,
         about__container .section__title-1, .about__info , .contact__social, .contact__data`, 
         {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})