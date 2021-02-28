function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        let arreglo = [...arr]
        newArr.push(arreglo)
        num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));