"use strict";
// продолжаю укреплять базу JS
// переменные в JS

// console.log(165 * 734);
// console.log(165 * 734 *3);
// console.log((165 *734) / 5);
// тут тоже можно было использовать результат первого вычисления так то

// в переменную можно положить строчное, числовое, булиновое значение, или значение получнное в ходе вычисления.


//оптимизируем пример с помощью переменной
// let productNumbers  = 165 *734;
// console.log(productNumbers * 3);
// console.log(productNumbers / 5);

// let, var, const -- способы обьявления переменной
// let productNumbers1  = 165 *734;
// var productNumbers2  = 165 *734; // устарело -- плюс видна вне функций, плюс видна до ее определения.
// const productNumbers3  = 165 *734; // нельзя изменить (ну кроме как в обьетке)

//console.log(a); // вернет undefined -- всплытие
//var a = 1;

//console.log(a); // вернет reference error -- тк let видна только в поле видимости(например в функции -- {})
//let  a = 1;
//console.log(a); // вернет 1

//const a = 1; // у const должно быть значение
//a = 2; значение const изменять нельзя
//console.log(a);


// Преобразование к string
// нужно преобразовать переменную ageNumber в новую переменную типа String
//let ageNumber = 19;
//let ageString = ???;

//let ageNumber = 19;
//let ageString = ageNumber + ''; // старый способ
//let ageString = `${ageNumber}` // второй способ
//let ageString = String(ageNumber);

//let a = '1';
//let b = 2;
//let c = a + b; // получим 12. тк конкатенация - строки сложатся


// приведение строчного значения к числовому
//let ageString = '19';
//let ageNumber1 = Number(ageString); // --> явное преобразование типа
// Number попробует преобразовать переданный в нее аргумент agestring в строку
// если были пробелы, они обрежутся, если кроме цифр в строке будут символы то
// запишется значение NaN, если строка пустая то запишется 0
//let ageNumber2 = +ageString; // + спереди сделает значение числом
//let ageNumber3 = ageString / 1; // --> оператор деления заставляет переменные переходить к типу Number
//let ageNumber4 = ageString * 1; // --> оператор умножения заставляет переменные переходить к типу Number

// при вызове Number
// Number(undefined); // result Nan
// Number(null); // result 0
// Number(true); // result 1
// Number(false); // получим значение 0

// Преобразование к логическому типу Boolean

//Boolean(1); // true
//Boolean('строка'); // true
//Boolean(0); // false
//Boolean(null); // false
//Boolean(undefined); // false
//Boolean(NaN); // false
//Boolean(''); // false

// Операторы сравнения

// больше меньше a > b, a < b
// больше или равно , меньше или равно a >= b, b <= a
// равно a == b
// не равно a !=b !--> оператор отрицания
// a === b строгое равенство

//4 > 1; // true
//3 < 1; // false
//3 <= 4; // true - тк 3 меньше 4

// 'stroke' == 'stroke'; // true
// true == false; // false

// 'а' < 'я'; получим true тк 'я' идет после 'a'

//'09' == 9; // true т.к. '09' преобразуется в значение 9 типа Number
// '100' < 4; // false т.к. '100' преобразуется в значение 100 типа Number
// true == 0; // false т.к. true преобразуется в значение 1 типа Number
// false == 0; // true т.к. false преобразуется в значение 0 типаа Number

// 'строка' > 3; // NaN --> false

// когда сравниваем == то JS пытается привести сравниваемые значения к типу Number(числу)
// '' == false; // true
// 0 == false; // true
// 1 == true; // true

// при строгом сравнении === не происходит приведение типов

// 0 === ''; false
// 1 === true; false
// 1 === '1'; false
// '' === false --> false
// true === true; --> true
// 1 === 1; --> true


// Типы данных NUmber

//let a = 1; // integer
//let b = 1.5; // float

// NaN --> не число
//let a = 'Mike' * 20; // вернет NaN
// при делении на ноль будет infinite
// undefined не определено

// Тип данных --  СТрока

//let name  = 'John';
//console.log(`Hello, ${name}`);// в консоли выедет Hello, John
// ${...} --> где вместо ... можно подставить любую переменную или функцию и полученное значение вклеится в строку
// работает только с косыми кавычками

// Тип данных Boolean (true, false)

//let agreeeOrAccept = false; // значение по умолчанию
//agreeeOrAccept = true; // если например нажал в prompt да, или принял соглашение

// let age = 17;
// let allowAccess = age >= 18;
// console.log(allowAccess); // result false

// Тип данных null и undefined

//let agreeeOrAccept = null; // используется как пустышка - переменная куда можно потом положить значение
//let agreeeOrAccept; // вернет undefined

//let age; // так писать НЕ НАДО!!!
//let age = undefined; // так писать НЕ НАДО!!!
// let age = null; // так писать можно

// Типы данных. Оператор typeof
// typeof - поясняет тип переменной
//typeof 'оператор typeof'; // reuslt: string
//typeof 10500; // result: number
// typeof undefined; // result undefined
//typeof true // result bpplean
// typeof null; // result: object -- > это глюк JS

// Условные операторы If и ?

// let age = +prompt('Какой сейчас год?');
// if (age === 20) {
//     alert('Верно, сейчас 20 год');
//     alert('я буду выполнятся только если выполнится условие');
// } else {
//     alert('ответ неверный');
// }
//alert('я буду выполнятся вне зависимости от выполнения условий');
// выполнятся будет то, что написано внутри фигурных скобок условия {}
// else выполняется если не выполнилось условие if
/*let age = +prompt('Какой сейчас год?');
if (age === 20) {
    alert('Верно, сейчас 20 год');
} else if(age < 21){
    alert('меньше чем нужно');
} else if(age > 21 ) {
    alert('больше чем нужно');
} else {
    alert('вводите число правильно');
}*/

// Оператор ?

// нужно записать значение в переменную но это значение зависит от условий

/*let temperature = prompt('Сколько градусов зф бортом?', '');
let weather = null;
if (temperature >= 0){
    weather = 'больше 0';
} else {
    weather = 'меньше 0';
}
alert('Температура сегодня:' + weather);*/

// используя ?
/*let temperature = prompt('Сколько градусов зф бортом?', '');
let weather = (temperature >= 0) ? 'больше нуля': 'меньше нуля';
alert('Температура сегодня:' + weather);*/

/*let temperature = prompt('Сколько градусов зф бортом?', '');
let weather = (temperature > 0) ? 'больше нуля':
     (temperature == 0) ? 'равно 0':
     (temperature < 0) ? 'меньше нуля':
      'ты точно ввел только цифры?';
alert('Температура сегодня:' + weather);*/

