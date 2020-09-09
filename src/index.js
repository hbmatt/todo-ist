const newTask = document.getElementById('newtask');
const taskForm = document.getElementById('taskform');
newTask.addEventListener('click', () => {
  taskForm.classList.remove('hide');
});
const closeTask = document.getElementById('closetask');
closeTask.addEventListener('click', () => {
  taskForm.classList.add('hide');
});