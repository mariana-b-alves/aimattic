var openBtn = document.querySelector('.open-btn');
var closeBtn = document.querySelector('.close-btn');
var popup = document.querySelectorAll('.popup');
let textarea = document.querySelector("#textarea");
let button  = document.querySelector("#button");
let my_list  = document.querySelector("#my_list");

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

button.addEventListener('click', function(){

    let entered_data = textarea.value;

    if(entered_data.trim() == ""){
        alert("Por favor inserir texto antes de submeter");

    }else{
        let new_elem = document.createElement("li");
        new_elem.innerHTML = textarea.value.toLowerCase();
        my_list.appendChild(new_elem);
    }

});