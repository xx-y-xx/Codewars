/* Ваша задача - написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.
Все свойства входных объектов будут иметь только числовые значения. Объекты объединяются таким образом, что значения совпадающих ключей складываются.
Пример:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

function combine() {
  // Your code here
}
*/
/*
🔹function combine(obj) {
    const resultObj = {};        

}
*/
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
function combine(...obj) {
    return obj.reduce((acc, currentObject) => {        
        for (let prop in currentObject) {
            prop in acc ? acc[prop] += currentObject[prop] : acc[prop] = currentObject[prop]
        }
        return acc;},{});
        // return resultСombine;
}
console.log(combine(objA, objB));
