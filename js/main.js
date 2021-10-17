const getRandomInt = (min, max) => {
  if (min < 0 || min > max) {
    return 'Неверный диапазон чисел';
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// eslint-disable-next-line no-console
console.log(getRandomInt (1, 6));


const getRandomArbitrary = (min, max, digits) => {
  if (min < 0 || min > max) {
    return 'Неверный диапазон чисел';
  }

  return (Math.random() * (max - min) + min).toFixed(digits);
};

// eslint-disable-next-line no-console
console.log(getRandomArbitrary (1, 50));
