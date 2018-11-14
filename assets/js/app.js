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
        inp.value = "";
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
    btnCounter.addEventListener('click', () => {
        count = 0;
        counter.innerHTML = count;
        if(red.parentElement == droite){
            droite.removeChild(red);
            gauche.appendChild(red);
        }
    })
})();

//exo 5 ajouter des oeufs
(() => {
    let btn = document.querySelector('.emoji-adder');
    let img = "<img src=\"./assets/img/emoji.png\">";
    let emojis = document.querySelector('.emojis');
    
    btn.addEventListener('click', () => {
        emojis.innerHTML += img;
    })
})();


//exo 6 niveau 1

(() => {
    let inputs = document.querySelectorAll('.niveau-1 input');
    let btn = document.querySelector('.niveau-1 button');
    let result = document.querySelector('.niveau-1 .resultat');
    
    btn.addEventListener('click', () => {
        let r = Number(inputs[0].value) + Number(inputs[1].value);
        result.innerText = r;
    })
})();

//exo 6 niveau 2

(() => {

    let inp = document.querySelector('.niveau-2 input');
    let result = document.querySelector('.niveau-2 .resultat');
    
    let un = document.querySelector('#un');
    let deux = document.querySelector('#deux');
    let trois = document.querySelector('#trois');
    let quattre = document.querySelector('#quattre');
    let cinq = document.querySelector('#cinq');
    let six = document.querySelector('#six');
    let sept = document.querySelector('#sept');
    let huit = document.querySelector('#huit');
    let neuf = document.querySelector('#neuf');
    let zero = document.querySelector('#zero');
    
    let plus = document.querySelector('#plus');
    let moins = document.querySelector('#moins');
    let fois = document.querySelector('#fois');
    let divise = document.querySelector('#divise');
    let egal = document.querySelector('#egal');
    let reset = document.querySelector('#reset');
    
    let premier = 0;
    let deuxieme = 0;
    let operator = "";
    
    
    un.addEventListener('click', () => {
        inp.value += 1;
    });
    deux.addEventListener('click', () => {
        inp.value += 2;
    });
    trois.addEventListener('click', () => {
        inp.value += 3;
    });
    quattre.addEventListener('click', () => {
        inp.value += 4;
    });
    cinq.addEventListener('click', () => {
        inp.value += 5;
    });
    six.addEventListener('click', () => {
        inp.value += 6;
    });
    sept.addEventListener('click', () => {
        inp.value += 7;
    });
    huit.addEventListener('click', () => {
        inp.value += 8;
    });
    neuf.addEventListener('click', () => {
        inp.value += 9;
    });
    zero.addEventListener('click', () => {
        inp.value += 0;
    });
    
    plus.addEventListener('click', () => {
        if(premier == 0){
            premier = Number(inp.value);
            result.innerText += premier.toString() + "+ ";
        }else{
            deuxieme = Number(inp.value);
        }
        inp.value = "";
        operator = "+";
    });
    moins.addEventListener('click', () => {
        if(premier == 0){
            premier = Number(inp.value);
            result.innerText += premier.toString() + "- ";
        }else{
            deuxieme = Number(inp.value);
        }
        inp.value = "";
        operator = "-";
    });
    fois.addEventListener('click', () => {
        if(premier == 0){
            premier = Number(inp.value);
            result.innerText += premier.toString() + "* ";
        }else{
            deuxieme = Number(inp.value);
        }
        inp.value = "";
        operator = "*";
    });
    divise.addEventListener('click', () => {
        if(premier == 0){
            premier = Number(inp.value);
            result.innerText += premier.toString() + "/ ";
        }else{
            deuxieme = Number(inp.value);
        }
        inp.value = "";
        operator = "/";
    });
    
    egal.addEventListener('click', () => {
        switch(operator){
            case "+":
                deuxieme = Number(inp.value);
                result.innerText += deuxieme.toString() + " = " + (premier + deuxieme);
                inp.value = "";
                break;
            case "-":
                deuxieme = Number(inp.value);
                result.innerText += deuxieme.toString() + " = " + (premier - deuxieme);
                inp.value = "";
                break;
            case "*":
                deuxieme = Number(inp.value);
                result.innerText += deuxieme.toString() + " = " + (premier * deuxieme);
                inp.value = "";
                break;
            case "/":
                deuxieme = Number(inp.value);
                result.innerText += deuxieme.toString() + " = " + (premier / deuxieme);
                inp.value = "";
                break;
        }
    });
    
    reset.addEventListener('click', () => {
        premier = 0;
        deuxieme = 0;
        operator = "";
        inp.value = "";
        result.innerText = "";
    });
})();


