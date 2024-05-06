//1. Створити об'єкт project. У нього є назва, наприклад FaceBook. У нього є developer, у якого є ім'я, прізвище та адреса, а у адреси є країна і місто.
//За допомогою деструктуризації витягнути країну і місто.

const project =
{
    'name': 'NameProject',
    'developer': 'LastNameDev',
    'addressDev': {
        'countryDev': 'Country',
        'sittyDev': 'Sitty',
    }
}

const { name, developer, addressDev: { countryDev, sittyDev } } = project;

console.log(countryDev);
console.log(sittyDev);

//2. Є дані у такому форматі: Ivan;Ivanov;1990;ivanov@gmail.com. Витягнути електронну адресу та рік народження за допомогою деструктуризації.

const inform = 'Ivan;Ivanov;1990;ivanov@gmail.com';

function InformToString(stringInform) {
    const arrayInform = stringInform.split(';');
    const [, , dateBorn, email] = arrayInform;

    return (`User was born:${dateBorn}, his email: ${email}`)
}

console.log(InformToString(inform));

//3. У Map помістити 10 слів англо-українських. У якості ключа англійське слово, у якості значення - українське.
//Наприклад: mother->мама. Користувач вводить слово англійською, програма видає результат українською.

const translator =
{
    'apple': 'яблуко',
    'house': 'будинок',
    'cat': 'кіт',
    'dog': 'пес',
    'tree': 'дерево',
    'sun': 'сонце',
    'book': 'книга',
    'car': 'машина',
    'computer': 'компьютер',
    'school': 'школа',
    toString: function (key) {
        return `${key}: ${this[key]}`;

    }
}

console.log(translator.toString('dog'));

//4. Створити об'єкт телефон за допомогою функції конструктора, у нього є бренд, модель, ціна, колір.
//Створити три об'єкти телефонів. Наприклад: бренд samsung, модель x100, ціна 1000грн, колір червоний.
//При перетворенні(преобразуванні) до рядка потрібно відобразити інформацію: samsung x100 1000грн.

class objectPhone {
    constructor(brend, model, cost, color) {
        this.brend = brend,
            this.model = model,
            this.cost = cost,
            this.color = color,

            this.toString = function () {
                return `Brend: ${brend}, model:${model}, cost:${cost}, color:${color}. }, `;
            };
    }
}

const nokia = new objectPhone('bbbb', 'uuuu', 111, 'jjjj');
console.log(nokia.toString());

//5. Створити функцію, яка приймає будь-яку кількість чисел і обчислює середнє арифметичне, повертаючи його як результат.
//Викликати цю функцію з трьома аргументами та з масивом, в якому три значення.

function average(...args) {
    const result = args.reduce((total, arg) => total + arg, 0);

    return result / args.length;
}

let sum1 = average(11, 13, 16, 66, 83, 90);
console.log(sum1);

const arrayNumbers = [11, 13, 16, 66, 83, 90];
let sum2 = average(...arrayNumbers);
console.log(sum2);

//6. Є масив об'єктів User. У них є ім'я та прізвище. Створити новий масив користувачів на основі старого,
//додавши при цьому до кожного об'єкту властивість isSelected: false.

class userTask6 {
    constructor(name, lastName) {
        this.name = name,
            this.lastName = lastName;
    }
}

us1 = new userTask6('Sonja', 'Lee');
use2 = new userTask6('Jack', 'Hugo');

const arrayTask6 = [];

arrayTask6.push(us1);
arrayTask6.push(use2);

function createArrWithisSelected(array, propertyName, propertyValue) {
    return array.map(obj => {
        newObj = { ...obj };
        newObj[propertyName] = propertyValue;
        return newObj
    })
}

const newArray = createArrWithisSelected(arrayTask6, 'isSelected', false);

console.log(newArray);

//7. При натисканні на кнопку починає працювати таймер від 5 до 1. На екрані повинні відображатися значення таймера (5, 4, 3, 2, 1).
//Після того як таймер зупинився - екран забарвлюється червоним.
//Повторно запустити таймер можна лише після того, як він закінчився. При повторному запуску лічильник починає з початку і екран знову білий.


document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.title');
    const time = document.getElementById('timer');

    title.textContent = "Timer";

    document.getElementById('startButton').addEventListener('click', function() {
        let i = 5; 
        const intervalId = setInterval(function() {
            time.textContent = `${i} second `;
            i--;
            if (i < 0) {
                clearInterval(intervalId); 
                document.body.style.backgroundColor = 'red'; 
            }
        }, 1000);
        this.disabled = true; 
    });
});
