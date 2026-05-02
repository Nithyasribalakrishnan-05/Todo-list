function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  let li = document.createElement("li");
  li.innerText = task;

  // Mark complete
  li.onclick = function () {
    li.classList.toggle("completed");
    saveTasks();
  };

  // Delete button
  let btn = document.createElement("button");
  btn.innerText = "X";
  btn.onclick = function () {
    li.remove();
    saveTasks();
  };

  li.appendChild(btn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";

  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

function loadTasks() {
  document.getElementById("taskList").innerHTML =
    localStorage.getItem("tasks") || "";
}

loadTasks();
