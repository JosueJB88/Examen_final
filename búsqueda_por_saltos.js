function jumpSearch(array, target) {
    const n = array.length;
    const jumpSize = Math.floor(Math.sqrt(n));
    let left = 0;
    let right = jumpSize;
  
    while (right < n && array[right] < target) {
      left = right;
      right += jumpSize;
    }
  
    for (let i = left; i <= Math.min(right, n - 1); i++) {
      if (array[i] === target) {
        return i;
      }
    }
  
    return -1;
  }
  
  // Ejemplo de uso
  const numbers = [122, 885, 8, 10282, 12825, 20828];
  const target = 12825;
  
  const index = jumpSearch(numbers, target);
  if (index !== -1) {
    console.log(`El elemento ${target} se encuentra en el índice ${index}`);
  } else {
    console.log(`El elemento ${target} no se encuentra en el arreglo`);
  }
  