function openCard() {
    var card = document.querySelector('.card');
    card.classList.toggle('opened');
  }
function toggleCard() {
  var card = document.querySelector('.card');
  card.classList.toggle('opened');
}

document.querySelector('.click-indicator').addEventListener('click', toggleCard);
