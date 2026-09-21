
/*в Базе есть описание memoizer JS */

const sqr = (num) => {
    console.log('call')
    return num * num
}

const memSqr = memoizer(sqr)

console.log(memSqr(5))
console.log(memSqr(5))
console.log(memSqr(7))
console.log(memSqr(5))
console.log(memSqr(7))

function memoizer  (func) {
    const cacheMemory = {}

    const wrapper = (num) => {
        if(num in cacheMemory){
           return cacheMemory[num]
        } else {
            console.log('call multiply')
            const result = func(num)
            cacheMemory[num] =  result
            return result
        }
    }
    return wrapper
}

