const Project = (name, desc) => {
  let tasks = [];
  let id = 0;

  const addTask = (task) => {
    tasks.push(task);
  };

  return { name, desc, id, addTask, tasks };
};

export { Project };
