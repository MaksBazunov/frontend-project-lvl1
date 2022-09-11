import getRandomNum from '../common.js';
import playGame from '../index.js';

const directivePrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRandomNumber = 2;
const maxRandomNumber = 100;

const isPrime = (num) => {
  if (num === 2) {
    return 'yes';
  }

  let i = 2;
  const squareNum = Math.sqrt(num);

  while (i <= squareNum) {
    if (num % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const genRound = () => {
  const num = getRandomNum(minRandomNumber, maxRandomNumber);
  const question = num;
  const answer = isPrime(num);
  return [question, answer];
};

export default () => playGame(directivePrime, genRound);
