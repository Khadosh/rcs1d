let tasks = [];
let td3Tasks = document.querySelector('#thirdList');
let td2Tasks = document.querySelector('#secondList');
let tdTasks = document.querySelector('#firstList');

let addTask = () => {
    let inputTextTask = document.querySelector('#inputTask').value;
    tasks.push(inputTextTask);
    document.querySelector('#inputTask').value = '';
    listTasks();
}

let listTasks = () => {
    tdTasks.innerHTML = '';
    tasks.forEach(function(item, index) {
        //console.log(item);
        tdTasks.innerHTML += `<li style="list-style: none;">${item}<button class="btn btn-primary" onclick="moveTaskToProgress(${index})">-></button></li>`;
    })
}

let process = [];
let moveTaskToProgress = (i) => {
    process.push(tasks[i]);
    tasks.splice(i, 1);
    listTasks();
    moveTasks();
}

let moveTasks = () => {
    td2Tasks.innerHTML = '';
    process.forEach(function(item, index) {
        //console.log(item);
        td2Tasks.innerHTML += `<li style="list-style: none;">${item}<button class="btn btn-primary" onclick="moveTaskToDone(${index})">-></button></li>`;
    })
}

moveTasks();


let done = [];

let moveTaskToDone2 = (i) => {
    done.push(process[i]);
    process.splice(i, 1);
    moveTaskToProgress();
    moveTaskToDone();

}

let moveTaskToDone = () => {
    td3Tasks.innerHTML = '';
    done.forEach(function(item, index) {
        console.log(item);
        td3Tasks.innerHTML += `<li>${item}(${index})</li>`;
    })
}

moveTaskToDone();

/*
function btnAddFunction() {
    let text = document.querySelector("#inputTask").value;
    let list = `<td> ${text} </td>`;
    const nodo = JSON.parse(list);
    document.querySelector("#firstList").appendChild(nodo);
}

function moveTaskInProgress() {

}

function moveTaskCompleted() {

}
*/