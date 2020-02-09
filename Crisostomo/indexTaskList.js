let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let td3Tasks = document.querySelector('#thirdList');
let td2Tasks = document.querySelector('#secondList');
let tdTasks = document.querySelector('#firstList');

let addTask = () => {
    let inputTextTask = document.querySelector('#inputTask').value;
    tasks.push(inputTextTask);
    document.querySelector('#inputTask').value = '';
    localStorage.setItem("tasks", JSON.stringify(tasks));
    listTasks();
}

let listTasks = () => {
    tdTasks.innerHTML = '';
    tasks.forEach(function(item, index) {
        //console.log(item);
        tdTasks.innerHTML += `<li style="list-style: none;" draggable="true" id="drag1" ondragstart="drag(event)">${item}<button class="btn btn-primary" onclick="moveTaskToProgress(${index})">-></button></li>`;
    })
}

let process = JSON.parse(localStorage.getItem('process')) || [];
let moveTaskToProgress = (i) => {
    process.push(tasks[i]);
    tasks.splice(i, 1);
    localStorage.setItem("process", JSON.stringify(process));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    listTasks();
    moveTasks();
}

let moveTasks = () => {
    td2Tasks.innerHTML = '';
    process.forEach(function(item, index) {
        //console.log(item);
        td2Tasks.innerHTML += `<li style="list-style: none;" draggable="true" id="drag2" ondragstart="drag(event)"><button class="btn btn-warning" onclick="moveTaskToMainListAgain(${index})"><-</button>${item}<button class="btn btn-primary" onclick="moveTaskToDone(${index})">-></button></li>`;
    })
}


let done = JSON.parse(localStorage.getItem('done')) || [];
let moveTaskToDone = (i) => {
    done.push(process[i]);
    process.splice(i, 1);
    localStorage.setItem("done", JSON.stringify(done));
    localStorage.setItem("process", JSON.stringify(process));
    moveTaskToProgressAgain();
    moveTasks();
}


let moveTaskToProgressAgain = () => {
    td3Tasks.innerHTML = '';
    done.forEach(function(item, index) {
        console.log(item);
        td3Tasks.innerHTML += `<li style="list-style: none;"><button class="btn btn-warning" onclick="moveTaskBackProgress(${index})"><-</button>${item}</li>`;
    })
}

let moveTaskBackProgress = (i) => {
    process.push(done[i]);
    done.splice(i, 1);
    moveTaskToProgressAgain();
    moveTasks();
}


let moveTaskToMainListAgain = (i) => {
    tasks.push(process[i]);
    process.splice(i, 1);
    localStorage.setItem("process", JSON.stringify(process));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    moveTasks();
    listTasks();
}
listTasks();
moveTasks();
moveTaskToProgressAgain();

//Drag & Drop from 1st list to 2nd list.

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function drop(event) {
    event.preventDefault;
    let data = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(data));
}