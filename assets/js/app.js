//menu toggler

let menu = document.querySelector('.menu');
let navs = menu.querySelectorAll('a');
let panels = document.querySelectorAll('.panels > div');

for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener('click', () => {
        for (let j = 0; j < navs.length; j++) {
         navs[j].classList.remove('active');   
         panels[j].classList.remove('visible');
        }
        navs[i].classList.toggle('active');
        panels[i].classList.toggle('visible');

    })
    
}