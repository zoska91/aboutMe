const iconsFilter = [...document.querySelectorAll(".icon-filter")];
const iconsUsed = [...document.querySelectorAll(".used-icon")];
const icons = iconsFilter.concat(iconsUsed);

icons.forEach(icon => {
  let name = icon.getAttribute("data-name");
  name = name + ".png";
  icon.style.backgroundImage = `url('./../src/images/${name}')`;
});
