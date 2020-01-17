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

const popMessage = document.querySelector('.modal__pop');


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
    //nothing much just to exit the modal.
    // modelMsgWrapper.classList.remove('display');
    okBtn.parentElement.parentElement.remove()
    popMessage.style.display = 'block'
})

// pop message
let popButton = document.querySelector('.pop-btn');
popButton.onclick = (e) => {
    popMessage.parentElement.remove();
    location.reload()
}
console.log(popMessage)

















