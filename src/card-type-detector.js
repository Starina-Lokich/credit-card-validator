export function getCardType(cardNumber) {
  const num = cardNumber.replace(/\D/g, '');

  if (/^4/.test(num)) return 'visa';
  if (/^(5[1-5]|222[1-9]|22[3-9]|2[3-9][0-9]{2}|[3-9][0-9]{3})/.test(num)) return 'mastercard';
  if (/^(220[0-4])/.test(num)) return 'mir';

  return 'unknown';
}