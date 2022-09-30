//Variables for the mobile menu and thank modal
const openMobileMenu = document.getElementById('open-mobile-menu');
const closeMobileMenu = document.getElementById('close-mobile-menu')
const mobileModal = document.getElementById('mobile-modal')
const thankModal = document.getElementById('thank-modal')
const closeThankModal = document.getElementById('thank-modal-btn')

//Variables for the first section of website
const bookmark = document.getElementById('bookmark-icon')
const openPledgeMenu = document.getElementById('back-project')
const closePledgeMenu = document.getElementById('close-main-pledge-menu')

//Buttons and the tier's containers for section 3 of landing page
const smallTierBtn = document.getElementById('small-tier-btn')
const mediumTierBtn = document.getElementById('medium-tier-btn')
const mainFirstTier = document.getElementById('main-first-tier')
const mainSecondTier = document.getElementById('main-second-tier')

//Stats variables (second section of website)
const totalRaised = document.getElementById('total-raised')
const totalBackers = document.getElementById('total-backers')

//variables for the main menu titles
const firstTierActive = document.getElementById('select-first-tier')
const secondTierActive = document.getElementById('select-second-tier')
const thirdTierActive = document.getElementById('select-third-tier')

//Menu pledge with no rewards variables
const sectionNoReward = document.getElementById('first-tier')
const firstPledgeInput = document.getElementById('any-pledge-input')
const firstPledgeBtn = document.getElementById('any-pledge-btn')
const errorMessage = document.getElementById('error-message')

//Menu small pledge variables (>$25)
const sectionFirstPledgeReward = document.getElementById('second-tier')
const secondPledgeInput = document.getElementById('small-pledge-input')
const secondPledgeBtn = document.getElementById('small-pledge-btn')
const errorMessage2 = document.getElementById('error-message2')
const smallPledgeAmountHTML = document.getElementById('small-pledge-amount')
const smallTierAmount = document.getElementById('small-tier-amount')

//Menu medium pledge variables (>$75)
const sectionSecondPledgeReward = document.getElementById('third-tier')
const thirdPledgeInput = document.getElementById('medium-pledge-input')
const thirdPledgeBtn = document.getElementById('medium-pledge-btn')
const errorMessage3 = document.getElementById('error-message3')
const mediumPledgeAmountHTML = document.getElementById('medium-pledge-amount')
const mediumTierAmount = document.getElementById('medium-tier-amount')

//Extras
const resetBtn = document.getElementById('resetBtn')

//Global variables for section 2, amount of pledges, and active states.
let backer = 5007
if (!localStorage.getItem('backerAmount')) {
  totalBackers.textContent = backer
}else {
  totalBackers.textContent = JSON.parse(localStorage.getItem('backerAmount'))
}
let totalMoney = 69420
if (!localStorage.getItem('moneyRaised')) {
  totalRaised.textContent = `$${totalMoney}`
}else {
  totalRaised.textContent = "$" + JSON.parse(localStorage.getItem('moneyRaised'))
}
let smallPledgesLeft = 2
if (localStorage.getItem('smallPledges')) {
  smallPledgesLeft = JSON.parse(localStorage.getItem('smallPledges'))
  smallPledgeAmountHTML.textContent = `${smallPledgesLeft}`
  smallTierAmount.textContent = JSON.parse(localStorage.getItem('smallPledges'))
}else {
  smallPledgeAmountHTML.textContent = `${smallPledgesLeft}`
  smallTierAmount.textContent = `${smallPledgesLeft}`
}
let mediumPledgesLeft = 2
if (localStorage.getItem('mediumPledges')) {
  mediumPledgesLeft = JSON.parse(localStorage.getItem('mediumPledges'))
  mediumPledgeAmountHTML.textContent = `${mediumPledgesLeft}`
  mediumTierAmount.textContent = JSON.parse(localStorage.getItem('mediumPledges'))
}else {
  mediumPledgeAmountHTML.textContent = `${mediumPledgesLeft}`
  mediumTierAmount.textContent = `${mediumPledgesLeft}`
}
let bookmarked = false
let tierSelected = false

openMobileMenu.addEventListener('click', () => {
  document.getElementById('mobile-overlay').classList.remove('display-off')
  openMobileMenu.classList.add('display-off')
  mobileModal.style.animationName = "slideDown"
  mobileModal.style.animationDuration = "1.5s"
  setTimeout(() => mobileModal.style.removeProperty('animation'), 1500)
})

