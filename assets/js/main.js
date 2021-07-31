/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show') // Deletes if we have that class
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  navLink.forEach((l) => l.classList.remove('active'))
  this.classList.add('active')

  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach((l) => l.addEventListener('click', linkAction))
