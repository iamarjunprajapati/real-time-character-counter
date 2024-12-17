let userText = "";
let textarea = document.querySelector('#textarea');
let totalCharacter = document.querySelector('#total-characters');
let remainingCharacter = document.querySelector('#remaining-characters');
let maxCharacter = 50;

textarea.addEventListener('input', () => {
   let userText = textarea.value;
   totalCharacter.innerText = userText.length;
   remainingCharacter.innerText = maxCharacter-userText.length;
})