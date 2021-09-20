const documentBody = document.querySelector("body")
const hamburgerIcon = document.querySelector("#hamburger-icon")
const hamburgerIconLine = Array.from(hamburgerIcon.children)
const navigationMenu = document.querySelector("nav .main_nav")
hamburgerIcon.addEventListener("click", () => {
  documentBody.classList.toggle("overflow-toggle")
  navigationMenu.classList.toggle("main_nav-toggle")
  toggleHamburgerIcon()
})

function toggleHamburgerIcon() {
  hamburgerIconLine[0].classList.toggle("rotate-hamburger-line-1")
  hamburgerIconLine[1].classList.toggle("toggle-hambuger-icon-line")
  hamburgerIconLine[2].classList.toggle("rotate-hamburger-line-3")
}
