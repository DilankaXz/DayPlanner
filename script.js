document.addEventListener('DOMContentLoaded', function() {
  loadTasks(); // Load tasks when the DOM content is loaded
  document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var time = document.getElementById('timeInput').value;
    var task = document.getElementById('taskInput').value;

    if (time && task) {
      addTask(time, task);
      saveTask(time, task); // Save task to localStorage
      document.getElementById('timeInput').value = '';
      document.getElementById('taskInput').value = '';
    } else {
      alert('Please enter both time and task.');
    }
  });
});

function loadTasks() {
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(function(task) {
    addTask(task.time, task.task);
  });
}

function saveTask(time, task) {
  var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({ time: time, task: task });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(time, task) {
  var taskList = document.getElementById('taskList');
  var li = document.createElement('li');
  var label = document.createElement('label');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  var text = document.createTextNode(time + ' - ' + task);
  label.appendChild(checkbox);
  label.appendChild(text);
  li.appendChild(label);
  taskList.appendChild(li);
}
