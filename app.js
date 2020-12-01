/* menu show y hidden */
const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
 closeMenu = document.getElementById('nav-close')


/* Show */
toggleMenu.addEventListener('click', () => {
navMenu.classList.toggle('show');
})


/* hidden */
closeMenu.addEventListener('click', () => {
navMenu.classList.remove('show');
});



/* active and remove menu */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
// active link
 navLink.forEach(n => n.classList.remove('active'));
 this.classList.add('active');

// remove menu mobile
 navMenu.classList.remove('show');


}

navLink.forEach(n => n.addEventListener('click', linkAction));
