const Storage = (() => {
  function storeProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function getProjects() {
    return JSON.parse(localStorage.getItem("projects"));
  }

  function checkStorage() {
    return localStorage.getItem("projects") ? true : false;
  }

  return { storeProjects, getProjects, checkStorage };
})();

export { Storage };
