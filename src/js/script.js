// -----Завдання_1-----
const USER_NAME = prompt('Введіть Ваше імя:');
if (USER_NAME.length == 0){
    alert('Ви не вказали імя');
    window.location.reload()
} else {
    alert(`Привіт, ${USER_NAME}!`);
}


// -----Завдання_2-----
// const YEAR = new Date().getFullYear();
// const USER_AGE = Number(prompt('Введіть свій рік народження:'));
// if (USER_AGE < 0 ){
//     alert('Ви ввели невірне значення');
//     window.location.reload()
// } else if (){
//     alert(`Ваш вік: ${YEAR - USER_AGE}`);
// }