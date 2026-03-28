let tasks = 0;
document.getElementById("newTaskForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(this);
    const task = data.get("input");
    if (task) {
        tasks++;
        const taskItem = document.getElementById("taskItemElement").cloneNode(true);
        taskItem.id = "";
        taskItem.querySelector(".unfinishedTaskContent").innerText = task;
        taskItem.querySelector(".finishedTaskContent").innerText = task;
        taskItem.querySelector(".taskItem.checkbox").addEventListener("click", function () {
            if (this.checked) {
                tasks--;
                taskItem.querySelector(".finishedTaskContent").style.display = "revert";
                taskItem.querySelector(".unfinishedTaskContent").style.display = "none";
            } else {
                tasks++;
                taskItem.querySelector(".finishedTaskContent").style.display = "none";
                taskItem.querySelector(".unfinishedTaskContent").style.display = "revert";
            }

        });
        document.getElementById("tasksZone").appendChild(taskItem);
    }
    document.getElementById("newTaskForm").querySelector("input[name='input']").value = "";
});
window.addEventListener("beforeunload", function (e) {
    if (tasks > 0) {
        e.preventDefault();
        e.returnValue();
    }
})

