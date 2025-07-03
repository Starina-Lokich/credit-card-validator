import { luhnCheck } from './validator';
import { getCardType } from './card-type-detector';
import mastercard from '../assets/images/mastercard.png';
import visa from '../assets/images/visa.png';
import mir from '../assets/images/mir.png';

document.getElementById('validateBtn').addEventListener('click', () => {
  const input = document.getElementById('cardNumber');
  const resultDiv = document.getElementById('result');
  const logos = document.querySelectorAll('#cardLogos img');

  const cardNumber = input.value.trim();
  const isValid = luhnCheck(cardNumber);
  const cardType = getCardType(cardNumber);

  // Очистка предыдущего результата
  resultDiv.textContent = '';
  logos.forEach(logo => logo.style.display = 'none');

  if (isValid) {
    resultDiv.textContent = 'Valid card number';
    resultDiv.style.color = 'green';

    // Показать соответствующий логотип
    const logoToShow = document.getElementById(`${cardType}Logo`);
    if (logoToShow) {
      logoToShow.style.display = 'inline-block';
    }
  } else {
    resultDiv.textContent = 'Invalid card number';
    resultDiv.style.color = 'red';
  }
});