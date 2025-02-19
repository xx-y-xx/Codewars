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
/*const objA = { a: 10, b: 20, c: 30 }
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
*/
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
function combine(...inputObjects) {
    console.log('Input objects:');
    console.log(...inputObjects);
    console.log();
const outputObject = {};
    console.log('Create output object:');
    console.log(outputObject);
    console.log();
    console.log('Determine the quantity of input objects: ' + inputObjects.length);
    console.log();
    console.log('Loop through the properties of incoming objects using loops for and for in');
    console.log();
for (let i = 0; i < inputObjects.length; i++) {
    console.log('Cycle № ' + i + '(Input object № ' + i + '):');   
    console.log('Properties of input object № ' + i + ':');
for (let key in inputObjects[i]) {
    console.log();
    console.log(key);
    console.log();
    console.log('Check if there is a property with the same name in the outgoing object');
    console.log();
    console.log('Property ' + key + ' in the outgoing object is: ' + outputObject[key]);  
if (outputObject[key]) {
    console.log('Property ' + key + ' exists in output object (' + outputObject[key] +')');
    console.log('so sum its value with the value of the same property of the incoming object:');
    console.log('outputObject[key] = outputObject[key] + inputObjects[i][key]');
outputObject[key] = outputObject[key] + inputObjects[i][key];
    console.log();
    console.log('Outgoing object now looks like this:');
    console.log(outputObject);
} else {
    console.log('then we add a property with this name to the outgoing object and assign it a value from the incoming object:')
    console.log('outputObject[key] = inputObjects[i][key]')
outputObject[key] = inputObjects[i][key];
    console.log(); 
    console.log('Outgoing object now looks like this:');
    console.log(outputObject);
    console.log();
}
}
}
    console.log();
    console.log('Output object:');
    console.log(outputObject);
return outputObject;
};

console.log(combine(objA,objA));