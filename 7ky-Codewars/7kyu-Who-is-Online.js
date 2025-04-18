/*
 Задание
У вас есть приложение для группового чата, но кто в нем онлайн?

Вы хотите показать пользователям, кто из их друзей находится в сети и доступен для общения!

Получив на вход массив объектов, содержащий имена пользователей, статус и время с момента последней активности (в минутах), создайте функцию, которая будет определять, кто находится online, offline или away.

Если кто-то находится в online сети, но его lastActivity была совершена более 10 минут назад, он будет считаться away.

Входные данные имеют следующую структуру:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
Соответствующий вывод должен выглядеть следующим образом:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
Если, например, ни один пользователь не находится  online, вывод должен выглядеть следующим образом:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username всегда будет string, status всегда будет либо online, либо offline (перечисление UserStatus в C#), а lastActivity всегда будет числом >= 0.

Наконец, если в вашем чат-приложении нет друзей, на вход будет подан пустой массив []. В этом случае вы должны вернуть пустой объект {} (пустой словарь в C#).

🔹const whosOnline = (friends) => {
// Your code here...
}
 */


friends = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}]

const whosOnline = (friends) => {
    resultFriends = {};
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].status === 'online' && friends[i].lastActivity > 10) {
            if (!resultFriends.away) {
                resultFriends.away = [];
            }
            resultFriends.away.push(friends[i].username);
        } else if (friends[i].status === 'online' && friends[i].lastActivity <= 10) {
            if (!resultFriends.online) {
                resultFriends.online = [];
            }
            resultFriends.online.push(friends[i].username);

        } else if (friends[i].status === 'offline') {
            if (!resultFriends.offline) {
                resultFriends.offline = [];
            }
            resultFriends.offline.push(friends[i].username);
        }
    }
    return resultFriends;
}

whosOnline(friends)

// console.log(friends[i].username + ' → away');
// console.log(friends[i].username + ' → online');
// console.log(friends[i].username + ' → offline');