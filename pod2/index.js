const express = require('express');
const app = express();

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === target) {
        return mid; // Retorna el índice del elemento si lo encuentra
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; // Retorna -1 si no lo encuentra
  }
  
  
  

///--------------------------------------------------------------------------------------

  function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
  
  function linearSearch(array, target) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  }
  


  app.get('/', (req, res) => {
    const numb = [12, 85, 8, 82, 25, 208];

    res.json({
     array: numb,
     item: 25,
     binary: binarySearch (numb, 25),
     bubble: bubbleSort (numb),
     linear: linearSearch (numb, 25),
     
    });
  // res.send('¡Hola, mundo!');
  }); 

  app.listen(4000, () => {
    console.log('Servidor escuchando en el puerto 4000');
  });
  