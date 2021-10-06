//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
alert( randomInteger(1, 3) );
