
// ---------завдання 1----------
const USER_AGE = Number(prompt('Введіть будь ласка Ваш вік:'));
if (USER_AGE > 0 && USER_AGE < 12) {
    alert('Ви є дитиною!');
} else if (USER_AGE >= 12 && USER_AGE < 18) {
    alert('Ви є підлітком');
} else if (USER_AGE >=18 && USER_AGE < 60) {
    alert('Ви є дорослим');
} else if (USER_AGE >= 60) {
    alert('Ви є пенсіонером');
} else {
    alert('Ви ввели невірні дані');
    window.location.reload();
}


// ---------завдання 2----------
const USER_NUMBER = Number(prompt('Введіть чило число від 0 до 9:'));
if (USER_NUMBER == 0 || USER_NUMBER <=0 || USER_NUMBER >= 10){
    alert('Спробуй ще раз');
    window.location.reload();
} else if (USER_NUMBER == 1) {
    alert('!');
} else if (USER_NUMBER == 2) {
    alert('@');
} else if (USER_NUMBER == 3) {
    alert('#');
} else if (USER_NUMBER == 4) {
    alert('$');
} else if (USER_NUMBER == 5) {
    alert('%');
} else if (USER_NUMBER == 6) {
    alert ('^');
} else if (USER_NUMBER == 7) {
    alert ('&');
} else if (USER_NUMBER == 8) {
    alert ('*');
} else if (USER_NUMBER == 9) {
    alert('(');
} else {
    ('Ви ввели невірні дані!');
    window.location.reload();
}


// ---------завдання 3----------
const THREE_NUMBER = prompt('Введіть тризначне число:');
if (THREE_NUMBER.length == 3) {
    if (
        String(THREE_NUMBER)[0] == String(THREE_NUMBER)[1] ||
        String(THREE_NUMBER)[1] == String(THREE_NUMBER)[2] ||
        String(THREE_NUMBER)[2] == String(THREE_NUMBER)[0]
    ) {
        alert('В числі є однакові цифри');
    } else {
        alert('В числі немає однакових цифр!');
    }
} else {
    alert('Ви ввели не вірні дані!');
    window.location.reload();
}


// ---------завдання 4----------
const IMAGINARY_NUMBER = Number(prompt('Введіть рік:'));
if (String(IMAGINARY_NUMBER).length <= 5 && IMAGINARY_NUMBER !=0) {
    if (IMAGINARY_NUMBER % 4 == 0 || IMAGINARY_NUMBER % 400 == 0 && IMAGINARY_NUMBER % 100 == 0
    ) {
        alert(`${IMAGINARY_NUMBER} рік високосний!`);
    } else {
        alert(`${IMAGINARY_NUMBER} рік не є високосним!`);
    }
}  else {
        alert('Ви ввели не вірні дані!');
        window.location.reload();
}


// ---------завдання 5----------
const FIVE_NUMBER = Number(prompt('Введіть пятизначне число:'));
const LAST_INDEX = String(FIVE_NUMBER).length - 1;
for (let i = 0; i < String(FIVE_NUMBER).length / 2; i++) {
    if (String(FIVE_NUMBER).length == 5) {
      if (String(FIVE_NUMBER)[i] == String(FIVE_NUMBER)[LAST_INDEX - i]) {
        alert(`Число ${FIVE_NUMBER} є паліндромом!`);
        break;
      } else {
        alert(`Число ${FIVE_NUMBER} не є паліндромом!`);
        break;
      }
    } else {
      alert("Ви ввели не вірні дані!");
      window.location.reload();
      break;
    }
  }

// ---------завдання 6----------
const SUM_OF_DOLLARS = Number(prompt('Введіть суму в доларах'));
const CONV_DOLLARS_EUR = 0.92;
const CONV_DOLLARS_UAN = 36.9;
const CONV_DOLLARS_AZN = 1.7;
let sumOfEUR = SUM_OF_DOLLARS * CONV_DOLLARS_EUR;
let sumOfUAH = SUM_OF_DOLLARS * CONV_DOLLARS_UAN;
let sumOfAZN = SUM_OF_DOLLARS * CONV_DOLLARS_AZN;
if (SUM_OF_DOLLARS > 0) {
    const CURRENCY_NEED = prompt(
        'Оберіть будьласка валюту, в яку бажаєте обміняти долари (USD). Для цього впишіть: EUR або UAH або AZN'
    );
    if (CURRENCY_NEED == 'EUR') {
        alert(`Ви отримаєте: ${sumOfEUR.toFixed(2)} євро`);
    } else if (CURRENCY_NEED == "UAH") {
        alert(`Ви отримаєте: ${sumOfUAH.toFixed(2)} гривень`);
    } else if(CURRENCY_NEED == "AZN") {
        alert(`Ви отримаєте: ${sumOfUAH.toFixed(2)} манатів`);
    } else{
        alert('На таку валюту обмін тим часово недоступний');
        window.location.reload();
    }
} else {
    alert('У вас не достатньо коштів');
    window.location.reload();
}


