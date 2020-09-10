import { ApplicationController } from './application'

const DOMStuff = (() => {
  function showNewTask() {
    const taskForm = document.getElementById('taskform');
    const newTask = document.getElementById('newtask');
    newTask.addEventListener('click', () => {
      taskForm.classList.remove('hide');
    });
  }

  function closeNewTask() {
    const taskForm = document.getElementById('taskform');
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

  function showNewProject() {
    const projectForm = document.getElementById('projectform');
    const newProject = document.getElementById('newproject');
    newProject.addEventListener('click', () => {
      projectForm.classList.remove('hide');
    });
  }
  
  function closeNewProject() {
    const projectForm = document.getElementById('projectform');
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
      if (project.tasks[i].status === 1) {
        task.classList.add('complete');
      };
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

  function displayAllProjects(projects) {
    clearAllProjects();

    for (let i = 0; i < projects.length; i++) {
      displayProject(projects[i]);
    }
  }

  const displayTask = (task) => {
    const project = document.getElementsByClassName('project')[task.project];
    const list = project.querySelector('ul');

    const taskElement = document.createElement('li');
    taskElement.textContent = task.name;
    taskElement.classList.add(task.priority.toLowerCase());
    if (task.status === 1) {
      taskElement.classList.add('complete');
    };
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
      if (project.tasks[i].status === 1) {
        task.classList.add('complete');
      };
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

    para = document.createElement('p');
    key = document.createElement('strong');
    key.textContent = 'Status: ';
    val = (task.status === 1) ? document.createTextNode('Complete') : document.createTextNode('Incomplete');
    para.appendChild(key);
    para.appendChild(val);

    col.appendChild(para);

    const editBtn = document.createElement('button');
    editBtn.classList.add('bg-p');
    editBtn.textContent = 'Edit';

    editBtn.addEventListener('click', () => {
      displayEditTask(task);
      editTask(task);
    });

    col.appendChild(editBtn);

    row.insertBefore(col,add);

    corner.addEventListener('click', () => {
      col.remove();
    });
  }

  const displayEditTask = (task) => {
    const taskEditForm = document.createElement('article');
    taskEditForm.classList.add('col', 'form');
    taskEditForm.setAttribute('id','edittask');

    const corner = document.createElement('div');
    corner.classList.add('corner');
    corner.setAttribute('id','closetaskcol');
    
    const icon = document.createElement('i');
    icon.classList.add('fa','fa-times');

    corner.appendChild(icon);

    taskEditForm.appendChild(corner);

    const title = document.createElement('h1');
    title.textContent = 'Edit Task';

    taskEditForm.appendChild(title);

    const editForm = document.createElement('form');
    editForm.classList.add('f-edit');

    let label = document.createElement('label');
    label.setAttribute('for', 'name');
    label.textContent = 'Name:'
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'name');
    input.setAttribute('id','ename');

    editForm.appendChild(label);
    editForm.appendChild(input);

    label = document.createElement('label');
    label.setAttribute('for', 'desc');
    label.textContent = 'Description:'
    input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'desc');
    input.setAttribute('id','edesc');

    editForm.appendChild(label);
    editForm.appendChild(input);

    label = document.createElement('label');
    label.setAttribute('for', 'dueDate');
    label.textContent = 'Due Date:'
    input = document.createElement('input');
    input.setAttribute('type', 'date');
    input.setAttribute('name', 'dueDate');
    input.setAttribute('id','edue');

    editForm.appendChild(label);
    editForm.appendChild(input);

    label = document.createElement('label');
    label.setAttribute('for', 'priority');
    label.textContent = 'Priority:'
    input = document.createElement('select');
    input.setAttribute('name', 'priority');
    input.setAttribute('id','epriority');

    let option = document.createElement('option');
    option.textContent = 'High';
    input.appendChild(option);

    option = document.createElement('option');
    option.textContent = 'Medium';
    input.appendChild(option);

    option = document.createElement('option');
    option.textContent = 'Low';
    input.appendChild(option);

    editForm.appendChild(label);
    editForm.appendChild(input);

    const completebox = document.createElement('input');
    completebox.setAttribute('type','checkbox');
    completebox.setAttribute('value','1');
    completebox.setAttribute('name','status');
    completebox.classList.add('checkbox');

    const completelabel = document.createElement('label');
    completelabel.setAttribute('for','status');
    completelabel.classList.add('checkbox');
    completelabel.textContent = 'Status';

    editForm.appendChild(completebox);
    editForm.appendChild(completelabel);

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('bg-p');
    submitBtn.textContent = 'Submit';

    editForm.appendChild(submitBtn);

    taskEditForm.appendChild(editForm);

    corner.addEventListener('click', () => {
      taskEditForm.remove();
    });

    const row = document.getElementsByClassName('row')[0];
    const add = document.getElementsByClassName('vcenter')[0];

    row.insertBefore(taskEditForm, add);

    autoFillTask(task);
  }

  const editTask = (task) => {
    const taskEditForm = document.getElementById('edittask');
    const taskForm = taskEditForm.querySelector('form');

    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();

      task.name = document.getElementById('ename').value;
      task.desc = document.getElementById('edesc').value;
      task.dueDate = document.getElementById('edue').value;
      task.priority = document.getElementById('epriority').value;
      task.status = (document.getElementsByName('status')[0].checked) ? 1 : 0;

      taskForm.reset();
      taskEditForm.remove();
      displayAllProjects(ApplicationController.projects);
      displayTaskCol(task);
    })
  }

  function autoFillTask(task) {
    document.getElementById('ename').value = task.name;
    document.getElementById('edesc').value = task.desc;
    document.getElementById('edue').value = task.dueDate;
    document.getElementById('epriority').value = task.priority;
  }

  return { controlNewTask, controlNewProject, displayProject, clearAllProjects, displayAllProjects, displayTask, addProjectToDropdown, clickCloseNewTask, clickCloseNewProject, displayProjectCol, displayTaskCol, displayEditTask };
})();

export { DOMStuff }