// ДЗ
//1) Что выведется на экран если выполнить данный код?
/*let question = prompt('whats your name', '');
if(question == ''){
    alert('1');
}*/
// ничего не выведется т.к не задана переменная для выполнения условия
//2) используя if...else написать проверку на совершеннолетие
/*let age = prompt('Вам есть 18 лет? напишите сколько вам лет', '');
if (age >= 18){
    alert('Вам разрешено посещение сайта');
} else  if (age < 18) {
    alert('Вам запрещено посещение сайта');
}*/
//3) Переписать 2 пример тернарным оператором ?
/*let question = prompt('Вам есть 18 лет? напишите сколько вам лет', '');
let age = (question >= 18) ? 'Вам разрешено посещение сайта':
          (question < 18) ? 'Вам запрещено посещение сайта':
           'Введте правильно ваш возраст';
alert(age);*/
// вообще да тернарный оператор красивее

// Циклы While, for.

/*let i = 1;
while(i <= 3){
    alert(i);
    i++;
}*/

// цикл do while
/*let i = 1;
do{
    alert(i);
    i++;
}while(i <= 3);*/

// цикл for
/*for (let i = 1; i <= 3; i++){
    alert(i);
}*/

// ДЗ
//1) написать код, который выводит на экран с помощью while числа с 50 по 100
/*let i = 50;
while (i <= 100) {
    console.log(i);
    i++;
}*/
//2) написать код, который выводит с помощью do...while числа от 20 до 30
/*let i = 20;
 do{
    console.log(i);
    i++;
}while (i <= 30);*/
//3) написать код, который выводит с помощью цикла for числа от 200 до 250
/*for (let i = 200; i <= 250; i++) {
    console.log(i);
}*/

// Операторы

// 'a' + 'b' // result 'ab'
// '1' + '3' // result '13'

//let a = '45';
//let b = +a; // result 45 тк унарный плюс приведет строчное значение к числу

//console.log(+'1' + +'3'); //result 4

// бинарный плюс
// 1 + 4;

// инкремент

// let a = 3;
// a++;
// console.log(a); //result 4

// постфиксный инкремент
//let a = 5;
//console.log(a++);// result 5 Значение увеличивается ПОСЛЕ вызова инкремента а не в момент вызова
// префиксная форма
//let a = 5;
//console.log(++a); // result 6 меняет значение перед выводом в консоль

// Декремент (тоже постфикс и префиксный)
//let a = 3;
//a--;
//console.log(a); // result 2

// Возведение в степень
// 2 ** 3 // два в третей степени
// 3 ** 2 // три во второй степени

// остаток от деления

// 11 % 2; // result 1 --> 10/2 без остатка --> 11 - 10 = 1
// 8 % 3; // result 2 --> 6/3 --> 8 - 6 = 2

// ДЗ
//сложение с применением преобразования к числу
/*
console.log(+'4' + +'3'); //получим значение: 7

//декремент с постфиксной формой
let a = 8;
a++;
console.log(a); //получим значение: 9


//инкремент с постфиксной формой
let b = 5;
b--;
console.log(b); //получим значение: 4


//декремент с префиксной формой
a = 9;
console.log(++a); //получим значение: 10


//инкремент с префиксной формой
b = 6;
console.log(--b); //получим значение: 5


//возведение в степень
console.log(2 ** 3); //получим значение: 8
console.log(3 ** 2); //получим значение: 9

//остаток от деления:
console.log(19 % 3); //получим значение: 1
console.log(9 % 2); //получим значение: 2
*/

// Логические операторы

// || - или; && - и; ! - не

/*let a = false;
let b = true;
if(a || b){
    alert('один из аргументов возвращает true')
} else {
    alert('появлюсь елси оба аргумента false')
}*/

/*let a = 1;
let b = 0;
if(a || b){
    alert('один из аргументов возвращает true');
} else {
    alert('появлюсь елси ОБА аргумента false');
}*/

/*let ageUSer = 18;
let countMsg = 800;
if((ageUSer >= 21) || (countMsg > 500)){
    alert('вам разрешено прикреплять файлы');
} else {
    // это сообщение появится если age user < 18 И! counMSg < 500
    alert('вам запрещено прикреплять файлы');
}*/

// Оператор && (и)
// alert(true && false);//false
// alert(false && false);//false
// alert(false && true);//false
// alert(true && true);// true

/*let ageUSer = 18;
let countMsg = 800;
if((ageUSer >= 21) && (countMsg > 500)){
    alert('вам разрешено прикреплять файлы');
} else {
    // это сообщение появится если ageUser < 18 ИЛИ! countMsg < 500
    alert('вам запрещено прикреплять файлы');
}*/



// Оператор ! (не)

// 1. !- приводит операнд(аргумент) к логическому значению (true/false)
// 2. ! - возвращает логическое значение противоположное точу что получил в шаге 1


// alert(!true);// false
// alert(!false); // true
// alert(!'string');// false
// alert(!0);//true
// alert(!8);//false

// !! - второй оператор ! вернет значение противоположное тому которое вернул первый оператор !

/*let str = 'str';
let a = !!str;*/
// тоже самое что пример ниже -->
/*let str = 'str';
let a = Boolean(str);*/

// Домашнее задание
// спросить возраст пользователя, потом возраст, потом если возраст больше 25 и зовут его джон то вывести привет Джон, если нет то вывести мы тебя не знаем.
//let userAge = +prompt('Сколько вам лет?', '25');
/*let userName = (userAge >= 18) ? prompt('Ваше имя?'):prompt('Вам недостаточно лет');
let userAccept = (userAge > 25 && userName === 'John') ?  alert('welcome John') : alert('who are you? i dont know you');*/
// или через if..else
/*let userName = null;
if (userAge >= 18){
     userName = prompt('Ваше имя?', 'John');
}
let userAccept = null;
if (userAge >= 25 && userName == 'John') {
    userAccept = alert('welcome John');
} else {
    alert('who are you?I dont know you');
}

console.log(userName);*/


// Switch
// по сути продвинутый оператор if

/*switch (arg) {
    case 1:
        console.log('case1');
        break;
    case 2:
        console.log('case2');
        break;
    case 3:
        console.log('case3');
}*/

/*let arg = 7;

switch (arg) {
    case 1:
        alert('Значение переменной arg равно 1');
        break;
    case 3:
        alert('Значение переменной arg равно 3');
        break;
    case 5:
        alert('Значение переменной arg равно 5');
        break;

    default:
        alert('Значение переменной arg равно :' + arg);
}*/
// default -- как else
// когда используешь switch нужно помнить о типах данных

// ДЗ
//Записать конструкцию switch которая будет проверять сколько опыта получил ваш герой
// в игре в зависимости от количества убитых врагов
/*let howManyEnemiesYouKill = +prompt('Сколько врагов вы убили?', '3');
let enemiesCount = howManyEnemiesYouKill;
let gameCount = null;
switch (enemiesCount) {
    case 1:
        gameCount = 'Вам начислено 100 очков';
        break;
    case 3:
        gameCount = 'Вам начислено 400 очков';
        break;
    case 5:
        gameCount = 'Вам начислено 700 очков';
        break;
    case 10:
        gameCount = 'Вам начислено 1000 очков';
        break;

    default:
        gameCount = 'Вам начислено :' + (enemiesCount * 100) + 'очков';
}

alert(gameCount);*/

