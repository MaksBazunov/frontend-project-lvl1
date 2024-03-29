import getRandomNum from '../common.js';
import playGame from '../index.js';

const gameInstructionCalc = 'What is the result of the expression?';
const minRandomNumber = 1;
const maxRandomNumber = 10;

const getRandomOperator = (operators) => operators[getRandomNum(0, operators.length - 1)];

const calculate = (num1, num2, symbol) => {
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default: throw new Error('Sorry! This operation is not available.');
  }
};

const genRound = () => {
  const num1 = getRandomNum(minRandomNumber, maxRandomNumber);
  const num2 = getRandomNum(minRandomNumber, maxRandomNumber);
  const randomOperator = getRandomOperator(['+', '-', '*']);
  const answer = String(calculate(num1, num2, randomOperator));
  const question = `${num1} ${randomOperator} ${num2}`;
  return [question, answer];
};

export default () => playGame(gameInstructionCalc, genRound);