closeMobileMenu.addEventListener('click', () => {
  mobileModal.style.animation = "slideDown 1.5s reverse"
  setTimeout(() => {
    mobileModal.style.removeProperty('animation')
    document.getElementById('mobile-overlay').classList.add('display-off')
    openMobileMenu.classList.remove('display-off')
  }, 1500)
})

const checkIfBookmarked = () => {
  if (!bookmarked) {
    bookmark.style.filter = "invert(67%) sepia(37%) saturate(678%) hue-rotate(127deg) brightness(87%) contrast(85%)"
    document.getElementById('bookmark-text').textContent = "Bookmarked"
    document.getElementById('bookmark-text').style.color = "var(--LIGHT-CYAN)"
    bookmarked = true
    localStorage.setItem('bookmarkBool', JSON.stringify(bookmarked))
  }else {
    bookmark.style.removeProperty('filter')
    document.getElementById('bookmark-text').textContent = "Bookmark"
    document.getElementById('bookmark-text').style.color = "var(--DARK-GRAY)"
    bookmarked = false
    localStorage.setItem('bookmarkBool', JSON.stringify(bookmarked))
  }
}

bookmark.addEventListener('click', () => {
  checkIfBookmarked()
})


openPledgeMenu.addEventListener('click', () => {
  document.getElementById('main-pledge-menu').classList.remove('display-off')
})

closePledgeMenu.addEventListener('click', () => {
  document.getElementById('main-pledge-menu').classList.add('display-off')
})

// arrow function when user choose tier or click section 3 buttons
const selectingTierLevel = (tierLevel, pledgeAmount, selector) => {
  //The reason you have to doubleclick is because you are
  //- setting tierselected to true. I don't think there's 
  //any reason for this so i removed it
  // if (!tierSelected) {
    document.getElementById('main-pledge-menu').classList.remove('display-off')
    document.getElementById(tierLevel).style.border = "1px solid var(--LIGHT-CYAN)"
    document.getElementById(pledgeAmount).classList.remove('display-off')
    document.getElementById(selector).classList.remove('display-off')
    // tierSelected = true
  // } else {
  //   document.getElementById(tierLevel).style.border = "1px solid var(--LIGHT-GRAY)"
  //   document.getElementById(pledgeAmount).classList.add('display-off')
  //   document.getElementById(selector).classList.add('display-off')
  //   tierSelected = false  
  // }
}

//The two buttons on section 3 of the landing page to open the main menu on the right pledge
smallTierBtn.addEventListener('click', () => selectingTierLevel("second-tier", "small-pledge", "selector2"))
mediumTierBtn.addEventListener('click', () => selectingTierLevel("third-tier", "medium-pledge", "selector3"))
// Title containers of each pledge of main menu to activate it.
firstTierActive.addEventListener('click', () => selectingTierLevel("first-tier", "any-pledge", "selector1"))
secondTierActive.addEventListener('click', () => selectingTierLevel("second-tier", "small-pledge", "selector2"))
thirdTierActive.addEventListener('click', () => selectingTierLevel("third-tier", "medium-pledge", "selector3"))


const progressBarWidth = () => {
  let width = localStorage.getItem('moneyRaised') === null ? (totalMoney * 100) / 100000
    : (localStorage.getItem('moneyRaised') * 100) / 100000
  if (width > 100) {
    width = 100
  }
  localStorage.setItem('progressWidth', JSON.stringify(width))
  return document.getElementById('progress-bar').style.width = `${JSON.parse(localStorage.getItem('progressWidth'))}%`
}


const mainFunction = (inputTier, keyName, sectionUnavailable, pledgeComponents, selector, mainTier, xTierBtn, yTierBtn) => {
    setTimeout(() => inputTier.value = "", 500)
    setTimeout(() => document.getElementById('main-pledge-menu').classList.add('display-off'), 1500)
    setTimeout(() => thankModal.classList.remove('display-off'), 2000)
    totalMoney += parseInt(inputTier.value)
    localStorage.setItem('moneyRaised', JSON.stringify(totalMoney))
    totalRaised.textContent = "$" + JSON.parse(localStorage.getItem('moneyRaised'))
    progressBarWidth()
    backer++
    localStorage.setItem("backerAmount", JSON.stringify(backer))
    totalBackers.textContent = JSON.parse(localStorage.getItem('backerAmount'))
    if (localStorage.getItem(keyName) < 1) {
      setTimeout(() => {
      sectionUnavailable.style.opacity = "0.5"
      sectionUnavailable.style.pointerEvents = "none"
      sectionUnavailable.style.border = "1px solid var(--LIGHT-GRAY)"
      document.getElementById(pledgeComponents).classList.add('display-off')
      document.getElementById(selector).classList.add('display-off')
      mainTier.style.opacity = "0.6"
      mainTier.style.pointerEvents = "none"
      xTierBtn.textContent = "Out of stock"
      yTierBtn.textContent = "Out of stock"
      xTierBtn.style.backgroundColor = "var(--DARK-GRAY)"
      yTierBtn.style.backgroundColor = "var(--DARK-GRAY)"
      resetBtn.classList.remove('display-off')
      }, 1000)
  }
}