// ********************************************** Функции ***********************************************************
// повторять код -- Моветон

// let amount = +prompt('На какую сумму вы хотите пополнить счет?', '');
// alert(`Счет пополнен на сумму ${amount}`);
// такой код придется дублировать

/*function callpayment() {
    let amount = +prompt('НА какую сумму вы хотите пополнить счет?', '');
    alert(`Счет пополнен на сумму ${amount} $`);
}
callpayment();*/
//а функцию можно вставлять везде

// аргументы функции


/*function callPayment(currency) {
    let amount = +prompt('На какую сумму Вы хотите пополнить счет?');
    alert(`Счет пополнен на сумму ${amount} ${currency}`);
}
// Переданное значение userCurrency записывается в переменную currency, которую мы
// написали при определении функции внутри ()
// переменную currency можно использовать внутри функции и в ней будет лежать
// то значение, которое мы передали (через userCurrency)

let userCurrencyRub = '₽'; //валюта: рубль это и есть по сути первый аргумент --> currency !!!!!
let userCurrencyUSD = '$'; //валюта: доллар
let userCurrencyBTC = 'BTC'; // биткоин

callPayment(userCurrencyRub); //вызываем функцию с валютой: рубль
// функция использует userCurrencyRub как 1 аргумент
callPayment(userCurrencyUSD); //вызываем функцию с валютой: доллар
callPayment(userCurrencyBTC);*/
// аргумент без значения вернет undefined

//currency =  '$' задамем значение аргумента по умолчанию
/*function callPayment(currency =  '$') {
    let amount = +prompt('На какую сумму Вы хотите пополнить счет?');
    alert(`Счет пополнен на сумму ${amount} ${currency}`);
}

callPayment(); //применится валюта указанная по умолчанию
callPayment('₽'); //применится валюта: рубль*/

// ДЗ
//1ю определить функцию, которая будет запрашивать число - с помощью prompt
// умножать его на 327 и делить на 10, далее с помощью alert выдать результат
/*function calcNumbers() {
    let randomNumber = +prompt('Загадайте число', Math.floor(Math.random() * 15));
    let calculator = Math.floor(randomNumber * 327) / 10;
    alert(calculator);
}
calcNumbers();*/

// 2. Определить функцию с аргументом ,которая будет запрашивать число - с помощью prompt
// умножать на значение указанное в качестве аргумента, и с помощью alert выдавать результат

/*
function calcNumbers(number) {
    let randomNumber = +prompt('Загадайте число', Math.floor(Math.random() * number));
    let calculator = Math.floor(randomNumber * 327) / 10;
    alert(calculator);
}

calcNumbers(14);
*/

// ----- Функции ---- Возврат значения (Callback)
// нужна функция которая что то считает и то что она посчитает нужно записать в
// переменную, которую потом использовать в коде
/*function sqr(a) {
    let result = a * a;
}
sqr(4)*/
// чтобы вытащить из функции результат нужно использовать return
/*function sqr(a) {
    let result = a * a;
    return result;
}
//sqr(4);
let result = sqr(4);
console.log(result);*/

// ДЗ
//написать функцию которая с помощью prompt запрашивает число
// затем эта функция умножает введенное число на 100 и возвращает это значение
// результат функции должен быть записан в переменную
/*function calcNumbers(number) {
    let randomNumber = +prompt('Загадайте число', Math.floor(Math.random() * number));
    let calculator = Math.floor(randomNumber * 100);
    return calculator;
}
let calculator = calcNumbers(15);
console.log(calculator);*/

// ------------- Стрелочные функции ------------
// синтаксис
/*let func = () => alert('Я стрелочная функция');
func();*/
// У СТРЕЛОЧНОЙ ФУНКЦИИ НЕТ СВОЕЙ ОБЛАСТИ КОНТЕКСТА -- this будет привязано к той области где было оопределено

/*let func = () => {
  alert('Я стрелочная функция');
  alert('ДА ДА');
};*/

// аргументы так же как в обычной функции

/*let func = (a) => {
    alert(a);
};
func(3);*/

// возвращение значений в стрелочных функциях

/*let func = () => 1 + 1;
let func2 = () => {
   return 1 + 1;
};*/
// func т func2 полностью идентичны

// если в функции нужно выполнить несколько действий и вернуть результат
// тогда уже нужно добавлять return
/*let func = () => {
    let result = 2 + 2;
    return result;
};*/

// ДЗ
// написать стрелочную функцию которая будет будет запрашивать ДВА числа
// и перемножать их между собой полученное значение возвращать с помощью return
// результат сохранить в переменную

/*let homeWork = (number, number1) => {
   let getNumber = +prompt('Напишите число', number);
   let getNumber1 = +prompt('Напишите число', number1);
   let calcNumbers = (getNumber * getNumber1);
   return calcNumbers;
};

let calcNumbers = homeWork(2, 3);
console.log(calcNumbers);*/

// *********** Знакомство с DOM ****************
// DOM структура html
// ------ DOM элементы Получение обьектов -----

/*let text = document.getElementById('text'); // получим элемент
text.style.color = 'green'; // преобразуем его*/

// --------- DOM элементы События.Ввод -----

/*let text = document.getElementById('text'),
    btnRed = document.getElementById('btnRed'),
    btnGreen = document.getElementById('btnGreen');*/
// метод onclick
/*btnRed.onclick = function () {
   text.style.color = 'red';
   alert('Цвет текста изменен на красный');
};*/
/*let getElement = (idElement) => {
    return document.getElementById(idElement);
}

let   text = getElement('text'),
      btnRed = getElement('btnRed'),
      btnGreen = getElement('btnGreen');*/
// ВСЕ СТРОКОВЫЕ ЗНАЧЕНИЯ КОТОРЫЕ НЕ БУДУТ МЕНЯТСЯ ПО ХОДУ
// НАПИСАНИЯ КОДА НУЖНО ВНОСИТЬ В КОНСТАНТЫ
// константы пишутся капсом(?????)
/*const TEXT_ID = 'text',
      BTN_RED = 'btnRed',
      RED_COLOR = 'red',
      GREEN_COLOR = 'green',
      TEXT_CHANGE_TO_GREEN = 'Цвет текста изменен на зеленый',
      TEXT_CHANGE_TO_RED = 'Цвет текста изменен на красный';*/

/*btnRed.onclick =  () => {
    text.style.color = 'red';
    alert('Цвет текста изменен на красный');
};
//метод addEventListener
btnGreen.addEventListener('click', event => {
    text.style.color = 'green';
    alert('Цвет текста изменен на зеленый');
});*/
/*let setColor = (color) => {
    text.style.color = color;
};*/
/*btnRed.onclick =  () => {
    text.style.color = RED_COLOR;
    alert(TEXT_CHANGE_TO_RED);
};
//метод addEventListener
btnGreen.addEventListener('click', event => {
    text.style.color = GREEN_COLOR;
    alert(TEXT_CHANGE_TO_GREEN);
});*/



