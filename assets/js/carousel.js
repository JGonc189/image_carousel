let slideIndex = 1;

// next and previous controls
let next = (x) => {
    slides(slideIndex += x);
}

// thumbnail image controls 
let current = (x) => {
    slides(slideIndex = x);
}

let slides = (x) => {
    let slide = document.getElementsByClassName('slides');
    let dot = document.getElementsByClassName('dot');

    if (x > slide.length) {
        slideIndex = 1
    }

    if (x < 1) {
        slideIndex = slide.length;
    }

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }

    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(' active', '');      
    }

    slide[slideIndex-1].style.display = 'block';
    dot[slideIndex-1].className += ' active';
}

slides(slideIndex);