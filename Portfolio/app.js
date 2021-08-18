const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton () {
      navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

var myName = "Seyifunmi Ojo";
console.log (myName)