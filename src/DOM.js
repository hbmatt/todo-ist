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

  const clickCloseNewTask = () => {
    const closeTask = document.getElementById('closetask');
    closeTask.click();
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

  const clickCloseNewProject = () => {
    const closeProject = document.getElementById('closeproject');
    closeProject.click();
  }

  function addProjectListener(div, project) {
    div.addEventListener('click', () => {
      displayProjectCol(project);
    })
  }
  
  function addTaskListener(div, task) {
    div.addEventListener('click', () => {
      displayTaskCol(task);
    })
  }

  const displayProject = (project) => {
    const div = document.createElement('div');
    div.classList.add('project');

    const title = document.createElement('h2');
    title.textContent = project.name;
    addProjectListener(title, project);

    const list = document.createElement('ul');

    for (let i = 0; i < project.tasks.length; i++) {
      let task = document.createElement('li');
      task.textContent = project.tasks[i].name;
      task.classList.add(project.tasks[i].priority.toLowerCase());
      addTaskListener(task, project.tasks[i]);
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
    taskElement.classList.add(task.priority.toLowerCase());
    addTaskListener(taskElement, task);
    list.appendChild(taskElement);
  }

  const addProjectToDropdown = (project) => {
    const dropdown = document.getElementById('tproject');
    const option = document.createElement('option');
    option.setAttribute('value',`${project.id}`);
    option.textContent = project.name;
    dropdown.appendChild(option);
  }

  const displayProjectCol = (project) => {
    if (document.getElementById('projectdisplay') !== null) {
      document.getElementById('projectdisplay').remove();
    };

    const row = document.getElementsByClassName('row')[0];
    const add = document.getElementsByClassName('vcenter')[0];

    const col = document.createElement('article');
    col.classList.add('col');
    col.setAttribute('id','projectdisplay');

    const corner = document.createElement('div');
    corner.classList.add('corner');
    corner.setAttribute('id','closeprojectcol');
    
    const icon = document.createElement('i');
    icon.classList.add('fa','fa-times');

    corner.appendChild(icon);

    const title = document.createElement('h1');
    title.textContent = project.name;

    const desc = document.createElement('p');
    desc.textContent = project.desc;

    const divider = document.createElement('hr');

    const list = document.createElement('ul');

    for (let i = 0; i < project.tasks.length; i++) {
      let task = document.createElement('li');
      task.textContent = project.tasks[i].name;
      task.classList.add(project.tasks[i].priority.toLowerCase());
      addTaskListener(task, project.tasks[i]);
      list.appendChild(task);
    };

    col.appendChild(corner);
    col.appendChild(title);
    col.appendChild(desc);
    col.appendChild(divider);
    col.appendChild(list);
    
    row.insertBefore(col,add);

    corner.addEventListener('click', () => {
      col.remove();
    });
  }

  const displayTaskCol = (task) => {
    if (document.getElementById('taskdisplay') !== null) {
      document.getElementById('taskdisplay').remove();
    };

    const row = document.getElementsByClassName('row')[0];
    const add = document.getElementsByClassName('vcenter')[0];

    const col = document.createElement('article');
    col.classList.add('col');
    col.setAttribute('id','taskdisplay');

    const corner = document.createElement('div');
    corner.classList.add('corner');
    corner.setAttribute('id','closetaskcol');
    
    const icon = document.createElement('i');
    icon.classList.add('fa','fa-times');

    corner.appendChild(icon);

    const title = document.createElement('h1');
    title.textContent = task.name;

    const desc = document.createElement('p');
    desc.textContent = task.desc;

    const divider = document.createElement('hr');

    col.appendChild(corner);
    col.appendChild(title);
    col.appendChild(desc);
    col.appendChild(divider);
    
    let para = document.createElement('p');
    let key = document.createElement('strong');
    key.textContent = 'Due: ';
    let val = document.createTextNode(`${task.dueDate}`);
    para.appendChild(key);
    para.appendChild(val);

    col.appendChild(para);

    para = document.createElement('p');
    key = document.createElement('strong');
    key.textContent = 'Priority: ';
    val = document.createTextNode(`${task.priority}`);
    para.appendChild(key);
    para.appendChild(val);

    col.appendChild(para);

    row.insertBefore(col,add);

    corner.addEventListener('click', () => {
      col.remove();
    });
  }

  return { controlNewTask, controlNewProject, displayProject, clearAllProjects, displayTask, addProjectToDropdown, clickCloseNewTask, clickCloseNewProject, displayProjectCol, displayTaskCol };
})();

export { DOMStuff }