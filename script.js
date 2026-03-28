import { generateId } from "./generateRandomId.js";

let toDoListArray = [];
document.getElementById("newTaskForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(this);
    const task = data.get("input");
    const taskId = generateId();
    console.log(taskId);
    toDoListArray.push({ id: taskId, task: task.toString() });

    if (task) {
        const taskItem = document.getElementById("taskItemElement").cloneNode(true);
        taskItem.id = "";
        taskItem.querySelector(".unfinishedTaskContent").innerText = task;
        taskItem.querySelector(".finishedTaskContent").innerText = task;
        taskItem.querySelector(".taskItem.checkbox").addEventListener("click", function () {
            if (this.checked) {
                taskItem.querySelector(".finishedTaskContent").style.display = "revert";
                taskItem.querySelector(".unfinishedTaskContent").style.display = "none";
            } else {
                taskItem.querySelector(".finishedTaskContent").style.display = "none";
                taskItem.querySelector(".unfinishedTaskContent").style.display = "revert";
            }

        });
        document.getElementById("tasksZone").appendChild(taskItem);
    }
    document.getElementById("newTaskForm").querySelector("input[name='input']").value = "";
});

