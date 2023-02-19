const expandNav = document.querySelector(".navbar-toggler-icon")

document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', event => {
   		document.querySelector(".responsive-nav").classList.toggle("collapsedNav")
  })
})


expandNav.addEventListener("click",()=>{
	document.querySelector(".responsive-nav").classList.toggle("collapsedNav")
})