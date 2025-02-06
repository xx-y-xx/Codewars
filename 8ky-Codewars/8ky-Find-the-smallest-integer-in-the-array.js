/*
В заданном массиве целых чисел ваше решение должно найти наименьшее целое число.

Например:
При задании [34, 15, 88, 2] ваше решение вернет 2
При задании [34, -345, -1, 100] ваше решение вернет -345
Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.
 */
// function findSmallestInt(arr) {
//     //your code here
//     return 0;
//   }
const arr = [78, 56, 232, 412, 228,-12];

function findSmallestInt(arr) {    
    let SmallNumber = arr[0];

    for (let i = 0; i < arr.length; i++) {        
            if (arr[i] <= SmallNumber) {
                SmallNumber = arr[i];
        }        
    }
    return SmallNumber;
  }
