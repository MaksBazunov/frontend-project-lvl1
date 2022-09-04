import getRandomNum from '../common.js';
import playGame from '../index.js';

const directiveGcd = 'Find the greatest common divisor of given numbers.';
const minRandomNumber = 1;
const maxRandomNumber = 100;

const maxDivider= (num1, num2)=> {
    if ( !num2 ) {
        return num1;
    }

    return maxDivider (num2, num1 % num2);
};

const genRound = () => {
    const num1 = getRandomNum(minRandomNumber,maxRandomNumber);
    const num2 = getRandomNum(minRandomNumber,maxRandomNumber);
    const answer = String(maxDivider(num1,num2));
    const question = `${num1} ${num2}` ;
    
    return [question, answer];
  };

  export default () => playGame( directiveGcd, genRound);
  