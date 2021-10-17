//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const randomInteger = (min, max) => {
  if( min <= 0) {
    return 'Неверный диапазон чисел';
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

console.log(randomInteger(1, 5) );

//Ошибка в const, правда? У него должно быть значение которое не будет меняться
// C const вроде разобралась^^
// Сейчас разбераюсь с if
//Нужно ли писать else?

// Вроде все норм сейчас :)

const getRandomInt = (min, max) => {
  if (min <= 0) {
    return 'Неверный диапазон чисел';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomInt (1, 6));


const getRandomNumber = (min, max) => {
  if (min <= 0) {
    return 'Неверный диапазон чисел';
  }
  return Math.random() * (max - min) + min;
};

console.log(getRandomNumber (1, 50));

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomArbitrary = (min, max) => {
  if (min < 0) {
    return 'Неверный диапазон чисел';
  }
  return (Math.random() * (max - min) + min).toFixed(1);
};

console.log(getRandomArbitrary (1, 50));