// ---------завдання 7----------
const PURCHASE_PRICE = Number(prompt('Введіть суму покупки (UAH):'));
let discount3 = PURCHASE_PRICE - PURCHASE_PRICE * 0.03;
let discount5 = PURCHASE_PRICE - PURCHASE_PRICE * 0.05;
let discount7 = PURCHASE_PRICE - PURCHASE_PRICE * 0.07;
if  (PURCHASE_PRICE > 0) {
    if ( PURCHASE_PRICE >= 200 && PURCHASE_PRICE < 300) {
        alert(`Ваша знижка складає 3%. Сума до оплати ${discount3.toFixed(2)} грн.`);
    } else if (PURCHASE_PRICE <= 0){
        alert('Ви ввели невірне значення!');
    window.location.reload();
    } else if (PURCHASE_PRICE >= 300 && PURCHASE_PRICE < 500){
        alert(`Ваша знижка складає 5%. Сума до оплати ${discount5.toFixed(2)} грн.`);
    } else if (PURCHASE_PRICE >= 500) {
        alert(`Ваша знижка складає 7%. Сума до оплати ${discount5.toFixed(2)} грн.`)
    } else{
        alert(`У Вас немає знижки. Сума до cплати ${COST_OF_PURCHASE.toFixed(2)} грн.`);
    }
} else {
    alert('Ви ввели невірне значення!');
    window.location.reload();
}


// ---------завдання 8----------
const LENGTH_CICLE = Number(prompt(`Введіть довжину кола (см.):`));
const PERIMETER_SQUARE = Number(prompt(`Введіть периметр квадрата (см.):`));
let diameterOfSircle = LENGTH_CICLE / Math.PI;
let lengthSquareSide = PERIMETER_SQUARE / 4;
if (LENGTH_CICLE > 0 && PERIMETER_SQUARE > 0) {
  if (diameterOfSircle < lengthSquareSide) {
    alert(`Коло поміститься у квадрат.`);
  } else{
    alert(`Коло не поміститься у квадрат.`);
  }
} else {
  alert("Ви ввели не вірні дані!");
  window.location.reload;
}


// ---------завдання 9----------
let counter = 0;
let firstQuestionAnswer = prompt(
  'Впишіть цифру, яка позначає правильну відповідь у поле вводу та натисніть "OK". \n Що таке цикл в JavaScript? \n 1. Це головний “будівельний блок” програми. Він дозволяє робити однакові дії багато разів без повторення коду. \n 2. Це спосіб повторити один і той же код кілька разів. \n 3. Це редактор коду'
);
if (firstQuestionAnswer == 2) {
  alert("Ваша відповідь правильна");
  counter = counter + 5;
} else if (firstQuestionAnswer == 1 || firstQuestionAnswer == 3) {
  alert(`Ваша відповідь не правильна`);
} else {
  alert("Ви ввели не вірні дані!");
  window.location.reload();
}
let secondQuestionAnswer = prompt(
  'Впишіть цифру, яка позначає правильну відповідь у поле вводу та натисніть "OK". \n JavaScript - це мова розмітки гіпертексту? \n 1. так \n 2. майже \n 3. ні'
);
if (secondQuestionAnswer == 3) {
  alert("Ваша відповідь правильна");
  counter = counter + 5;
} else if (secondQuestionAnswer == 1 || secondQuestionAnswer == 2) {
  alert(`Ваша відповідь не правильна`);
} else {
  alert("Ви ввели не вірні дані!");
  window.location.reload();
}
let thirdQuestionAnswer = prompt(
  'Впишіть цифру, яка позначає правильну відповідь у поле вводу та натисніть "OK". \n Для чого було створено JavaScript? \n 1. Для стилізації веб-сторінки. \n 2. Щоб “оживити веб-сторінки”.\n 3. Для перегляду веб-сторінок у браузері.'
);
if (thirdQuestionAnswer == 2) {
  alert("Відповідь правильна");
  counter = counter + 5;
} else if (thirdQuestionAnswer == 1 || thirdQuestionAnswer == 3) {
  alert(`Відповідь не правильна`);
} else {
  alert("Ви ввели не вірні дані!");
  window.location.reload();
}
alert(`Вітаємо! Ваш рахунок ${counter} балів!`);


// ---------завдання 10----------
let userDate = new Date(
    prompt("Введіть дату (рік, місяць, день) в форматі РРРР-ММ-ДД")
  );
  let nextDate = new Date(userDate.getTime() + 24 * 3600 * 1000);
  const NEXT_DATE =
    nextDate.getFullYear() +
    "-" +
    (nextDate.getMonth() + 1) +
    "-" +
    nextDate.getDate();
  alert(NEXT_DATE);





















