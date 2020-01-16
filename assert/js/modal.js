//variables
const modelMsgWrapper = document.querySelector('.modal__message');
const modalMsg = document.querySelector('.modal__message-wrapper')
const form = document.querySelector('form')
const msg = document.querySelector('.message');
const okBtn = document.querySelector('#okBtn');
var input = document.querySelector('.value');


// display modal
form.addEventListener('submit', (e) => {
    e.preventDefault();
'3s ease-out'
    // modelMessage.style.transition ='all 3s ease-out' ;
    modelMsgWrapper.classList.add('display');
    //append text to the modal
    msg.innerHTML = input.value;

    input.value = "";
})

// exit modal
okBtn.addEventListener('click', (e) => {
    //nothing much just to exit the modal.
    modelMsgWrapper.classList.remove('display');
})























