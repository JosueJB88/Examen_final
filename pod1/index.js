const express = require('express');
const app = express();


function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i; // Retorna el índice del elemento si lo encuentra
      }
    }
    return -1; // Retorna -1 si no lo encuentra
  }
  
  


 ////---------------------------------------------------------------------
 
 

 function jumpSearch(array, tar) {
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
  
  




  app.get('/', (req, res) => {
    const numb = [122, 885, 8, 10282, 12825, 20828];

    res.json({
     array: numb,
     item: 20828,
     linear: linearSearch (numb, 20828),
     jump: jumpSearch (numb, 20828)
    });
  // res.send('¡Hola, mundo!');
  }); 

  
  app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });
  
  