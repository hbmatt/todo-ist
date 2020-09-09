const newTask = document.getElementById('newtask');
const taskForm = document.getElementById('taskform');
newTask.addEventListener('click', () => {
  taskForm.classList.remove('hide');
});
const closeTask = document.getElementById('closetask');
closeTask.addEventListener('click', () => {
  taskForm.classList.add('hide');
});

const newProject = document.getElementById('newproject');
const projectForm = document.getElementById('projectform');
newProject.addEventListener('click', () => {
  projectForm.classList.remove('hide');
});
const closeProject = document.getElementById('closeproject');
closeProject.addEventListener('click', () => {
  projectForm.classList.add('hide');
});