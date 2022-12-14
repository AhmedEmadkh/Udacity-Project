// Start global variables
const navBar = document.querySelector(".navbar__menu")
const navLinks = document.querySelectorAll(".menu__link");
const fatherNav = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const liSelector = document.querySelectorAll("li a");
let lastScroll = window.scrollY;

// End global variables

/* *****************This is my CODE************** */
// Start helper function to create nav list
function createDynamicListBar() {
  for (const section of sections) {
    // Creating Li elemlent
    sonNav = document.createElement('li');
    sonNav.innerHTML = `<li><a href="#${section.id}" class = "menu__link">${section.dataset.nav}</a></li>`
    fatherNav.appendChild(sonNav);
    // Smooth scroll on clicking
    sonNav.addEventListener('click',(li)=>{
      // console.log('click')
      // Preventing Degault
      li.preventDefault();
      // Adding smooth behavior 
      section.scrollIntoView({behavior:'smooth'})
    })
  }
}
// Activating the function
createDynamicListBar();
// End helper function to create nav list


// Start Main functions
window.onscroll = function () {
  for (const sec of sections) {
    let anchorSelector = document.querySelector(`a[href="#${sec.id}"]`);
    //adding height for the window for adding active class
    if (sec.getBoundingClientRect().top >= -400 && sec.getBoundingClientRect().top < 150) {
      sec.classList.add("active");
      anchorSelector.classList.add('active-li')
      //adding height for the window for removing active class
    } else {
      sec.classList.remove("active");
      anchorSelector.classList.remove('active-li')
    }
  }
}


// // Hidden Nav On Scrolling Event Listener


// window.addEventListener("scroll", () => {
//   if (lastScroll < window.scrollY) {
//     // Adding class for the nav for hidding
//     fatherNav.classList.add('hiddenNav')
//   } else {
//    // removing class for the nav for hidding
//     fatherNav.classList.remove('hiddenNav')
//   }
//   lastScroll = window.scrollY;
// })




// End Main functions

