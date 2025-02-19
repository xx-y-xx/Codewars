/*
Ваша задача - добавить новое свойство usersAnswer к каждому объекту в массиве questions. Значение usersAnswer должно быть установлено в null. Решение должно работать для массива любой длины.
🔸
Пример:
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

После добавления свойства результат должен быть таким:👇

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];

Массив «questions» уже определен для вас и не похож на тот, что в примере.
*/
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
}];

questions.forEach(function(questions) {
    questions.usersAnswer = null;
    console.log(questions);
});

/* 🚀 Ещё решение черех цикл for
 for (i=0; i<questions.length; i++) {
questions[i].usersAnswer = null;
};
 */