/* Ваша задача - написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.
Все свойства входных объектов будут иметь только числовые значения. Объекты объединяются таким образом, что значения совпадающих ключей складываются.
Пример:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

🔹function combine() {
  // Your code here
}
*/
const obj = {};
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
// const resultObj = {};
function combine(obj) {
    const resultObj = {};
    for (key in obj) {
        if (key === resultObj.hasOwnProperty('key')) {
            console.log(key)
        }        
    }
}


// for (key in objA){
//     console.log(objA[key])
//     console.log(key)
// }

console.log(combine(objA))
console.log(combine(objB))