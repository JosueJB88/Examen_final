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
  
  // Generar vector de 130 números aleatorios del 1 al 200
  const numbers = Array.from({length: 130}, () => Math.floor(Math.random() * 200) + 1);
  
  // Generar número aleatorio del 1 al 200
  const target = Math.floor(Math.random() * 200) + 1;
  
  // Ordenar el vector utilizando el método de la burbuja
  bubbleSort(numbers);
  
  // Buscar el número en el vector utilizando la búsqueda lineal
  const index = linearSearch(numbers, target);
  
  // Mostrar resultado
  if (index !== -1) {
    console.log(`El número ${target} se encuentra en la posición ${index} del vector.`);
  } else {
    console.log(`El número ${target} no fue encontrado. Intenta nuevamente.`);
  }
  