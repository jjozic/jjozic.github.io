const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

//pressing the hamburger button opens the nav links
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

//whenever a link gets pressed the nav links close
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
