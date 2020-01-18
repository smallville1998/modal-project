//variables
const modelMsgWrapper = document.querySelector('.modal__message');
const modalMsg = document.querySelector('.modal__message-wrapper')
const form = document.querySelector('form')
const msg = document.querySelector('.message');
const okBtn = document.querySelector('#okBtn');
var input = document.querySelector('.value');

//message
const textArea = document.getElementById('text-area');
const message = document.querySelector('#comment-message')

var popMessage = document.querySelector('.modal__message--mod');


// display modal
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // modelMessage.style.transition ='all 3s ease-out' ;
    modelMsgWrapper.classList.add('display');

    //append text to the modal
    msg.innerHTML = input.value;
    message.innerHTML = textArea.value;
    
    input.value = "";
    textArea.value ="";
})

// exit modal
okBtn.addEventListener('click', (e) => {

    popMessage.classList.add('display');
    popMessage.style.visibility = 'visible';
    popMessage.style.opacity = '1'

})

// pop message
let popButton = document.querySelector('.pop-btn');
popButton.onclick = (e) => {
    popMessage.style.visibility = 'hidden';
    popMessage.style.opacity = '0'
    modelMsgWrapper.classList.remove('display');

}

















