// - Создать произвольный елемент с id = text.  Используя JavaScript,
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let id = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//     id.style.display = 'none'
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.getElementById('button');
// button.onclick = function () {
//     button.style.display = 'none'
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let id = document.getElementById('button');
// id.onclick = function () {
//     let ages = document.getElementById('age').value;
//     if (ages <= 17) {
//         alert('Маленький')
//     } else if (ages >= 18) {
//         alert('Підходиш')
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике


// let menu = document.querySelector('.menu');
// let btn = document.querySelector('.btn');
// btn.onclick = function () {
// let element = document.querySelector('.main');
//     element.classList.toggle('hidden')
// }

//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let array = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// ]
// for (const arrayElement of array) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('coments')
//     document.body.appendChild(divElement)
//     let title = document.createElement('h1');
//     title.innerText = arrayElement.title
//     divElement.appendChild(title);
//     let body = document.createElement('p');
//     body.innerText = arrayElement.body;
//     divElement.appendChild(body)
//     let button = document.createElement('button');
//     button.innerText = 'click'
//     button.onclick = function () {
//         body.classList.toggle('hidden')
//     }
//     divElement.appendChild(button)
//
//
// }

