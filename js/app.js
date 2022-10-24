// Start global variables
const activePage = window.location.pathname;
const navBar = document.querySelector(".navbar__menu")
const navLinks = document.querySelectorAll(".menu__link");
const fatherNav = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const liSelector = document.querySelectorAll("li");
let lastScroll = window.scrollY;

// End global variables


// Start helper function to create nav list
function createDynamicListBar() {
  for (section of sections) {
    sonNav = document.createElement('li');
    sonNav.innerHTML = `<li><a href="#${section.id}" class = "menu__link">${section.dataset.nav}</a></li>`
    fatherNav.appendChild(sonNav);
  }
}
createDynamicListBar();
// End helper function to create nav list


// Start Main functions
window.onscroll = function () {
  for (const sec of sections) {
    let anchorSelector = document.querySelector(`a[href="#${sec.id}"]`);
    if (sec.getBoundingClientRect().top >= -400 && sec.getBoundingClientRect().top < 150) {
      sec.classList.add("active");
      anchorSelector.classList.add('active-li')
    } else {
      sec.classList.remove("active");
      anchorSelector.classList.remove('active-li')
    }
  }
}


// Hidden Nav On Scrolling
window.addEventListener("scroll", () => {
  if (lastScroll < window.scrollY) {
    fatherNav.classList.add('hiddenNav')
  } else {
    fatherNav.classList.remove('hiddenNav')
  }
  lastScroll = window.scrollY;
})




// End Main functions


// Start scrolling smooth behavior

sonNav.addEventListener("click", function (scrollToSec) {
  scrollToSec.preventDefault();
  if (scrollToSec.target.dataset.nav) {
    document.getElementById("section4").scrollIntoView({behavior:"smooth"})
  }
})
