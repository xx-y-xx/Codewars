/*
Вот и конец учебного года, роковой момент вашего школьного отчета. Необходимо подсчитать средние баллы. Все ученики приходят к вам и просят вычислить для них средний балл. Легко! Нужно просто написать скрипт.

Возвращает среднее значение заданного массива, округленное до ближайшего целого числа.

Массив никогда не будет пустым.
 */
const marks = [1,2,3,4,5,];

function getAverage(marks){
    let SumMarks = 0;
    for(let i = 0 ; i < marks.length; i++) {
        SumMarks += marks[i];
        console.log(`сумма элемента  ${SumMarks}`);
    }
    return Math.floor(SumMarks/marks.length);
  }

  console.log(`среднее значение ${getAverage(marks)}`);