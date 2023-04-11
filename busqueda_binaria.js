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
  
  // Generar vector de 50 números aleatorios del 1 al 500
  const numbers = Array.from({length: 80}, () => Math.floor(Math.random() * 100) + 1);
  
  // Generar número aleatorio del 1 al 500
  const target = Math.floor(Math.random() * 100) + 1;
  
  // Ordenar el vector para poder utilizar la búsqueda binaria
  numbers.sort((a, b) => a - b);
  
  // Buscar el número en el vector
  const index = binarySearch(numbers, target);
  
  // Mostrar resultado
  if (index !== -1) {
    console.log(`El número ${target} se encuentra en la posición ${index} del vector.`);
  } else {
    console.log(`El número ${target} no fue encontrado. Intenta nuevamente.`);
  }
  