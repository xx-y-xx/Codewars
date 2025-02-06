/*В этой игре герой движется слева направо. Игрок бросает кости и дважды перемещается на количество клеток, указанное на костях.

Создайте функцию для терминальной игры, которая принимает текущую позицию героя и бросок (1-6) и возвращает новую позицию

    Test.assertEquals(move(0, 4), 8);
    Test.assertEquals(move(3, 6), 15);
    Test.assertEquals(move(2, 5), 12);

*/
let position;
let roll;

function move (position, roll) {
       return position + (roll*2)
    // return the new position
  }

  console.log(move(0, 4));
