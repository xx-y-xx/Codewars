/* Создайте функцию боя, которая принимает текущее здоровье игрока и количество полученного урона, и возвращает новое здоровье игрока. Здоровье не может быть меньше 0 */
/*
function combat(health, damage) {    
    while ((health -= damage) > 0) {
        return health;
    }
    if (health <= 0 ) {
        return 0;
    }  
  }
  console.log(combat(100,95));
*/
  function combat(health, damage) {
    return (health -= damage) > 0 ? health : 0;
}