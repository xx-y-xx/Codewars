/*
Задав массив целых чисел в виде строк и цифр, верните сумму значений массива, как если бы все они были числами.
Верните ответ в виде числа.

function sumMix(x){

}
 */

const x = [1, 2, 3, 1273];

function sumMix(array){   
    let sumArray = 0;
    for (let i = 0; i < array.length; i++) {        
        sumArray += parseInt(array[i]);
    }
    return sumArray;
}

console.log(sumMix(x));