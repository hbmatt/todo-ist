const Task = (name, desc, dueDate, priority, project) => {
  return { name, desc, dueDate, priority, project };
};

const Project = (name, desc) => {
  const tasks = [];

  return { name, desc, tasks };
};