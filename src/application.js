import { Task } from './task'
import { Project } from './project'
import { DOMStuff } from './DOM'
import { Storage } from './storage'

const ApplicationController = (() => {
  let projects = [Project('Default','A Default project')];

  const init = () => {
    if (Storage.checkStorage() == true) {
      projects = Storage.getProjects();
    } else {
      Storage.storeProjects(projects);
    }
    DOMStuff.controlNewProject();
    DOMStuff.controlNewTask();
    addNewTask();
    addNewProject();
    DOMStuff.displayAllProjects(projects);
  }

  function addTasktoProject(task, project) {
    projects[project].tasks.push(task);
  }

  const addNewTask = () => {
    const taskForm = document.getElementsByClassName('f-task')[0];
    DOMStuff.addAllProjectsToDropdown(projects);

    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('tname').value;
      const desc = document.getElementById('tdesc').value;
      const dueDate = document.getElementById('tdue').value;
      const priority = document.getElementById('tpriority').value;
      const project = document.getElementById('tproject').value;

      let newTask = Task(name, desc, dueDate, priority, project);

      taskForm.reset();

      addTasktoProject(newTask, project);

      Storage.storeProjects(projects);
      
      DOMStuff.displayTask(newTask);
      DOMStuff.clickCloseNewTask();
      DOMStuff.displayTaskCol(newTask);
    })
  }

  function addProjectToProjects(project) {
    projects.push(project);
  }

  const addNewProject = () => {
    const projectForm = document.getElementsByClassName('f-project')[0];

    projectForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('pname').value;
      const desc = document.getElementById('pdesc').value;

      let newProject = Project(name, desc);

      projectForm.reset();

      addProjectToProjects(newProject);
      newProject.id = projects.length - 1;

      Storage.storeProjects(projects);

      DOMStuff.displayProject(newProject);
      DOMStuff.addProjectToDropdown(newProject);
      DOMStuff.clickCloseNewProject();
      DOMStuff.displayProjectCol(newProject);
    })
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
      Storage.storeProjects(projects);
      DOMStuff.displayAllProjects(projects);
      DOMStuff.displayTaskCol(task);
    })
  }

  const deleteTask = (task) => {
    const project = projects[task.project];
    project.tasks.splice(project.tasks.indexOf(task), 1);

    Storage.storeProjects(projects);
    DOMStuff.displayAllProjects(projects);
    DOMStuff.removeTaskDisplay();
  }

  const deleteProject = (project) => {
    projects.splice(project.id, 1);

    Storage.storeProjects(projects);
    DOMStuff.displayAllProjects(projects);
    DOMStuff.removeProjectDisplay();
  }

  return { init, projects, editTask, deleteTask, deleteProject }
})();

export { ApplicationController }