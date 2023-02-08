//Завдання 1
const USER_NAME = prompt('Введіть Ваше імя:');
if (USER_NAME.length == 0){
    alert('Ви не вказали імя');
    window.location.reload()
} else {
    alert(`Привіт, ${USER_NAME}!`);
}


// Завдання 2
const YEAR = new Date().getFullYear();
const USER_AGE = prompt('Введіть свій рік народження:');
if (USER_AGE < 0 ){
    alert('Ви ввели невірне значення');
    window.location.reload()
} else if (USER_AGE.length == 0){
    alert('Ви не вказали свій рік народження!');
    window.location.reload()
} else {
    alert (`Ваш вік: ${YEAR - USER_AGE}`);
}



// Завдання 3
let sideOfSquare = prompt("Введіть сторону квадрата:");
alert(`Периметр квадрата = ${sideOfSquare*4} см.`);

// Завдання 4
let circleRadius = prompt("Введіть радіус кола:");
alert(`Площа квадрата = ${circleRadius * circleRadius * Math.PI}`);


// Завдання 5
let distance = prompt('Введіть відстань у кілометрах між двома містами');
let hour = prompt('Введіть час в годинах за який хочете добратися');
alert(`Ваша швидкість, з якою потрібно рухатися, щоб встигнути вчасно = ${(distance / hour).toFixed(2)} км/год.`)


// Завдаеея 6
const dollar = 40.1;
const euro = 42.4;

let valuta = prompt("Введіть суму в доларах");
alert (`Ваша сума в євро: ${(valuta * dollar / euro).toFixed(2)} євро`);

// Завдання 7
const size = 820;
const sizeNext = 1024;
const userSize = prompt('Вкажіть обсяг флешки у ГБ.');
alert(`Кількість файлів розміром 820 Мб які вмістяться на вашу флешку становить: ${Math.floor(userSize * sizeNext)}`);

// Завдання 8
let sumMoney = prompt('Введіть суму грошей (грн) в гаманці');
let costOfChocolade = prompt('Введіть ціну однієї шоколадки');
let numChocolate = Math.floor(sumMoney / costOfChocolade);
alert(`Кількість шоколадок, яку ви можете купити за ваші гроші: ${numChocolate} шт.
Ваша решта: ${sumMoney - (numChocolate * costOfChocolade)} грн.`);


// Завдання 9
let numbers = prompt('Введіть будь яке тризначне число');
a = '';
for (let i = 1; i >= 0; i--) {
    a += "" + numbers [i];
}
alert(`З вашого числа вийшло таке число паліндром: ${numbers + "" + a}`);

// Завдання 10
let number = prompt('Введіть будь яке ціле число')
if (number % 2 == 0) {
    alert(`Число парне!`)
} else if (number % 2 !=0) {
    alert(`Число не парне!`)
}