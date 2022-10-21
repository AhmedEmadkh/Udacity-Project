// Start global variables
const fatherNav = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const sectionsArray = Array.from(sections);
const anchorList = document.querySelectorAll('a');
const anchorSelector = 'a[href^="#"]';
// End global variables


// Start helper function to create nav list
function createDynamicListBar() {
  for (section of sections) {
    sonNav = document.createElement('li');
    sonNav.innerHTML = `<li><a href="#${section.id}" class = "menu__link ">${section.dataset.nav}</a></li>`
    fatherNav.appendChild(sonNav);
  }
}
createDynamicListBar();
// End helper function to create nav list


// Start Main functions
window.onscroll = function () {
  sections.forEach((active) => {
    if (active.getBoundingClientRect().top >= -300 && active.getBoundingClientRect().top < 100) {
      active.classList.add("active");
    } else {
      active.classList.remove("active");
    }
  })
}
// End Main functions


// Start scrolling smooth behavior

anchorList.forEach((li) => {
  li.addEventListener('click', function (l) {
    l.preventDefault();
    document.querySelector(this.hash).scrollIntoView({ behavior: "smooth" });
  })
})

// End scrolling smooth behavior