window.addEventListener('DOMContentLoaded', () => {
  progressBarWidth()
  if (JSON.parse(localStorage.getItem('moneyRaised'))) {
    totalMoney = JSON.parse(localStorage.getItem('moneyRaised'))
  }
  if (localStorage.getItem('smallPledges') < 1 && localStorage.getItem('smallPledges') !== null) {
    sectionFirstPledgeReward.style.opacity = "0.5"
    sectionFirstPledgeReward.style.pointerEvents = "none"
    sectionFirstPledgeReward.style.border = "1px solid var(--LIGHT-GRAY)"
    document.getElementById("small-pledge").classList.add('display-off')
    document.getElementById("selector2").classList.add('display-off')
    mainFirstTier.style.opacity = "0.6"
    mainFirstTier.style.pointerEvents = "none"
    smallTierBtn.textContent = "Out of stock"
    smallTierBtn.style.backgroundColor = "var(--DARK-GRAY)"
    resetBtn.classList.remove('display-off')
  }
  if (localStorage.getItem('mediumPledges') < 1 && localStorage.getItem('mediumPledges') !== null) {
    sectionSecondPledgeReward.style.opacity = "0.5"
    sectionSecondPledgeReward.style.pointerEvents = "none"
    sectionSecondPledgeReward.style.border = "1px solid var(--LIGHT-GRAY)"
    document.getElementById("medium-pledge").classList.add('display-off')
    document.getElementById("selector3").classList.add('display-off')
    mainSecondTier.style.opacity = "0.6"
    mainSecondTier.style.pointerEvents = "none"
    mediumTierBtn.textContent = "Out of stock"
    mediumTierBtn.style.backgroundColor = "var(--DARK-GRAY)"
    resetBtn.classList.remove('display-off')
  }
  if (JSON.parse(localStorage.getItem('bookmarkBool'))) {
  bookmarked === true
  checkIfBookmarked()
  }else {
  bookmarked === false
  }
})

closeThankModal.addEventListener('click', () => {
  thankModal.classList.add('display-off')
})

firstPledgeBtn.addEventListener('click', () => {
  if (firstPledgeInput.value < 1) {
    errorMessage.classList.remove('display-off')
    firstPledgeInput.style.border = "1px solid red"
  }else {
    mainFunction(firstPledgeInput)
  }
})

secondPledgeBtn.addEventListener('click', () => {
  if (secondPledgeInput.value < 25) {
    errorMessage2.classList.remove('display-off')
    secondPledgeInput.style.border = "1px solid red"
  }else {
  smallPledgesLeft--
  localStorage.setItem('smallPledges', JSON.stringify(smallPledgesLeft))
  smallPledgeAmountHTML.textContent = JSON.parse(localStorage.getItem('smallPledges'))
  smallTierAmount.textContent = JSON.parse(localStorage.getItem('smallPledges')) 
  mainFunction(secondPledgeInput, 'smallPledges', sectionFirstPledgeReward, "small-pledge", "selector2", mainFirstTier, smallTierBtn, smallTierBtn)
  }
})

thirdPledgeBtn.addEventListener('click', () => {
  if (thirdPledgeInput.value < 75) {
    errorMessage3.classList.remove('display-off')
    thirdPledgeInput.style.border = "1px solid red"
  }else {
  mediumPledgesLeft--
  localStorage.setItem('mediumPledges', JSON.stringify(mediumPledgesLeft))
  mediumPledgeAmountHTML.textContent = JSON.parse(localStorage.getItem('mediumPledges'))
  mediumTierAmount.textContent = JSON.parse(localStorage.getItem('mediumPledges')) 
  mainFunction(thirdPledgeInput, 'mediumPledges', sectionSecondPledgeReward, "medium-pledge", "selector3", 
    mainSecondTier, mediumTierBtn, mediumTierBtn)
  }
})

resetBtn.addEventListener('click', () => {
  localStorage.clear()
  location.reload()
})



