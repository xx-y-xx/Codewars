/*
🟢🔴🟢
Первая: Напишите функцию `delay(ms)`, которая возвращает промис, переходящий в состояние `resolved` через `ms` миллисекунд. Пример использования:

delay(1000).then(() => console.log('Hello!'))
 */

/* 🟢🔴🟢Решение
delay(1000).then(() => console.log('Hello!'))

const delay = time =>  {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res()
            }, time)
        })
    }
 */

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        // res("reject1");
        rej("reject1");
    }, 1000);
});


promise1
    .catch((t) => t + "catch1") // ответ : reject1 catch1
    .catch((t) => t + "catch2")// ответ : мы пропускаем catch так как получили fulfilled
    .then((t) => t + "then1")// ответ: reject1 catch1 then1
    .finally((t) => t + "finally")// ответ: finally не меняет значение успешного результата, если его callback успешно завершился.
    .then((t) => console.log(t)); /// ответ: reject1 catch1 then1
