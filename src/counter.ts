//
// Задача 1: Об'єднання ізольованих даних
//
// Створіть тип даних Tuple, який містить ім'я користувача (string) і його вік (number). Потім створіть змінну, використовуючи цей тип, і присвойте їй значення.
//
// Задача 2: Фільтрація масиву об'єктів
//
// Напишіть функцію, яка приймає масив об'єктів і рядкову властивість, і повертає новий масив, який містить тільки об'єкти,у яких властивість має задане значення.
//
// Задача 3: Пошук об'єкта за властивістю
//
// Напишіть функцію, яка приймає масив об'єктів і рядкову властивість, і повертає перший об'єкт з масиву, у якого властивість має задане значення.
//
// Задача 4: Розрахунок середнього значення
//
// Напишіть функцію, яка приймає масив об'єктів з числовими властивостями і повертає середнє значення цих властивостей.


//task 1
type Tuple = [string, number];
let Dima: Tuple = ['Dima', 21]
console.log(Dima)

//task 2

interface Person {
    name: string;
    age: number;
    country: string;
}

function getPerson(arr: Person[], property: keyof Person, value: Person[keyof Person]): Person[] {
    return arr.filter(obj => obj[property] === value);
}

let per = ['Dima', 21, 'Ukraine'];
console.log(per)

//task 3
interface Person {
    name: string;
    age: number;
}

function findPerson(arr: Person[], property: keyof Person, value: Person[keyof Person]): Person | undefined {
    return arr.find(person => person[property] === value);
}

//task 4
interface sendN {
    [key: string]: number
}

const sendArr4: sendN[] = [{number: 1}, {number: 19}, {number: 910}, {number: 90}];

const sendArr = (arr: sendN[]): number => {
    const sum: number = arr.reduce((prev, el) => prev + Object.values(el)[0], 0);
    return sum / arr.length
}