/*
let getElement = (idElement) => {
    return document.getElementById(idElement);
}
// ДЗ
// разобратся с кодом и добавить кнопку которая перекрашивает текст в желтый
let queryElement = (classElement) => {
    return document.querySelector(classElement);
};

let text = getElement('text'),
    btnRed = getElement('btnRed'),
    btnGreen = getElement('btnGreen'),
    btnYellow = queryElement('.btnYellow');

const TEXT_ID = 'text',
    BTN_RED = 'btnRed',
    RED_COLOR = 'red',
    YELLOW_COLOR = 'yellow',
    GREEN_COLOR = 'green',
    TEXT_CHANGE_TO_GREEN = 'Цвет текста изменен на зеленый',
    TEXT_CHANGE_TO_YEllOW = 'Цвет текста изменен на желтый',
    TEXT_CHANGE_TO_RED = 'Цвет текста изменен на красный';


let setColor = (color) => {
    text.style.color = color;
};

btnRed.onclick =  () => {
    setColor(RED_COLOR);
    alert(TEXT_CHANGE_TO_RED);
};
//метод addEventListener
btnGreen.addEventListener('click', event => {
    setColor(GREEN_COLOR);
    alert(TEXT_CHANGE_TO_GREEN);
});

btnYellow.addEventListener('click', event => {
    setColor(YELLOW_COLOR);
    alert(TEXT_CHANGE_TO_YEllOW);
});
*/

// **********************************    DOM элементы. События часть 2 ************************************

// как посмотреть события которые можно ОТСЛЕЖИВАТЬ у элемента
/*let getElement = (idElement) => {
    return document.getElementById(idElement);
}

let queryElement = (classElement) => {
    return document.querySelector(classElement);
}

let btnRed = getElement('btn-Red');
let btnGreen = queryElement('.green-btn'),
    btnYellow = queryElement('.yellow-btn'),
    pagaraph = queryElement('.hide-paragraph');

const PUSH_LEFT_BUTTON = 'На меня нажали левой кнопкой мыши',
      PUSH_RIGHT_BUTTON = 'На меня нажали правой кнопкой мыши';

console.dir(btnRed);// выводит список свойств указанного JS обьекта

btnRed.addEventListener('click', event => {
  alert(PUSH_LEFT_BUTTON);
});

btnRed.addEventListener('focus', event => {
  btnRed.style.backgroundColor = 'Blue';
});

/!*btnRed.oncontextmenu = () => {
  alert(PUSH_RIGHT_BUTTON);
};*!/

btnRed.addEventListener('contextmenu', event => {
    alert(PUSH_RIGHT_BUTTON);
});
// ДЗ
// сделать еще обработчики для событий
btnGreen.addEventListener('click', function () {
    btnGreen.style.transform = 'rotate(60deg)';

});

btnGreen.addEventListener('mouseover', event =>{
    btnGreen.style.color = 'Gray';
});

btnYellow.addEventListener('click', event => {
    pagaraph.style.display = 'block';
    pagaraph.style.color = 'Blue';
    document.body.appendChild(pagaraph);
});

console.dir(btnGreen);
console.dir(btnYellow);*/


// **************************************   ОБЬЕКТЫ *******************************

/*const boy = {
  name: 'Mike',
  age: 12
};*/
//Данные в обьектах хранятся в виде ключ - значение
// name и age свойства обьекта
// 'Mike' и 12 значения

// методы это функции которые могут выполнить данный обьект
/*const boy = {
    name: 'Mike',
    age: 12,

    sayHello: function () {
        console.log('Hello', this.name);
    }
};
boy.sayHello()
console.log('Мое имя', boy.name);
console.log('возраст', boy.age);
console.log('me name', boy['name']);
console.log('Мой возраст', boy['age']);
*/
// алерт из примера почему то не работает

/*
const hero = {
  name: 'jsHero',
  attack: 15,
  defence: 5,
  level: 1,
  experience: 0,
  coordinateX: 0,
  coordinateY: 0,



    goRight: function () {
        this.coordinateX++;
    },
    goLeft: function () {
        this.coordinateX--;
    },
    hit: function () {
        this.experience += 10;
        alert('Ударил врага');
    },
    blockKick: function () {
        alert('ЗАблокировал удар');
    },
    jump: function () {
        this.coordinateY += 10;
        alert('Подприыгнул');
    },
    nextLevel: function () {
       if (this.coordinateX === 1000) {alert('LVL COMPLETE'); this.level += 1; this.experience *= 10;}
    }

};
hero.hit();
*/

//  с помощью this можно обращатся к свойствам и методам внутри обьекта
// чтобы внутри метода goRight обратится  к свойству coordinate
// нужно обязательно использовать ключевое слово this
// еще раз this используется ДЛЯ ОБРАЩЕНИЯ К СВОЙТСТВАМ И МЕТОДАМ ВНУТРИ САМОГО ОБЬЕКТА



// **************************************   МАссивы ******************************************************
// массив это частный случай обьекта (ключи фиксированные)
/*const arr = new Array();
const arr2 = [];*/

/*const arr = ['ручка', 'карандаш', 'ластик', 'кошка'];
const arr1 = [1, 2, 3, 4, 5, 6];
const arr3 = [
    {name: 'Name 1', value: 1},
    {name: 'Name 2', value: 2}
];

console.log(arr.length); //вернет длинну массива

// получение элемента из массива
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);*/

// изменение элемента в массиве
/*arr[0] = 'пластилин';
console.log(arr[0]);*/

// добавление элементов в массив

/*const arr = ['вилка'];
arr[1] = 'ложка';
console.log(arr);*/
// push добавляет элемент в конец массива
/*const arr = ['вилка'];
arr.push('ложка');
console.log(arr);
arr.unshift('кошка');
console.log(arr);*/
// unshift добавляет элемент в начало массива

// удаление элементов из массива

/*
const arr = ['вилка', 'кошка', 'ложка'];
//arr.pop();
const delElement = arr.pop();
console.log(delElement);
console.log(arr); // удалится последний элемент
// pop возвращает удаленный элемент
*/

/*const arr = ['вилка', 'кошка', 'ложка'];
const delElement = arr.shift();
console.log(delElement);
console.log(arr);*/
// shift удаляет первый элемент из массива и тоже его возвращает

// ---------- Перебор элементов массива --------

// const arr = ['вилка', 'кошка', 'ложка'];

/*for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}*/

/*for (let el in arr){
    console.log(el);
}*/
// for..in не вернет индекс элемента в массиве

/*arr.forEach((elem, index) => {
    console.log(elem);
});*/

