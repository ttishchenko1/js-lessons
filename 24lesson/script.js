/* 1 задание
Создайте объект с помощи функции-конструктора Person. В объекте должны быть свойства name,
last_name && age, метод isCanWalk() который будет возвращать true, и метод countPersons как 
статический метод который будет считать сколько екземпляров Person мы создали;
создайте несколько екземпляров Person например: var Lily = new Person(аргументы ...) */

var countPersons = 0;

function Person (name, last_name, age) { 
  countPersons = countPersons + 1;
  this.name = name,
  this.last_name = last_name,
  this.age = age,
  this.isCanWalk = function() {
                    return true;
                   },
  this.countPersons = countPersons;
}

var Lily = new Person('Lily', 'Ivanova', 20);
var Ann  = new Person('Ann', 'Petrova', 25);
var Max  = new Person('Max', 'Sidorov', 18);
var Kate = new Person('Kate', 'Krasnova', 28);

console.log(Lily, Ann, Max, Kate);
console.log(Kate.isCanWalk());
console.log(Kate.countPersons);


/* 2 задание
Создайте обьект bus через функцию-констурктор Car который будет иметь свойства canRide, wheels && model;
В нем переопределите метод toString() который будет при его вызове выводить:
"Это объект bus! Он может ехать? 'тут значение свойства canRide' 
У него 'тут значение свойства wheels' колеса и у него модель 'тут значение cвойства model'";
Создайте несколько экземпляров-объектов функции Car и выведите результат метода toString() 
для каждого из них! */

function Car(canRide, wheels, model) {
  this.canRide = canRide, 
  this.wheels  = wheels, 
  this.model   = model
}

Car.prototype.toString = function() {
  return ('Это объект bus! Он может ехать? ' + this.canRide +'! У него ' + this.wheels + ' колеса и у него модель ' + this.model);
}

var bus = new Car('да', 4, 'bogdan');
var bmw = new Car('да', 4, 'bmw');

console.log(bus, bmw);
console.log(bmw.toString());


/* 3 задание
Есть объект ladder
var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
  },
  down: function() { // вниз по лестнице
    this.step--;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
  }
};
Сейчас, для последовательного вызова нескольких методов объекта, нужно делать так сделать так:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой:
ladder.up().up().down().up().down().showStep(); // 1
Такой подход называется «чейнинг» (chaining)
*/

function Ladder() {  
  this.step = 0;
};

Ladder.prototype.up = function(up) {
  this.step++;
  return this;
};

Ladder.prototype.down = function(down) {
  this.step--;
  return this;
};

Ladder.prototype.showStep = function() {
  alert(this.step);
}

new Ladder().up().up().down().up().down().showStep(); // 1


/* 4 задание
Есть два бегуна:
var runner1 = new Runner(); var runner2 = new Runner(); У каждого есть метод step(), 
который делает шаг, увеличивая свойство steps.
Конкретный код метода step() не имеет значения, важно лишь что шаг делается не мгновенно, 
он требует небольшого времени.
Если запустить первого бегуна через setInterval, 
а второго — через вложенный setTimeout — какой сделает больше шагов за 5 секунд? 

// первый?
setInterval(function() {
  runner1.step();
}, 15);

// или второй?
setTimeout(function go() {
  runner2.step();
  setTimeout(go, 15);
}, 15);

setTimeout(function() {
  alert( runner1.steps );
  alert( runner2.steps );
}, 5000);
*/

Первый, т.к. setInterval запускает выполнение функции через указанный интервал времени. 
А setTimeout делает паузу 15 мс между шагами.

/* 5 задание
Найдите время в одном из форматов
Время может быть в формате часы:минуты или часы-минуты. И часы и минуты состоят из двух цифр, 
например 09:00, 21-30.
Напишите регулярное выражение для поиска времени:
var re = /ваше выражение/;
alert( "Завтрак в 09:00. Обед - в 21-30".match(re) ); // 09:00, 21-30
*/

var re = /\d{2}[:-]\d{2}/g;
alert( "Завтрак в 09:00. Обед - в 21-30".match(re) ); // 09:00, 21-30


/* 6 задание
Напишите регулярное выражения для поиска многоточий: трёх или более точек подряд.
Проверьте его:
var reg = /ваше выражение/g;
alert( "Привет!... Как дела?.....".match(reg) ); // ..., ..... */

var reg = /[.]{3,}/g;
alert( "Привет!... Как дела?.....".match(reg) ); 


/* 7 задание
Напишите регулярное выражение для поиска HTML-цвета, заданного как #ABCDEF, то есть # 
и содержит затем 6 шестнадцатеричных символов.
Пример использования:
var re = //...ваше регулярное выражение...
var str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2"
alert( str.match(re) )  // #121212,#AA00ef 
*/

var re = /#[a-f0-9]{6}\b/gi;
var str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2"
alert( str.match(re) )  // #121212,#AA00ef 