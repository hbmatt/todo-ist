import { Task } from './task'
import { Project } from './project'
import { DOMStuff } from './DOM'

const ApplicationController = (() => {
  let projects = [Project('Default','A Default project')];
  let tasks = [];

  const init = () => {
    DOMStuff.controlNewProject();
    DOMStuff.controlNewTask();
    addNewTask();
    addNewProject();
    DOMStuff.displayAllProjects(projects);
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
      DOMStuff.clickCloseNewTask();
      DOMStuff.displayTaskCol(newTask);
    })
  }

  function addProjectToProjects(project) {
    projects.push(project);
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
      DOMStuff.displayProject(newProject);
      DOMStuff.addProjectToDropdown(newProject);
      DOMStuff.clickCloseNewProject();
      DOMStuff.displayProjectCol(newProject);
    })
  }

  return { init, projects, tasks }
})();

export { ApplicationController }