// ------ почему ненужно использовать new Array()
//const arr = ['вилка', 'кошка', 'ложка'];
//const arr2 = new Array('вилка', 'кошка', 'ложка');
/*const arr = new Array(50);
console.log(arr);
console.log(arr[0]);
console.log(arr.length);*/

// ********************** Методы массивов: splice,slice,concat

// метод splice -- добавляет и удаляет элементы в любом месте массива
/*const languages = ['pyton', 'java', 'javascript'];
languages.splice(0, 2); // удалить два элемента начиная с 0
console.log(languages);*/
//можно добавлять элементы на место удаленных
/*const languages = ['pyton', 'java', 'javascript'];
languages.splice(0, 2, 'php', 'c++', 'kotlin'); // удалить два элемента начиная с 0
console.log(languages);*/

// Метод slice -- копирует указанные элементы массива и создает из них новый
/*
const languages = ['pyton', 'java', 'javascript', 'php', 'c++', 'kotlin'];
const newList = languages.slice(2, 4);// 2 с которого индекса  копируются, 4 ДО какого индекса копируется
console.log(newList);
*/

// Метод concat -- создает из нескольких значений/массивов один , обьединяя их
/*const languages = ['pyton', 'java', 'javascript'],
      additionalLanguages = ['c++', 'c#'];

const summary = languages.concat(additionalLanguages);
console.log(summary);*/

/*const languages = ['js'];
const languages2 = languages.concat(['python', 'php'], 'java');
console.log(languages2);*/

// Методы массивов: find, findindex, filter

// Метод find
// позволяет возвращать значение первого элемента найденного в массиве,
// который удовлетворяет условию переданному в callback функцию
// в аргумертах метода нужно передавать функцию, чаще всего find
// использую тогда, когда у массива элементами являются обьекты

/*const cars = [
    {id: 1, model: 'Ferrari'},
    {id: 2, model: 'Audi'},
    {id: 3, model: 'Toyota'}
];
//первый аргумент до которого дошел метод find
//второй аргумент индекс элемента в массиве cars
//третий аргумент весь массив cars
const audi = cars.find(function (item, index, arr) {
    return item.model === 'Audi';
    //return item.id === 1;
})
console.log(audi);*/

/*const cars = [
    {id: 1, model: 'Ferrari'},
    {id: 2, model: 'Audi'},
    {id: 3, model: 'Toyota'}
];

const audi = cars.find( (item) => {
    return item.model === 'Audi';
    //return item.id === 1;
});
console.log(audi);*/
// метод findIndex возвращает индекс обьекта
/*const audi1 = cars.findIndex( (item) => {
    return item.model === 'Audi';
    //return item.id === 1;
});
console.log(audi);
console.log(audi1);*/

// метод filter

/*
const cars = [
    {id: 1, model: 'Ferrari'},
    {id: 2, model: 'Audi'},
    {id: 3, model: 'Toyota'},
    {id: 4, model: 'Suzuki'}
];

const filterCars = cars.filter( (item) => {
   return  item.id % 2 === 0;
});
console.log(filterCars); // получим массив с теми элементами значения свойтства id
//  которых являются четными
*/

// ******************************* Методы массивов map, sort. ************************

// метод map -- создает новый массив из элементов, которые будут являтся
// результатами выполнения callback функции
// у метода map есть только один аргумент ,который является callback функцией
// у этой функции есть 3 аргумента -->
// 1 -- аргумент: текущий элемент (элемент на текущей итерации)
// 2 -- аргумент: индекс этого элемента в масииве
// 3 -- аргумент: сам массив

/*const numbers = [2, 5, 7, 9];
const results = numbers.map(n => {
    return n ** 5;
});
console.log(results); */

// метод sort сортирует массив (причем делает "на месте" что изменяет сам массив)

/*const characters = ['d', 'z', 'a', 'c', 'y'];
characters.sort();
console.log(characters);*/

/*const numbers = [45, 4, 2, 1, -50, 300, 0];
numbers.sort();
console.log(numbers);*/
// метод sort при работе с элементами массива по умолчанию преобразует их
// к строковому типу и для сортировки применяется лексикографический порядок
// а если сравнивать строки то строка 300 больше чем строка 4

// для пары значений callback функция метода sort возвращает:
// 1 ( или любое положительное число) - если первое значение больше второго
// 0 - если значения равны
// -1 (или любое отрицательное число) - если первое значение меньше второго
//const numbers = [45, 4, 2, 1, -50, 300, 0];
/*function compare(a, b) {
     if (a > b) return 1;
     if (a === b) return 0;
     if (a < b) return -1;
};*/
/*numbers.sort((a, b) => {
    return a - b;
});*/
// a - b --> большее а чем b вернет положительное число, равные вернут ноль, большее b
// вернет отрицательное число
//!!!!!!! ---->
// 1 -- аргумент: текущий элемент (элемент на текущей итерации)
// 2 -- аргумент: индекс этого элемента в масииве
// 3 -- аргумент: сам массив
//numbers.sort(compare);
//console.log(numbers);

// ************************** Методы массивов reverse, split, join *********************************

//  метод reverse переворачивает массив задом-наперед
/*const languages = ['pyton', 'java', 'javascript', 'php', 'c++', 'kotlin'];
languages.reverse();
console.log(languages);*/

// метод split позволяет получить из строки - массив
/*const words = 'cat, dog, snake';
const arr = words.split(',');
console.log(arr);*/

//расчленить строку на элементы массива
/*
const str = 'Javascript';
const arr = str.split('');
console.log(arr);
*/

/*
const str = 'Javascript';
const arr = str.split();
console.log(arr); // ['Javascript']
*/

// метод join -- переводит массив в строку
/*
const arr = ['cat', 'dog', 'snake'];
const str = arr.join('#');
console.log(str);

const arr1 = ['cat', 'dog', 'snake'];
const str1 = arr1.join('');
const str2 = arr1.join();
console.log(str1);
console.log(str2);
*/

// ********************** Методы массивов: indexOf, lastIndexOf, includes

// метод indexOf позволяет найти индекс элемента в массиве по значению
/*const languages = ['python', 'java', 'js'];
const javaIndex = languages.indexOf('java');
console.log(javaIndex);*/
// метод принмает 2 аргумента 1й - значение которое хотим найти 2й - с какого индекса начать поиск
// lastIndexOf - тоже самое что и indexOf только поиск начинается с конца массива

// Метод includes - проверяет есть ли указанное значение в массиве
// возвращает true если существует  или false если нет

/*
const languages = ['python', 'java', 'js'];
console.log(languages.includes('js')); // true
console.log(languages.includes('C++')); // false
*/

// *************************** Методы массивов: reduce, spread ************

