document.getElementById('addButton').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  if (taskInput.value.trim() !== "") {
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}