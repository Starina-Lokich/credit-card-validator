import { luhnCheck } from './validator';
import { getCardType } from './card-type-detector';

document.getElementById('validateBtn').addEventListener('click', () => {
  const input = document.getElementById('cardNumber');
  const resultDiv = document.getElementById('result');
  const logo = document.getElementById('cardLogo');

  const cardNumber = input.value.trim();
  const isValid = luhnCheck(cardNumber);
  const cardType = getCardType(cardNumber);

  resultDiv.textContent = isValid ? 'Valid card number' : 'Invalid card number';
  resultDiv.style.color = isValid ? 'green' : 'red';

  logo.src = `/images/${cardType}.png`;
  logo.style.display = cardType !== 'unknown' ? 'block' : 'none';
});