// Метод reduce
// этом метод работает с элементами СЛЕВА НАПРАВО
// у этого метода callback функция сохраняется для следующего элемента
// Т.Е. при вызове callback на следующем элементе, метод позволяет получить доступ к значению
// вернувшемуся из этого же callback, НО НА ПРЕДЫДУЩЕМ ЭЛЕМЕНТЕ (метод выполнил callback на первом элементе,
// и переходя ко второму элементу мы имеем доступ к значению, которое вернул callback на первом элементе

// посчитаем сумму всех элементов массива
/*
const numbers = [50, 50, 1];
// 1й аргумент (prevoriusValue) - значение, которое вернула callback функция для предыдущего элемента
// 2й аргумент (currentEl) - текущий элемент
// 3й аргумент - индекс текущего элемента в массиве
// 4й аргумент - сам массив, по которому бежит код reduce
const results = numbers.reduce(function (prevoriusValue, currentEl) {
      return prevoriusValue + currentEl;
}, 0); // второй аргумент метода reduce, если сюда поставить например 100 то сумма будет 201
console.log(results);
*/
// reduceRight -- пробегает по элементам справа налево

// Метод spread (...) -- обьединяет массивы

/*
const numbers = [3, 4, 5];
const arr = [1, 2, ...numbers];
console.log(arr);
*/
/*const numbers = [3, 4, 5];
const otherNumbers = [4, 5, 6];
const  summ = [...numbers, ...otherNumbers];
console.log(summ);*/
// можно копировать массивы НО ТОЛЬКО С ПРОСТЫМИ ЗНАЧЕНИЯМИ
// числа, строки, булевы значения
/*const numbers = [3, 4, 5];
const copyNumbers = [...numbers];
console.log(copyNumbers);*/

// Методы массивов: Array.isArray, some, every
//Array.isArray -- для того чтобы узнать является ли массив массивом
/*
const obj = {name: 'Mike'};
const arr = [1, 2, 3];

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false
*/
// Метод some
// позволяет узнать есть ли в массиве значение с заданным параметрами
// (например элемент который можно разделить на 2,и полученное значение будет >= 10)
/*
const numbers = [20, 45, 12, 12, -4, 5, 7];
const has = numbers.some(n => {
    return n /2 >= 10;
});
console.log(has);
*/

// Метод every вернет true только если ВСЕ значения отвечают заданным условиям
// проверим что каждый элемент массива можно / 2 и полученное значение >= 10
/*const numbers = [20, 30, 40];
const otherNumbers = [20, 10, 40];

const hasInNumbers = numbers.every(n => {
    return (n /2) >= 10;
});

const hasInOtherNumbers = otherNumbers.every(n => {
    return (n /2) >= 10;
});
console.log(hasInNumbers); // true
console.log(hasInOtherNumbers); // false*/

// ****************************** Методы массивов: flat, fill ***************************

// Метод flat -- Создает новый массив из всех подмассивов, содержащихся в нем
// уменьшая мерность на указанное значение ( по умолчанию 1)

/*const arr = [1, 2, 3, [4, 5,], [[7, 8]]];
const transformArr = arr.flat();
console.log(transformArr);*/
// убираются лишние квадратные скобки, т.е. элементы из модмассивов распаковываются в основной массив
// поставим в скобках 2 и распакуюия оба подмассива, infinity тогда все

/*const arr = [1, 2, 3, [4, 5,], [[7, 8]]];
const transformArr = arr.flat(Infinity);
console.log(transformArr);*/

// Метод fill - заменяет или заполняет элементы массива одним и тем же значением
/*const arr = [1, 2, 3, 4];
arr.fill(0, 2, 4)
console.log(arr);*/
// 1й - аргумент значение которое заполняет массив
// 2й - аргумент индекс после которого необходимо вставить указанное значение
// 3й - аргумент до которого необходимо вставить указанное значение

//************************************* Планирование вызова функции: setTimeout******************************

// window.setTimeout(func, delay);
// или
// setTimeout(func, delay);
// функции которые передаются в другие функции в качестве аргументов
// называются callback функциями

/*let hello = () => {
    alert('Привет');
};
setTimeout(hello, 5000);*/
// функция hello тут является callback функцией которую можно запустить через 5 сек
// тут в качестве первого аргумента мы передали ССЫЛКУ на функцию hello
// ссылка на функцию это ее ИМЯ А НЕ ВЫЗОВ.
// В качестве аргумента НУЖНО передавать ссылку на функцию либо описание функции
// НО НЕ НУЖНО ПЕРЕДАВАТЬ ВЫЗОВ ФУНКЦИИ

/*setTimeout(function () {
    alert('hello');
}, 3000);

setTimeout(() => {
   alert('hello');
}, 5000);

setTimeout(() => alert('HIHiho'), 4000);*/
//анонимная описание которой передаем в качестве 1го аргумента
// будет доступна только для setTimeout и не доступна для кого то извне

//setTimeout(`alert('Привет')`, 5000); // плохой вариант
// setImterval нужно удалять после выполненя чтобы не было утечки памяти
/*let hello = () => {
     alert('Hello');
     clearInterval(timerId);
}
const timerId = setTimeout(hello, 5000);*/

/*let hello = () => {
    alert('Hello');
}
const timerId = setTimeout(hello, 5000);
clearInterval(timerId);*/
//в этом случае setTimeout не будет выполнен совсем потому что
// вызван clearInterval сразу после обьявления setTimeout


// *******************  Планирование вызвова функции: setInterval *************************

//setInterval повторяет вызвов функции через заданное время


/*let hello = () => {
    alert('Hello');
}
const intervalID = setInterval(hello, 5000);
clearInterval(intervalID);*/

/*let counter = 0;

let hello = () => {
    alert('Hello');
    counter += 1;
    if (counter === 3) {
        clearInterval(intervalId);
        console.log('well done')
    }
}
const intervalId = setInterval(hello, 5000);*/


// ********************************************** Обьекты. свойства *****************************************************************

// Создание обьекта
//1. const cat = new Object(); --> это конструктор обьекта
//2. const cat = {}; --> это литерал обьекта

/*const catKnopka = {
    name: 'Knopka',
    age: 10,
    color: 'black-white',
    weight: 5
};

console.log(catKnopka.name);*/

/*{
    имяСвойства1: 'значение свойства',
    имяСвойства2: 5,
    имяСвойства3: ['a', 'b', 'c'],
    имяСвойства4: {
        // тут указать свойства другого обьекта
  }
}*/

/*
const catKnopka = {
    name: 'Knopka',
    age: 10,
    color: 'black-white',
    weight: 5,
    'other_prop': 'blablabla'
};

console.log(catKnopka['other_prop']);
*/

// Вычисляемые свойства

/*let propName = prompt('Введи значение свйоства', 'tailLength');
let propValue = prompt('Введи значение свойства', '20');

const catKnopka = {
    name: 'Knopka',
    age: 10,
    color: 'black-white',
    weight: 5,
    [propName]: propValue
};
console.log(catKnopka);*/

// Именование свойств обьекта

// свойство любого реального обьекта всегда имя существительное
// действия любых обьектов ЭТО ВСЕГДА ФУНКЦИЯ

