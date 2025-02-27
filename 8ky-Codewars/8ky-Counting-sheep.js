/*🔹 Подсчёт овец
Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает «присутствует»).
Пример
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  Правильный ответ - 17.
  Подсказка: не забудьте проверить на наличие плохих значений, таких как null/undefined

 🔹 function countSheeps(sheep) {
  // TODO
}
*/
const sheep = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]

const resultSheep = sheep.filter((trueSheep) => trueSheep === true)
console.log(resultSheep)
console.log(resultSheep.length)

function countSheeps(sheep) {
  const resultSheep = sheep.filter((trueSheep) => trueSheep === true)
  return resultSheep.length
}
/*🔹 Лучшее решение
 function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
 */