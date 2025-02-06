const arr2 = [4, 6, 7];
const arr1 = [1, 2, 3];

function arrayPlusArray(arr1, arr2) {
    // const arr2 = [];
    // const arr1 = [];
    let sumArray = 0;

    for (let i = 0; i < arr1.length; i++){
        arr2.push(arr1[i])
        // console.log(arr2);
    }
    for (let k = 0; k < arr2.length; k++){
        sumArray += arr2[k];
    }
    return sumArray; //something went wrong
  }

  console.log(arrayPlusArray(arr1, arr2));