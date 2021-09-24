//select modal-btn,modal-overlay,close-btn
modalBtn= document.querySelector('.modal-btn');
modalOverlay= document.querySelector('.modal-overlay');
closeBtn= document.querySelector('.close-btn');

//listen for click events
modalBtn.addEventListener('click', function () {
    modalBtn.classList.add('open-modal');
});
closeBtn.addEventListener('click', function() {
    closeBtn.classList.remove('open-modal');
});

 