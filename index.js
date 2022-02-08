let line = "_______________________________";
// --створити масив з:
// - з 5 числових значень
let a = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
let b = ['abcde', 'bcde', 'cde', 'de', 'e'];
// - з 5 значень стрічкового, числового та булевого типу
let c = [1, 2, 'f', 'j', true];
// - та вивести його в консоль
console.log(a);
console.log(b);
console.log(c);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let d = [];
d[0] = 'hello world';
d[1] = '!!! '
d[2] = 123;
console.log(d[0] + d[1] + d[2]);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>Довільний текст всередині</div>')
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(i + '<div>Довільний текст з індексом</div>')
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let g = 0;
while (g < 20) {
    document.write('<h1>Довільний текст всередині</h1>');
    g++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j < 20) {
    document.write(j + '<h1>Довільний текст з індексом</h1>');
    j++;
}

console.log(line);
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
    console.log(arrNumbers[i]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log(line);
let arrStr = ['str1ing', 'str2ing', 'stri3ng', 'st4ring', 'str5ing', 'strin6g', 'str7ing', 'stri8ng', 'str9ing', 'st10ring'];
for (let i = 0; i < 10; i++) {
    console.log(arrStr[i]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log(line);
let arrAll = ['stringALLLLLLL', 'string4', 1, 2, 3, true, false, 4, 'string1', 'string2'];
for (let i = 0; i < 10; i++) {
    console.log(arrAll[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log(line);
for (let i = 0; i < 10; i++) {
    let type = typeof arrAll[i];
    if (type === "boolean") {
        console.log(arrAll[i]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log(line);
for (let i = 0; i < 10; i++) {
    let type = typeof arrAll[i];
    if (type === "number") {
        console.log(arrAll[i]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log(line);
for (let i = 0; i < 10; i++) {
    let type = typeof arrAll[i];
    if (type === "string") {
        console.log(arrAll[i]);
    }
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// console.log(line);
// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = true;
// arr[5] = '1string';
// arr[6] = 'string2';
// arr[7] = false;
// arr[8] = '3string';
// arr[9] = 'string4';
// for (let i = 0; i < 10; i++){
//     // console.log(arr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(line);
// for (let i = 0; i < 10; i++){
    // console.log(i + 1);
    // document.write(i + 1+ '</br>');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(line);
// for (let i = 0; i < 100; i++){
    // console.log(i + 1);
    // document.write(i + 1 + '</br>');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log(line);
// for (let i = 0; i < 100; i+=2){
//     console.log(i + 1);
//     document.write(i + 1 + '</br>');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log(line);
// for (let i = 2; i < 100; i+=2){
//     console.log(i);
//     document.write(i +'</br>');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log(line);
// for (let i = 1; i < 100; i+=2){
//     console.log(i);
//     document.write(i +'</br>');
// }