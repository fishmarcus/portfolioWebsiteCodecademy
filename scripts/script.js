let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

let home = document.getElementById('home');

home.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

let about = document.getElementById('about');
let aboutSection = document.querySelector('.about-me');

about.onclick = function() {
    let yOffset = -100;
    let y = aboutSection.getBoundingClientRect().top + pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
};

let proj = document.getElementById('proj');
let projectSection = document.querySelector('.projects');

proj.onclick = function() {
    let yOffset = -100;
    let y = projectSection.getBoundingClientRect().top + pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth'});
};

let contact = document.getElementById('contact');
let contactSection = document.querySelector('.Contact');

contact.onclick = function() {
    let yOffset = -100;
    let y = contactSection.getBoundingClientRect().top + pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth'});
}