// створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let btn = document.getElementsByTagName('button');
// btn.onclick = function () {
//     let f1 = document.forms.form.f1.value
//     let f2 = document.forms.form.f2.value
//     let f3 = document.forms.form.f3.value
//     let f4 = document.forms.form.f4.value
//     console.log(f1,f2,f3,f4)
// }


//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let table = document.forms['table'];
// table.onsubmit = function (e) {
//     e.preventDefault();
//     let row = +table.row.value;
//     let column = +table.column.value;
//     let yacheiku = table.yacheiku.value;
//     console.log(row, column, yacheiku)
// }



//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let array = ['fuck', 'shit', 'bla']
// let btn = document.getElementsByTagName('button');
// btn.onclick = function () {
//     let name = document.getElementsByName('in');
//     for (const arrayElement of array) {
//         if (arrayElement === name) {
//             alert('айайайай');
//         }
//     }
// }
