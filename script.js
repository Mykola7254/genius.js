// 1
// let name = 'Іван';
// let city = 'Kyiv';
// city = name;
// console.log(city);

// 2
// let name = "Olga";
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт "name"
// console.log(`привіт ${name}`); // error

// 3
// let a = '5';
// let b = '13cvb';
// let c = '12.9sxdcfgv';
// // вивести в консоль тип
// // console.log(typeof Number(a));
// // console.log(typeof parseInt(b));
// // console.log(typeof parseFloat(c));

// 4
// console.log((10 * 0.1 + 10 * 0.2) / 10);

//5
// Math.max(20, 10, 50, 40);
// console.log(Math.max(20, 10, 50, 40));

//6
// console.log(Math.random() * (4 - 2) + 2);

//7
// const message = 'Welcome to Bahamas!';
// console.log(message.length);

// 8
// const message = 'Welcome to Bahamas!';
// console.log(message.toUpperCase());

//9
let obj = {};
obj.name = 'Ivan';
obj.age = 34;
obj.city = 'Kyiv';
console.log(obj);
delete obj.city;
console.log(obj);
obj['like flowers'] = true;
// console.log(obj);

// 10
for (key in obj) {
  console.log(key);
  console.log(obj[key]);
}
