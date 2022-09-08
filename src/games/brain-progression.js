import getRandomNum from '../common.js';
import playGame from '../index.js';

const directiveProgress = 'What number is missing in the progression?';

const genRound = () => {
const randStart = getRandomNum(1,40);
const randEnd = getRandomNum(60,100);
const randStep = getRandomNum(2,6);
let seriesNumArr = [];

for(let i = randStart; i <= randEnd; i+=1){
 seriesNumArr.push(i)
 i=i+randStep;
if(seriesNumArr.length>14){
    break
}
};
let randomSeriesNum = seriesNumArr.length-(getRandomNum(1,seriesNumArr.length-1))
const NumStr = seriesNumArr[randomSeriesNum];

const items = seriesNumArr;
const i = randomSeriesNum
items[i] = ".."

    const answer = String(NumStr);
    const question = `${items.join()}`;
    return [question, answer];
  };

  export default () => playGame(directiveProgress, genRound);