/*
Вам будет дана непустая строка. Ваша задача - вернуть средний символ (символы) строки.

Если длина строки нечетная, верните средний символ.
Если длина строки четная, верните 2 средних символа.

Пример:
 "test"--> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
🔹 function getMiddle(s) {
  //Code goes here!
    return '';
}
 */


function getMiddle(s) {
  let result;
  if (s.length % 2) {
    // НЕчётная длина → один символ в середине
    let middle = Math.floor(s.length / 2);
    result = s.slice(middle, middle + 1);
  } else {
    // Чётная длина → два символа вокруг середины
    result = s.slice((s.length / 2) - 1, (s.length / 2) + 1);
  }
  return result;
}
console.log(getMiddle("testing"))
console.log(getMiddle("test"))

// const s = "middle"
// console.log(s.slice((s.length / 2) - 1), ((s.length / 2) - 1) + 1)
// console.log(s.slice((s.length / 2) - 1, ((s.length / 2) - 1) + 2))

