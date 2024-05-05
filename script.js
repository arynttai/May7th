function toggleCard() {
    var card = document.querySelector('.card');
    card.classList.toggle('opened');
}

document.querySelector('.card').addEventListener('click', function(event) {
    toggleCard();
    event.stopPropagation(); 
});

document.body.addEventListener('click', function(event) {
    var card = document.querySelector('.card');
    if (!card.contains(event.target) && card.classList.contains('opened')) {
        toggleCard();
    }
});
