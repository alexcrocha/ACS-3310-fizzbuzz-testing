const FIZZ = 'fizz'
const BUZZ = 'buzz'
const FIZZBUZZ = 'fizzbuzz'

/**
 * Returns true when n is divisible by 3
 * @param {Number} n
 * @returns {Boolean} fizziness
 * */
function isFizzy(n, div = 3) {
  return n % div === 0
}

/**
 * Returns true when n is divisible by 5
 * @param {Number} n
 * @returns {Boolean} buzziness
 */
function isBuzzy(n, div = 5) {
  return n % div === 0
}

/**
 * Returns FIZZ, BUZZ, or FIZZBUZZ when a number is divisible by 3, 5, or both
 * @param {Number} n
 * @returns {String} '', 'FIZZ', 'BUZZ', or 'FIZZBUZZ'
 */
function fizzyBuzzy(n, fizz = 3, buzz = 5) {
  let result = ''
  if (isFizzy(n, fizz)) { result += FIZZ }
  if (isBuzzy(n, buzz)) { result += BUZZ }
  return result
}

/**
 * Generates a results object describing a sequence of fizz buzz for count.
 * @param {Number} count
 * @returns {Object} with properties count, fizz, buzz, and fizzbuzz
 */
function fizzBuzz(count, fizzOn = 3, buzzOn = 5) {
  let result = { count, fizz: 0, buzz: 0, fizzbuzz: 0 }
  for (let i = 1; i <= count; i += 1) {
    const str = fizzyBuzzy(i, fizzOn, buzzOn)
    result[str.toLowerCase()] += 1
  }

  result.fizz += result.fizzbuzz
  result.buzz += result.fizzbuzz

  return result
}

module.exports.isFizzy = isFizzy
module.exports.isBuzzy = isBuzzy
module.exports.fizzyBuzzy = fizzyBuzzy
module.exports.fizzBuzz = fizzBuzz
module.exports.FIZZ = FIZZ
module.exports.BUZZ = BUZZ
module.exports.FIZZBUZZ = FIZZBUZZ
