const currentYearOnFooter = document.querySelector("footer [data-current-year]")
const currentYear = new Date().getUTCFullYear()
currentYearOnFooter.textContent = currentYear
// test code

// mobile hamburgerIcon
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

// Image Viewer
const allImageInCurrentPage = Array.from(
  document.querySelectorAll("[data-image]")
)

if (allImageInCurrentPage.length !== 0) {
  allImageInCurrentPage.forEach(imageElement => {
    // zoom effect
    imageElement.addEventListener("mouseenter", e => {
      imageElement.parentElement.classList.add("hover-effect")
    })
    imageElement.addEventListener("mouseleave", e => {
      imageElement.parentElement.classList.remove("hover-effect")
    })

    const zoomIcon = imageElement.nextElementSibling
    zoomIcon.addEventListener("mouseenter", e => {
      zoomIcon.parentElement.classList.add("hover-effect")
    })
    zoomIcon.addEventListener("mouseleave", e => {
      zoomIcon.parentElement.classList.remove("hover-effect")
    })

    // zoom in action
    zoomIcon.addEventListener("click", e => {
      const zoomedImageContainerBackground = document.createElement("div")
      zoomedImageContainerBackground.title =
        "click មួយ​ទៀត​ដើម្បី «បិទរូប»​ វិញ"
      zoomedImageContainerBackground.classList.add("zoom-image-background")

      const zoomedImageContainer = document.createElement("div")
      zoomedImageContainerBackground.append(zoomedImageContainer)
      zoomedImageContainer.classList.add("zoom-image-container")

      const zoomedImage = document.createElement("img")
      zoomedImage.src = imageElement.src
      zoomedImageContainer.append(zoomedImage)

      caculateImageDimension(zoomedImage, zoomedImage.height, zoomedImage.width)

      // close button
      const closeButtonContainer = document.createElement("div")
      closeButtonContainer.classList.add("close-button")
      closeButtonContainer.title = "បិទវិញ"
      const closebutton = document.createElement("img")
      closebutton.src = "/img/closeIcon.svg"
      closeButtonContainer.append(closebutton)
      zoomedImageContainer.append(closeButtonContainer)
      documentBody.append(zoomedImageContainerBackground)

      zoomedImageContainerBackground.addEventListener("click", e => {
        documentBody.removeChild(zoomedImageContainerBackground)
      })
    })
  })
}

// resize zoomed image to fit screen whenever screen is resized
let imageDimension = []
window.addEventListener("resize", e => {
  const zoomedImage = document.querySelector(".zoom-image-container img")
  if (zoomedImage != null) {
    imageDimension.push(zoomedImage.width)
    imageDimension.push(zoomedImage.height)
    caculateImageDimension(zoomedImage, imageDimension[1], imageDimension[0])
  }
})

function caculateImageDimension(image, actualImageHeight, actualImageWidth) {
  const viewPortWidth = window.innerWidth
  const viewPortHeight = window.innerHeight
  if (
    actualImageWidth >= viewPortWidth ||
    actualImageHeight >= viewPortHeight
  ) {
    const judejementRatio =
      (actualImageHeight * viewPortWidth) / actualImageWidth
    if (viewPortHeight >= judejementRatio) {
      image.width = viewPortWidth
      image.height = (actualImageHeight * image.width) / actualImageWidth
    } else {
      image.height = viewPortHeight
      image.width = (actualImageWidth * image.height) / actualImageHeight
    }
  }
}
