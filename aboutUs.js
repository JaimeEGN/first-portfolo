const header = document.querySelector(".header")
const name = document.querySelector(".resName")
const nav = document.querySelector(".nav")
const bar1 = document.querySelector(".nameLine1")
const bar2 = document.querySelector(".nameLine2")

if (window.matchMedia("(max-width: 430px)").matches) {
	name.style.position = "absolute"
	bar1.style.display = "none"
	bar2.style.display = "none"
}

const aboutUs = document.querySelector(".VellerIMG")
const aboutUsText = document.querySelector(".aboutUs")

window.addEventListener("load",()=>{
	setTimeout(()=>{
		aboutUsText.style.animation = "appear 0.5s"
		aboutUs.style.animation = "appear 0.5s"
		aboutUs.style.opacity = "1"
		aboutUsText.style.opacity = "1"
	},500)
	setTimeout(()=>{
		document.querySelector(".wNYT").style.animation = "appear 0.8s"
		document.querySelector(".wNYT").style.opacity = "1"
	},1500)
})