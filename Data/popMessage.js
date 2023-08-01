// PopUp Messages
const popContainer = document.getElementById('popContainer')
const popMsg = document.getElementById('popMsg');
let timeId;

const popMessage = function(Message = '') {
  popMsg.innerHTML = Message;

  
  var audio = new Audio('/Sounds/user_account_control.mp3');

  audio.play();
  
  popContainer.style.display = 'flex'

  timeId = setTimeout(() => {
    popContainer.style.display = 'none' 
  }, 2500);
}


const popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', () => {
  popContainer.style.display = 'none'
})