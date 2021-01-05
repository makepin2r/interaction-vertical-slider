// move-box move
const slideHeight = 80;
const box = document.querySelector('.move-box');
const slides = document.querySelectorAll('.move-box li');
const container = document.querySelector('.container');
let startY = 0;
let isUp = true;
let threshold = 0;
let isClicked = false;
let currentIdx = 0;

container.addEventListener('mousedown', (e) => {
    isClicked = true;
    container.style.cursor = 'grab';
    // drag direction
    startY = e.pageY;
})

container.addEventListener('mouseup', (e) => {
    e.preventDefault();
    moveSlide(currentIdx);
    threshold = 0;
    isClicked = false;
})
container.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    moveSlide(currentIdx);
    threshold = 0;
    isClicked = false;
})

container.addEventListener('mousemove', (e) => {
    e.preventDefault();
    let moveY = e.pageY;
    // distinguish drag direction
    if(isClicked) {
        if(startY < moveY) { isUp = false; }
        else { isUp = true; }
        threshold += (moveY - startY);
        startY = moveY;

        if(threshold >= 80 && (currentIdx < slides.length - 1)){
           currentIdx++; 
           threshold = 0;
           console.log('currentIdx: ' + currentIdx);
        } else if (threshold <= -80 && currentIdx > 0) {
            currentIdx--;
            threshold = 0;
            console.log('currentIdx: ' + currentIdx);
        }
    }
    
})

function moveSlide(index){
    let offset = 0;
    offset = `-${80*currentIdx}px`;
    box.style.top = offset;
}

function adjustOffset() {
    let slide = 0;
    if((box.offsetTop % slideHeight) !== 0) {
        slide = box.offsetTop / slideHeight;
        let offset = (slide * slideHeight) + 'px';
        box.style.top = offset;
        console.log('adjust:' + box.style.top);
    }
}

init();

function init(){
    console.log(startY);
}