// // 1
// const test = -2;
// if (test > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 2
// let test = 'test';
// if (test === 'test') {
//   console.log(true);
// }

// let test = 'qwerty';
// if (test === 'test') {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let test = 'true';
// if (test === 'test') {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 3
// let num = 10;
// if (num > 10) {
//   console.log((num = num - 5));
// } else if (num < 10) {
//   console.log((num = num + 5));
// }

// let num = 1;
// if (num > 10) {
//   console.log((num = num - 5));
// } else if (num < 10) {
//   console.log((num = num + 5));
// }

// let num = 13;
// if (num > 10) {
//   console.log((num = num - 5));
// } else if (num < 10) {
//   console.log((num = num + 5));
// }

// 4
// const value = Number(prompt('Введіть число від 1 до 12'));
// let month;
// switch (value) {
//   case 1:
//     month = 'Січень';
//     break;
//   case 2:
//     month = 'Лютий';
//     break;
//   case 3:
//     month = 'Березень';
//     break;
//   case 4:
//     month = 'Квітень';
//     break;
//   case 5:
//     month = 'Травень';
//     break;
//   case 6:
//     month = 'Червень';
//     break;
//   case 7:
//     month = 'Липень';
//     break;
//   case 8:
//     month = 'Серпень';
//     break;
//   case 9:
//     month = 'Вересень';
//     break;
//   case 10:
//     month = 'Жовтень';
//     break;
//   case 11:
//     month = 'Листопад';
//     break;
//   case 12:
//     month = 'Грудень';
//     break;

//   default:
//     month = 'Некоректне число! Введіть від 1 до 12.';
// }
// alert(month);

// 5
// const value = Number(prompt('Введіть тризначне число:'));

// if (value >= 100 && value <= 999) {
//   const a = Math.floor(value / 100); // сотні
//   const b = Math.floor((value % 100) / 10); // десятки
//   const c = value % 10; // одиниці

//   const sum = a + b + c;

//   alert('Сума цифр: ' + sum);
// } else {
//   alert('Помилка! Введіть тризначне число.');
// }
