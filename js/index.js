"use strict";

// Selecionando os elementos necessários
const addTaskInput = document.querySelector('.js-add-task');
const addTaskButton = document.querySelector('.js-fa-plus');
const taskContainer = document.querySelector('.tarefas');

// Função para criar um novo elemento de tarefa
function createTask(taskText) {
    // Criar um container para a tarefa
    const taskItem = document.createElement('div');
    taskItem.classList.add('tarefas');

    // Criar o elemento de texto da tarefa
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Criar o botão de deletar
    const deleteButton = document.createElement('i');
    deleteButton.classList.add('fa-solid', 'fa-trash-can');
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });

    // Adicionar o texto e o botão ao container
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);

    // Adicionar o container ao DOM
    taskContainer.parentElement.appendChild(taskItem);
}

// Evento para adicionar nova tarefa ao clicar no botão
addTaskButton.addEventListener('click', () => {
    const taskText = addTaskInput.value.trim();
    if (taskText) {
        createTask(taskText);
        addTaskInput.value = ''; // Limpar o campo de entrada
    }
});

// Permitir adicionar tarefa pressionando "Enter"
addTaskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const taskText = addTaskInput.value.trim();
        if (taskText) {
            createTask(taskText);
            addTaskInput.value = ''; // Limpar o campo de entrada
        }
    }
});
