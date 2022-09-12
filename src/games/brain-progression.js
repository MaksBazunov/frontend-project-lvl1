import getRandomNum from '../common.js';
import playGame from '../index.js';

const gameInstructionProgression = 'What number is missing in the progression?';

const maxStart = 100;
const maxStep = 10;
const minLength = 5;
const maxLength = 10;

const genProgression = () => {
  const start = getRandomNum(1, maxStart);
  const step = getRandomNum(1, maxStep);
  const length = getRandomNum(minLength, maxLength);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};
const genRound = () => {
  const progression = genProgression();
  const randomPosition = progression.length - (getRandomNum(1, progression.length - 1));
  const missingValue = progression[randomPosition];

  const newProgression = progression;
  const i = randomPosition
  newProgression[i] = '..';

  const answer = String(missingValue);
  const question = `${newProgression.join(' ')}`;
  return [question, answer];
};

export default () => playGame(gameInstructionProgression, genRound);
