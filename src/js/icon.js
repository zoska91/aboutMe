const iconsFilter = [...document.querySelectorAll(".icon-filter")];
const iconsUsed = [...document.querySelectorAll(".used-icon")];
const icons = iconsFilter.concat(iconsUsed);

icons.forEach(icon => {
  let name = icon.getAttribute("data-name");
  name = name + ".png";
  icon.style.backgroundImage = `url('./../src/images/${name}')`;
});

// filters

const filters = [...document.querySelectorAll(".icon-filter")];
let activeFilters = [];
const projects = [...document.querySelectorAll(".project")];

const checkProjects = () => {
  projects.forEach(project => {
    let used = project.getAttribute("data-filters");
    const projectsFilters = used.split(" ");

    // forEach - czy kazdy activeFilter jest w projectsFilters,

    for (let i = 0; i <= activeFilters.length; i++) {
      let name = activeFilters[i];
      name = name.substring(0, name.indexOf("-"));
      console.log(name);
      const index = projectsFilters.indexOf(name);
      console.log(index);
    }
  });
};

const addFilter = name => {
  if (activeFilters.indexOf(name) === -1) {
    activeFilters.push(name);
  } else {
    const index = activeFilters.indexOf(name);
    activeFilters.splice(index, 1);
  }
  checkProjects();
};

filters.forEach(icon => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("on");
    const name = icon.getAttribute("data-name");
    addFilter(name);
  });
});
