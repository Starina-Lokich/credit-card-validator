import { luhnCheck } from '../src/validator';

test('validates valid card numbers', () => {
  expect(luhnCheck('4532756279624589')).toBe(true);
});

test('invalidates invalid card numbers', () => {
  expect(luhnCheck('1234567890123456')).toBe(false);
});