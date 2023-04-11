function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // Retorna el índice del elemento si lo encuentra
    }
  }
  return -1; // Retorna -1 si no lo encuentra
}

// Ejemplo de uso
const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 12;

const index = linearSearch(numbers, target);
if (index !== -1) {
  console.log(`El elemento ${target} se encuentra en el índice ${index}`);
} else {
  console.log(`El elemento ${target} no se encuentra en el arreglo`);
}
