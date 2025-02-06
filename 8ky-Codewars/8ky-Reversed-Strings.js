/*
Завершите решение так, чтобы оно изменило направление переданной в него строки.
 */
console.log(solution('world'));

function solution(str){
    let resultStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    resultStr += str[i];
    console.log(`текущий элемент ${resultStr}`);
  }
  return resultStr;
}