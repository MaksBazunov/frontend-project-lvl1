import getRandomNum from '../common.js';
import playGame from '../index.js';

const gameInstructionEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRandomNumber = 0;
const maxRandomNumber = 1000;

const isEven = (num) => num % 2 === 0;

const genRound = () => {
  const question = getRandomNum(minRandomNumber, maxRandomNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(gameInstructionEven, genRound);
