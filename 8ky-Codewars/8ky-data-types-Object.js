/* Моё решение
const obj = { name: "cock", legs: 2, color: "red"};

function animal(obj){    
    return ('This ' + obj.color + ' ' + obj.name + ' ' + 'has ' + obj.legs + ' legs.');
  }
  console.log(animal(obj));
*/  

  function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }