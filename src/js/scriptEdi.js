const cards = document.querySelectorAll('.card');
let currentCard = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

document.getElementById('prev').addEventListener('click', () => {
  currentCard = (currentCard - 1 + cards.length) % cards.length;
  showCard(currentCard);
});

document.getElementById('next').addEventListener('click', () => {
  currentCard = (currentCard + 1) % cards.length;
  showCard(currentCard);
});

showCard(currentCard); // Exibe o primeiro card ao carregar a página