// ДЗ
// 1. создать обьект игрушка
// 2. добавить к этому обьекту своства имя и материал
// 3. добавить в обьект вычисляемое свойство в котором будет цена на игрушку

/*let whatYouSell = prompt('Что вы продаете?', 'compot');
let howCostToy = +prompt('Сколько стоит Компот?', '30');

const toy = {
     name: 'Kompot',
     material: 'plastic',
     [whatYouSell]: howCostToy
};
console.log(toy);*/


// *************************************************** Обьекты: методы *********************************************************
// метод это обычная функция

// Добавление метода
/*const catKnopka = {
    name: 'Knopka',
    age: 10,
    color: 'black-white',
    weight: 5,
    mew: function () {
        console.log('miau-miau');
    }
    //краткая запись
    /!*mew1 () {
        console.log('miau-miau');
    }*!/
};
catKnopka.mew();*/
// методы могут обращатся к другим свойствам и методам того же обьекта

/*const catKnopka = {
    name: 'Knopka',
    age: 10,
    color: 'black-white',
    weight: 5,
    mew: function () {
        console.log('miau-miau');
    },
    sayName(){
        console.log('Привет меня зовут:' + this.name);
    }
    // this позволяет обращатся к любым свойствам и методам ТЕКУЩЕГО обьекта
};
catKnopka.mew();
catKnopka.sayName();*/

// Именование методов
// методы всегда именутся глаголами

// ДЗ
// добавить несколько методов в обьект и определить их по разному

/*const catKnopka = {
    name: 'Knopka',
    age: 10,
    color: 'black-white',
    weight: 5,
    mew: function () {
        console.log('miau-miau');
    },
    sayName(){
        console.log('Привет меня зовут:' + this.name);
    },
    sayColor: function () {
        console.log('У меня шерсть :' + this.color + 'цвета');
    },
    sayWeight () {
        console.log('а вешу я :' + this.weight + "kg..");

    }
};
catKnopka.sayColor();
catKnopka.sayWeight();*/


// ******************************** this, call, apply, bind *******************************************************
// все это относится к КОНТЕКСТУ

// --- THIS ---

/*function hi() {
    console.log('Привет', this);
}
hi();*/ // возвращает не обьект window а undefined почему то.....
//window.console.log('hi');
// функция hi запускается из обьекта window т.е. контекст в котором она выполняется
// тоже равен обьекту window а ключевое слово this  содержит внутри себя контекст
// в котором вызывается функция/метод
/*const man = {
    name: 'Mikhail',
    lastName: 'Bakhtin',
    age: 30,
    sayHi: hi
};
man.sayHi();*/
// теперь когда мы вызвваем hi из обьекта man то контекстом вызова становится
// обьект man
// ЗНАЧЕНИЕ this РАВНО ТОМУ ОБЬЕКТУ В КОНТЕКСТЕ КОТОРОГО БЫЛО ВЫЗВАНО!!!!!!!!!!

// Метод bind
/*
function hi() {
    console.log('Привет', this);
}

const man = {
    name: 'Mikhail',
    lastName: 'Bakhtin',
    age: 31,
    sayHi: hi
};

const woman = {
    name: 'Vera',
    lastName: 'Bakhtina',
    age: 30
};

const Logger = {
   info: function (sex) {
       console.log('Имя', this.name);
       console.log('Фамилия', this.lastName);
       console.log('Возраст', this.age);
       console.log('Пол', sex);
   }
};
*/

//Logger.info(); // выдаст undefined тк в обьекте logger(который будет контекстом вызова) нет таких свойств
// у каждой функции в JS есть метод bind с помощью которого
// можно любой функции задать контекст внутри которого она должна выполнятся
/*const LoggerMan = Logger.info.bind(man); // контекст вызова будет обьект man
LoggerMan();
LoggerMan('мужской');
const LoggerWoman = Logger.info.bind(woman);
LoggerWoman();
LoggerWoman('женский');*/
//еще один способ передать аргументы - указать их при вызове bind
/*const LoggerMan = Logger.info.bind(man, 'мужской');
const LoggerWoman = Logger.info.bind(woman, 'женский');
LoggerMan();
LoggerWoman();*/
// первый аргумент в методе bind - это сам контекст, который нужно привязать к функции
// дальше через запятую можно передавать сколько угодно параметров
// которые должны попасть в метод info. (в примере только один аргумент sex)

// Метод call
// метод call привязывая контекст сразу же вызывает указанную функцию а не вызывает новую

/*function hi() {
    console.log('Привет', this);
}

const man = {
    name: 'Mikhail',
    lastName: 'Bakhtin',
    age: 31,
    sayHi: hi
};

const woman = {
    name: 'Vera',
    lastName: 'Bakhtina',
    age: 30
};

const Logger = {
    info: function (sex) {
        console.log('Имя', this.name);
        console.log('Фамилия', this.lastName);
        console.log('Возраст', this.age);
        console.log('Пол', sex);
    }
};

 Logger.info.call(man, 'мужской');
 Logger.info.call(woman, 'женский');*/

// bind привязывает контекст и возвращает новую функцию, можно вызвать ее в любом месте
// call привязывает контекст и сразу же вызывает функцию

// Метод apply

// принимает 2 аргумента -->
// Контекст ( так же как bind и call)
// Массив параметров

/*
function hi() {
    console.log('Привет', this);
}

const man = {
    name: 'Mikhail',
    lastName: 'Bakhtin',
    age: 31,
    sayHi: hi
};

const woman = {
    name: 'Vera',
    lastName: 'Bakhtina',
    age: 30
};

const Logger = {
    info: function (sex) {
        console.log('Имя', this.name);
        console.log('Фамилия', this.lastName);
        console.log('Возраст', this.age);
        console.log('Пол', sex);
    }
};

Logger.info.apply(man, ['мужской']);
Logger.info.apply(woman, ['женский']);
*/

// *************************************** Замыкания (!!!!) *******************************************************************
// Замыкание это ФУНКЦИЯ ВНУТРИ ДРУГОЙ ФУНКЦИИ

/*function hi() {
   return function () {
       console.log('Привет');
   }
}*/
// hi(); в консоль ничего не выведется
// так как функция hi возвращает новую функцию то нужно ее вызвать
// перед этим для наглядности записав ее в константу
/*const sayHi = hi();
sayHi();*/


/*function hi(name) {
    return function () {
        console.log(`Привет, ${name}`);
    }
}

const sayHi = hi('Mikhail');
const sayHi1 = hi('VEra');
sayHi();
sayHi1();*/
// name мы передали только в функцию hi однако та функция которую возвращает
// функция hi(вложенная) тоже может использовать name и имеет к нему доступ
// ЭТО И ЕСТЬ ЗАМЫКАНИЕ --> возвращаемая функция замыкает в себе значение переменной name

// пример -- генератор ссылок для соц сетей

