/*
Напишите функцию, которая добавляет именованное свойство к объекту. Должна быть возможность установить свойству новое значение. Если свойство уже существует в объекте, должна быть выдана ошибка.

🔹function addProperty(obj, prop, value) {
  // Add your code here
} 

*/
function addProperty(obj, prop, value) {        
    if (prop in obj) {
        throw new Error (`Свойство "${prop}" уже существует в объекте`)
    }
    obj[prop] = value;
  }
  
  const obj = {};
  /*
  addProperty(obj, 'ttt', 10)

  console.log(obj)*/