function toggleCard() {
    this.classList.toggle('opened');
    console.log('Toggle card:', this);
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', toggleCard);
});

document.addEventListener('click', function(event) {
    document.querySelectorAll('.card').forEach(card => {
        if (!card.contains(event.target) && card.classList.contains('opened')) {
            card.classList.remove('opened');
            console.log('Card closed from outside:', card);
        }
    });
}, true); 