/*function createSoclink(socialNetwork) {
   return function (nickname) {
        return `https://${socialNetwork}/${nickname}`;
   }
}

const createVkLink = createSoclink('vk.com');
const createInstagramLink = createSoclink('instagram.com');
const createFaceBookLink = createSoclink('Facebook.com');
console.log(createVkLink('Mike'));
console.log(createInstagramLink('Knopa'));
console.log(createFaceBookLink('Vera'));*/

//ДЗ
// создать функцию calc используя замыкания которую можно использовать следующим образом
/*const plus = calc(10);
plus(5); // должно  вывести значение 15
plus(45);*/ // должно вывести значение 55

/*
function calc(number) {
    return function (number2) {
        return number + number2;
    }
}
const plus = calc(10);
console.log(plus(5));
console.log(plus(45));
*/


// ************************************************* ПРОТОТИПЫ!!! PROTOTYPE **************************************************

/*const cat = {
  name: 'Cat',
  weight: 5,
  meow: function () {
      console.log('meow');
  }
};*/

/*console.log(cat);
console.log(cat.meow());
// cat.woof(); если вызвать несуществующую функцию то выдаст ошибку
console.log(cat.valueOf());
console.log(cat.toString());*/

// другой способ создания обьекта
/*const cat = new Object({
    name: 'Cat',
    weight: 5,
    meow: function () {
        console.log('meow');
    }
});*/

//console.log(cat);

// тк обьект создается используя new Object(...) то от этого Object
// к нашему обьекту добавляются свойства к которым и относится свойство
// __proto__
// --> Все обьекты которые создаются на базовом классе JS -- Object
// у класса Object имеется свойство prototype

//console.log(Object.prototype);

/*Object.prototype.woof = function () {
    console.log('woof');
}

console.log(cat.woof()); // метод унаследуется от обьекта cat(cat.meow)
console.log(cat);*/
// т.е. метод woof который мы добавляли в свойство prototype обьекта Object
// передалось в свойство __proto__ нового обьекта (Object.prototype.woof)

/*Object.prototype.gavgav = function () {
    console.log('gavgav')
}
console.log(cat.gavgav());*/

// т.е. для каждого нового созданного обьекта добавится свойство __proto__
// а в нем появится метод woof(или gavgav).
// Написав этот метод в базовом классе Object мы можем использовать его неограниченное количество раз

// Object.create
/*
const employee = {
   name: 'Работник',
   position: 'Повар'
};

console.log(employee);
//создаем новый обьект который будет описывать работника - менджера
// прототипом которого !!!является обьект employee!!!!
const manager = Object.create(employee);

console.log(manager);
// 1 - создав обьект employee обычным способом мы получим обьект прототипом
// которого является базовый класс Object
// 2 - мы создали обьект manager с помощью Object.create(employee) прототипом которого
// указали обьект employee
manager.name = 'Knopka';
manager.position = 'Manager';
console.log(manager);
// по сути ПРОТОТИП ЭТО БАЗОВЫЙ ОБЬЕКТ ДРУГОГО ОБЬЕКТА
// этот базовый обьект присутствует у других обьектов и расширяет их возможности
*/

// В JS -- ВСЕ ОБЬЕКТЫ
/*const str = 'stroke';
console.log(str.toUpperCase()); */// STROKE
// Строковый тип это тоже обьект --> string который основан на обьекте Object

/*const str = 'stroke'; // эта запись
const str = new String('stroke'); // и эта
// одно  и тоже*/

// ******************************** Promise (обещания) ****************************************

// Эмуляция работы с сервером с помощью SetTimeout
/*console.log('Отправляем запрос на сервер...');

setTimeout(function () {
    console.log('Сервер собирает данные...');

    const data = {
       text: 'Данные с сервера'
    };

    setTimeout(function () {
    data.other = 'true';
    data.name = 'Mike';
    console.log('Данные, которые предоставил сервер:', data);
    }, 2000);
},1500);*/

// тоже самое с помощью Promise

//const promise = new Promise(function (resolve, reject) {});
// resolve - разрешить
// reject - отклонить
// эти аргументы являются функциями
// внутри primise будут проверки если они выполнены то вызывается resolve
// если проверки не пройдены то вызывается reject

/*console.log('Отправляем запрос на сервер...');

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Сервер собирает данные...');
      const data = {
        text: 'Данные с сервера'
      };

      resolve(data);
    }, 1500);
});

/!*promise.then(data => {
    setTimeout(function () {
      data.other = 'true';
        console.log('Успешное выполнение promise', data);
    }, 2000);
});*!/

promise.then(data => new Promise(function (resolve, reject) {
    setTimeout(function () {
        data.other = 'true';
        console.log('Успешное выполнение promise', data);
        resolve(data);
    }, 2000)
 })
).then(data => {
    console.log('Данные которые предоставил сервер');
});*/
// метод then(для promise)ожидает что в него передадут callback функцию
// она выполнится только в тот момент когда внутри самого promise мы вызовм
// функцию resolve() означающую успешное выполнение promise
// если код успешно выполнился то выполняется resolve и обработчик then
// сразу же отлавливает это и выполняет заданные нами действия

// Метод Reject

// then - обработчик выполнения функции resolve
// catch - обработчик для reject



//промис создает цепочку вызовов методов then
/*
const promise = new Promise(...)

promise.then(
    ...код...
).then(
    ...код...
).catch(
    ...обработка ошибки...
)
*/
// внутри catch можно обработать ошибку и передать ошибку в качестве аргумента
// функции reject(error)

/*console.log('Отправляем запрос на сервер...');

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Сервер собирает данные...');
        const data = {
            text: 'Данные с сервера'
        };
        // передаем ошибку
        reject(new Error('Ошибка сбора данных'));
    }, 1500);
});


promise.then(data => new Promise(function (resolve, reject) {
        setTimeout(function () {
            data.other = 'true';
            console.log('Успешное выполнение promise', data);
            resolve(data);
        }, 2000)
    })
).then(data => {
    console.log('Данные которые предоставил сервер');
}).catch(err => {
    console.error(err);
});*/

// --------- Метод finally
// finally выполняется всегда вне зависимости вызвали мы внутри промиса
// reject или resolve

console.log('Отправляем запрос на сервер...');

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Сервер собирает данные...');
        const data = {
            text: 'Данные с сервера'
        };
        resolve(data);
        // передаем ошибку
        //reject(new Error('Ошибка сбора данных'));
    }, 1500);
});


promise.then(data => new Promise(function (resolve, reject) {
        setTimeout(function () {
            data.other = 'true';
            data.name = 'Knopka';
            console.log('Успешное выполнение promise', data);
            resolve(data);
        }, 2000)
    })
).then(data => {
    console.log('Данные которые предоставил сервер');
}).catch(err => {
    console.error(err);
}).finally(() => {
    console.log('Работа с сервером завершена');
});


// стр 201