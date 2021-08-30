const btnMobile = document.getElementById("btn-mobile")

function toggleMenu(e){
if(e.type === "touchstart") e.preventDefault();

const nav = document.getElementById("nav")
nav.classList.toggle("active")
const active = nav.classList.contains("active")
e.currentTarget.setAttribute("aria-expanded" , active)
if(e) {e.currentTarget.setAttribute("aria-label", "Close Menu")
}else {
  e.currentTarget.setAttribute("aria-label", "Open Menu")
}
}

btnMobile.addEventListener("click" , toggleMenu)
btnMobile.addEventListener("touchstart" , toggleMenu)


