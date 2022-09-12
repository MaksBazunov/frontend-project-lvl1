import getRandomNum from '../common.js';
import playGame from '../index.js';

const gameInstructionProgression = 'What number is missing in the progression?';

const maxStart = 100;
const maxStep = 10;
const progressionLength = getRandomNum(5, 10);

const genProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};
const genRound = () => {
  const progressionStart = getRandomNum(1, maxStart);
  const progressionStep = getRandomNum(1, maxStep);
  const progression = genProgression(progressionStart, progressionStep, progressionLength);
  const randomPosition = progression.length - (getRandomNum(1, progression.length - 1));
  const missingValue = progression[randomPosition];
  progression[randomPosition] = '..';

  const answer = String(missingValue);
  const question = `${progression.join(' ')}`;
  return [question, answer];
};

export default () => playGame(gameInstructionProgression, genRound);
