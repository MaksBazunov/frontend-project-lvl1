import getRandomNum from '../common.js';
import playGame from '../index.js';

const gameInstructionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRandomNumber = 2;
const maxRandomNumber = 100;

const isPrime = (question) => {
  if (question < 2) {
    return false;
  }

  const squareNum = Math.sqrt(question);

  for (let i = 2; i <= squareNum; i += 1) {
    if (question % i === 0) {
      return false;
    }
  }
  return true;
};

const genRound = () => {
  const question = getRandomNum(minRandomNumber, maxRandomNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(gameInstructionPrime, genRound);
