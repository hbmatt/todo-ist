const DOMStuff = (() => {
  const taskForm = document.getElementById('taskform');

  function showNewTask() {
    const newTask = document.getElementById('newtask');
    newTask.addEventListener('click', () => {
      taskForm.classList.remove('hide');
    });
  }

  function closeNewTask() {
    const closeTask = document.getElementById('closetask');
    closeTask.addEventListener('click', () => {
      taskForm.classList.add('hide');
    });
  }

  const controlNewTask = () => {
    showNewTask();
    closeNewTask();
  }

  const projectForm = document.getElementById('projectform');

  function showNewProject() {
    const newProject = document.getElementById('newproject');
    newProject.addEventListener('click', () => {
      projectForm.classList.remove('hide');
    });
  }
  
  function closeNewProject() {
    const closeProject = document.getElementById('closeproject');
    closeProject.addEventListener('click', () => {
      projectForm.classList.add('hide');
    });
  }

  const controlNewProject = () => {
    showNewProject();
    closeNewProject();
  }
  

  return { controlNewTask, controlNewProject };
})();

export { DOMStuff }