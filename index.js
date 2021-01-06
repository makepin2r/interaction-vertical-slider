// move-box move
const slideHeight = 80;
const box = document.querySelector('.move-box');
const slides = document.querySelectorAll('.move-box li');
const container = document.querySelector('.container');
let startY = 0;
let threshold = 0;
let isClicked = false;
let currentIdx = 0;

container.addEventListener('mousedown', (e) => {
    isClicked = true;
    container.style.cursor = 'grab';
    // drag direction
    startY = e.pageY;
})

container.addEventListener('mouseup', (e) => mouseOff(e));
container.addEventListener('mouseleave', (e) => mouseOff(e));

container.addEventListener('mousemove', (e) => {
    e.preventDefault();
    let moveY = e.pageY;
    
    if(isClicked) {
        threshold += (moveY - startY);
        startY = moveY;

        if(threshold <= -80 && (currentIdx < (slides.length - container.offsetHeight / slideHeight) )){
            currentIdx++; 
            resetDrag();
            //console.log('currentIdx: ' + currentIdx);
        } else if (threshold >= 80 && currentIdx > 0) {
            currentIdx--;
            resetDrag();
            //console.log('currentIdx: ' + currentIdx);
        }
    }
    
})

function moveSlide(index){
    let offset = 0;
    offset = `-${80*currentIdx}px`;
    box.style.top = offset;
}

function resetDrag(){
    threshold = 0;
    isClicked = false; // 한 번 드래그할 때 한 슬라이드씩만
}

function mouseOff(e){
    e.preventDefault();
    moveSlide(currentIdx);
    resetDrag();
}
