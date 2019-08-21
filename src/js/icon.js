const iconsFilter = [...document.querySelectorAll('.icon-filter')];
const iconsUsed = [...document.querySelectorAll('.used-icon')];
const icons = iconsFilter.concat(iconsUsed);

// filters

const filters = [...document.querySelectorAll('.icon-filter')];
let activeFilters = [];
const projects = [...document.querySelectorAll('.project')];

// filtrowanie projektów
const checkProjects = () => {
  projects.forEach(project => {
    let used = project.getAttribute('data-filters');
    const projectsFilters = used.split(' ');

    // jesli nie ma zadnego filtra wszystkie widoczne
    if (activeFilters.length === 0) {
      project.classList.remove('off');
    } else {
      // forEach - czy kazdy activeFilter jest w projectsFilters,

      for (let i = 0; i <= activeFilters.length - 1; i++) {
        let name = activeFilters[i];
        const index = projectsFilters.indexOf(name);

        if (index !== -1) {
          project.classList.remove('off');
        } else {
          project.classList.add('off');
          return; // jesli nie ma return nie dziala poprawnie filtrowanie (znowu usuwa "off")
        }
      }
    }
  });

  // info - brak wyników po filtrowaniu
  const projectsOff = [...document.querySelectorAll('.project.off')];
  if (projectsOff.length === 8) document.querySelector('.allProjectsOff').classList.add('on');
  else document.querySelector('.allProjectsOff').classList.remove('on');
};

// dodanie filtru do tablicy z aktywnymi filtrami
const addFilter = name => {
  if (activeFilters.indexOf(name) === -1) {
    activeFilters.push(name);
  } else {
    const index = activeFilters.indexOf(name);
    activeFilters.splice(index, 1);
  }
  checkProjects();
};

//  nasluchiwanie na filtry
filters.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('on');
    const name = icon.getAttribute('data-name');
    addFilter(name);
  });
});

// przycisk "projekty" i "w gorę"

$('.header-button').on('click', function() {
  $('body, html').animate(
    {
      scrollTop: $('.projects').offset().top
    },
    1000
  );
});

const button = document.querySelector('.go-up');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > window.innerHeight / 2) {
    button.classList.add('on');
  } else {
    button.classList.remove('on');
  }
});

button.addEventListener('click', () => {
  $('body, html').animate(
    {
      scrollTop: $('header').offset().top
    },
    1000
  );
});
