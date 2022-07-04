const cardContent = document.querySelector('.card-content');
const contentBoxes = document.querySelectorAll('.content-box');
const leftChevron = document.createElement('i');
const rightChevron = document.createElement('i');

leftChevron.className = 'fa-solid fa-chevron-left fa-2x';
rightChevron.className = 'fa-solid fa-chevron-right fa-2x';

cardContent.insertBefore(leftChevron, cardContent.querySelector('.content-box'));
cardContent.appendChild(rightChevron);

let activeBox = 1;

rightChevron.addEventListener('click', slideRight);
leftChevron.addEventListener('click', slideLeft);

function slideRight() {
    if(window.innerWidth < 707) {
        contentBoxes[activeBox].style.animation = 'animate1 .5s forwards 0s ease';

        setTimeout(function() {
            contentBoxes[activeBox].style.display = 'none';
        
            activeBox++;
            if(activeBox > contentBoxes.length - 1) {
                activeBox = 0;
            }

            contentBoxes[activeBox].style.display = 'flex';

            contentBoxes.forEach(box => box.style.animation = '');
        }, 200); 
    }
}

function slideLeft() {
    if(window.innerWidth < 707) {
        contentBoxes[activeBox].style.animation = 'animate1 .5s forwards 0s ease';
    
        setTimeout(function() {
            contentBoxes[activeBox].style.display = 'none';
        
            activeBox--;
            if(activeBox < 0) {
                activeBox = contentBoxes.length - 1;
            }
    
            contentBoxes[activeBox].style.display = 'flex';
    
            contentBoxes.forEach(box => box.style.animation = '');
        }, 200); 
    }
}