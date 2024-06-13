// Функция создания кнопок
function getButton(text, classList, type = '') {
   let buttonList = document.createElement('button')
   buttonList.textContent = text
   buttonList.classList.add(classList)
   buttonList.type = type
   return buttonList
}

// Создание коробки
let container = document.createElement('div')
container.classList.add('container')
let title = document.createElement('h1')
title.textContent = 'Планер на день'
title.classList.add('title__text')

// Создание блока input и button
let blockInp = document.createElement('div')
blockInp.classList.add('block__inp')

let input = document.createElement('input')
input.classList.add('input')
input.placeholder = 'Введите задачу'
input.type = 'text'
input.value = ''

let button = document.createElement('button')
button.classList.add('btn')
button.textContent = 'Создать задачу'
button.type = 'submit'

let list = document.createElement('ul')

// Функция получения данных
function getWork(task) {
   let listItem = document.createElement('li')

   let itemText = document.createElement('p')
   itemText.classList.add('do__task')
   itemText.textContent = task

   // Дополнительные кнопки в списке задач
   let blockBtn = document.createElement('div')
   blockBtn.classList.add('action__block')

   // Кнопка выполнения задачи
   let actionDo = getButton('Выполнено', 'complete__btn')

   // Кнопка изменения текста задачи
   let renameBtn = getButton('Изменить', 'action__btn')

   // Кнопка удаления задачи
   let deleteBtn = getButton('Удалить', 'action__btn', 'reset')

   // Выполнение задачи
   actionDo.onclick = function () {
      listItem.classList.add('complete')
      renameBtn.style.display = 'none'
      actionDo.style.display = 'none'
      deleteBtn.style.backgroundColor = '#3c3c3c'
   }

   // Изменить название задачи
   renameBtn.onclick = function () {
      let newTask = prompt('Введите новую задачу', itemText.textContent)
      itemText.textContent = newTask
   }

   // Удаление listItem
   deleteBtn.onclick = function () {
      listItem.remove()
   }

   blockBtn.append(actionDo, renameBtn, deleteBtn) // Коробка кнопок
   listItem.append(itemText, blockBtn)
   return listItem
}

// Функция отправки задачи
button.onclick = function () {
   let task = input.value
   let newTask = getWork(task)
   list.append(newTask)
   input.value = ''
}

// Вывод коробки
document.body.prepend(container)
container.append(title, blockInp, list)
blockInp.append(input, button)
