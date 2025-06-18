import { getCardType } from '../src/card-type-detector';

test('detects Visa', () => {
  expect(getCardType('4532756279624589')).toBe('visa');
});

test('detects MasterCard', () => {
  expect(getCardType('5555555555554444')).toBe('mastercard');
});

test('detects MIR', () => {
  expect(getCardType('2200000000000001')).toBe('mir');
});

test('returns unknown for invalid', () => {
  expect(getCardType('1234567890123456')).toBe('unknown');
});