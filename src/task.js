const Task = (name, desc, dueDate, priority, project) => {
  let status = 0;
  return { name, desc, dueDate, priority, project, status };
};

export { Task };
