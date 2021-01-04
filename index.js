// move-box move
const box = document.querySelector('.move-box');
let startY = 0;
let isUp = true;
let threshold = 0;
let isClicked = false;

box.addEventListener('mousedown', (e) => {
    isClicked = true;

    // drag direction
    startY = e.pageY;
})

box.addEventListener('mouseup', (e) => {
    e.preventDefault();
    isClicked = false;
    console.log('mouse off!');
})
box.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    isClicked = false;
    console.log('mouse off!');
})

box.addEventListener('mousemove', (e) => {
    e.preventDefault();
    let moveY = e.pageY;
    
    // distinguish drag direction
    if(isClicked) {
        if(startY < moveY) { isUp = false; }
        else { isUp = true; }
        threshold += (moveY - startY); // 여기 계산이 잘못됐다
        startY = moveY;

        if(threshold >= 80 || threshold <= -80) {
            moveElem(isUp);
            threshold = 0;
            return;
        }
    }
    
})

function moveElem(direction){
    let offset = 0;
    if(direction) { // is Up  
        offset = (box.offsetTop - 80) + 'px';
    } else { // is Down
        offset = (box.offsetTop + 80) + 'px';
    }
    box.style.top = offset;
}

init();

function init(){
    console.log(startY);
}