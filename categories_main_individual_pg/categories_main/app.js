var openBtn = document.querySelector('.open-btn');
var closeBtn = document.querySelector('.close-btn');
var popup = document.querySelectorAll('.popup');

openBtn.addEventListener('click', function (){
    for(let x = 0; x < popup.length; x++ ){
        popup[x].classList.add('visible');
    }
})

closeBtn.addEventListener('click', function (){
    for(let x = 0; x < popup.length; x++ ){
        popup[x].classList.remove('visible');
    }
})

