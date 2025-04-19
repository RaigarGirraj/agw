document.querySelectorAll('.infoButton').forEach(button => {
button.addEventListener('click', function() {
    console.log('clicked');
    document.querySelector('.layer').classList.toggle('activeL');
    
});});

// document.querySelector('.popupClose').addEventListener("click", () => {
//     document.querySelector('.layer').classList.remove('activeL');})