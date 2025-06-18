export function luhnCheck(cardNumber) {
  let sum = 0;
  const digits = cardNumber.replace(/\D/g, '').split('').map(Number);

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[digits.length - i - 1];
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }

  return sum % 10 === 0;
}