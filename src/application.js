import { Task } from './task'
import { Project } from './project'
import { DOMStuff } from './DOM'

const ApplicationController = (() => {
  let projects = [Project('Default','A Default project')];
  let tasks = [];

  const init = () => {
    addNewTask();
    addNewProject();
    displayAllProjects();
  }

  function addTaskToTasks(task) {
    tasks.push(task);
  }

  function addTasktoProject(task, project) {
    projects[project].addTask(task);
  }

  const addNewTask = () => {
    const taskForm = document.getElementsByClassName('f-task')[0];

    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('tname').value;
      const desc = document.getElementById('tdesc').value;
      const dueDate = document.getElementById('tdue').value;
      const priority = document.getElementById('tpriority').value;
      const project = document.getElementById('tproject').value;

      let newTask = Task(name, desc, dueDate, priority, project);

      taskForm.reset();

      addTaskToTasks(newTask);
      addTasktoProject(newTask, project);
      
      DOMStuff.displayTask(newTask);
    })
  }

  function addProjectToProjects(project) {
    projects.push(project);
    console.log(projects);
    return projects.length - 1
  }

  const addNewProject = () => {
    const projectForm = document.getElementsByClassName('f-project')[0];

    projectForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('pname').value;
      const desc = document.getElementById('pdesc').value;

      let newProject = Project(name, desc);

      projectForm.reset();

      newProject.id = addProjectToProjects(newProject);
      displayNewProject(newProject);
    })
  }

  function displayAllProjects() {
    DOMStuff.clearAllProjects;

    for (let i = 0; i < projects.length; i++) {
      DOMStuff.displayProject(projects[i].name, projects[i].tasks);
    }
  }

  function displayNewProject(project) {
    DOMStuff.displayProject(project.name, project.tasks);
  }

  return { init }
})();

export { ApplicationController }