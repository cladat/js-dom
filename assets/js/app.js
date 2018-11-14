//menu toggler
(() => {
    let menu = document.querySelector('.menu');
    let navs = menu.querySelectorAll('a');
    let panels = document.querySelectorAll('.panels > div');
    
    for (let i = 0; i < navs.length; i++) {
        navs[i].addEventListener('click', () => {
            for (let j = 0; j < navs.length; j++) {
             navs[j].classList.remove('active');   
             panels[j].classList.remove('visible');
            }
            navs[i].classList.add('active');
            panels[i].classList.add('visible');
    
        })
    }
})();

//exo 3 name submitter

(() => {
    let a = document.querySelector('.panels > .name-submitter');
    let s = a.querySelector('span');
    let inp = a.querySelector('input');
    let b = a.querySelector('button');
    
    b.addEventListener('click', () => {
        s.innerText = inp.value;
    });
})();


//exo 4 change red + counter

(() => {
    let gauche = document.querySelector('.gauche');
    let droite = document.querySelector('.droite');
    let red = document.querySelector('.red');
    let change = document.querySelector('.btn.bg-warning');
    let btnCounter = document.querySelector('.btn.bg-success');
    let counter = btnCounter.querySelector('span');
    let count = 0;
    
    change.addEventListener('click', () => {
        count++;
        counter.innerHTML = count;
        //switch
        if(red.parentElement === gauche){
            gauche.removeChild(red);
            droite.appendChild(red);
        }else{
            droite.removeChild(red);
            gauche.appendChild(red);
    
        }
    })
})();
