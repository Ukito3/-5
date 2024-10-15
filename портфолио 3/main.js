let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const value = this.value;

    if (value === 'C') {
      display.value = ''; // Очистить дисплей
    } else if (value === '=') {
      try {
        display.value = eval(display.value); // Вычислить выражение
      } catch (error) {
        display.value = 'Error'; // Обработка ошибок
      }
    } else {
      display.value += value; // Добавить значение к выражению
    }
  });
});
