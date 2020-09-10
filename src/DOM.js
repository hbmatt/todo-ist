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
  
  const displayProject = (name, tasks) => {
    const div = document.createElement('div');
    div.classList.add('project');
    const title = document.createElement('h2');
    title.textContent = name;
    const list = document.createElement('ul');

    for (let i = 0; i < tasks.length; i++) {
      let task = document.createElement('li');
      task.textContent = tasks[0].name;
      list.appendChild(task);
    };

    div.appendChild(title);
    div.appendChild(list);

    const sidebar = document.getElementsByClassName('col')[0];
    const add = document.getElementById('add');

    sidebar.insertBefore(div, add)
  }

  const clearAllProjects = () => {
    document.querySelectorAll(".col .project").forEach(el => el.remove());
  }

  const displayTask = (task) => {
    const project = document.getElementsByClassName('project')[task.project];
    const list = project.querySelector('ul');

    const taskElement = document.createElement('li');
    taskElement.textContent = task.name;
    list.appendChild(taskElement);
  }

  return { controlNewTask, controlNewProject, displayProject, clearAllProjects, displayTask };
})();

export { DOMStuff }