const { isFizzy, isBuzzy, fizzyBuzzy, fizzBuzz, FIZZ, BUZZ, FIZZBUZZ } = require('../fizzbuzz')

test('Constants FIZZ, BUZZ, FIZZBUZZ', () => {
  expect(FIZZ).toBe('fizz')
  expect(BUZZ).toBe('buzz')
  expect(FIZZBUZZ).toBe('fizzbuzz')
});

test('isFizzy', () => {
  expect(isFizzy(3)).toBe(true)
  expect(isFizzy(50)).toBe(false)
  expect(isFizzy(30 * 5)).toBe(true)
  expect(isFizzy(16 * 10)).toBe(false)
});

test('isBuzzy', () => {
  expect(isBuzzy(5)).toBe(true)
  expect(isBuzzy(23)).toBe(false)
  expect(isBuzzy(30 * 5)).toBe(true)
  expect(isBuzzy(24 * 7)).toBe(false)
});

test('fizzyBuzzy', () => {
  expect(fizzyBuzzy(3)).toBe(FIZZ)
  expect(fizzyBuzzy(5)).toBe(BUZZ)
  expect(fizzyBuzzy(3 * 5)).toBe(FIZZBUZZ)
  expect(fizzyBuzzy(5 - 3)).toBe('')
});

test('fizzBuzz', () => {
  const result = fizzBuzz(15, 2, 7)
  expect(result.count).toBe(15)
  expect(result.fizz).toBe(7)
  expect(result.buzz).toBe(2)
  expect(result.fizzbuzz).toBe(1)
});
