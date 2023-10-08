
// ________ Variables ________

const initialNumber = document.querySelector('.initialCardNumber');
const initialSymbol = document.querySelector('.initialSymbol');

const cardNumber = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];  
const cardSymbol = [
  'https://www.svgrepo.com/show/362109/heart.svg',
  'https://www.svgrepo.com/show/168831/diamond.svg', 
  'https://www.svgrepo.com/show/23612/spade-symbol.svg',
  'https://www.svgrepo.com/show/320078/clubs.svg'
];

// Tomar un número aleatorio de cardNumber
function getRandomNumber() {
  return cardNumber[Math.floor(Math.random() * cardNumber.length)];
}

// Tomar un simbolo aleatorio de cardSymbol  
function getRandomSymbol() {
  return cardSymbol[Math.floor(Math.random() * cardSymbol.length)]; 
}

// Actualizar número aleatorio
function updateNumber() { 
  const randomNumber = getRandomNumber();
  initialNumber.textContent = randomNumber;

}

// Actualizar símbolo aleatorio
function updateSymbol() {
  const randomSymbol = getRandomSymbol();
  
  initialSymbol.src = randomSymbol;

  document.querySelectorAll('.initialSymbol').forEach(symbol => {
    symbol.src = randomSymbol; 
  });
}

// Actualizar al cargar página
updateNumber();
updateSymbol();

// Actualizar cada 5 segundos (Para probar si servía 10 segundos se me hacía muy largo XD)
setInterval(() => {
  updateNumber();
  updateSymbol();
}, 5000);