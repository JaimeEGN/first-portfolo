const closeBars =  document.querySelector(".fa-bars")
const header = document.querySelector(".header")
const openbars = document.querySelector(".openBars-container")
const main = document.querySelector(".main")
const body = document.querySelector(".body")

closeBars.addEventListener("click",()=>{
	header.style.top = "-2000px"
})

openbars.addEventListener("click",()=>{
	header.style.display = "flex"
	header.style.top = "0px"
})

const typed = new Typed(".typing_area",{
	strings: [" Free-Lancer"," FrontEnd-Developer"],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true
})


const logo = document.querySelector(".logo")

logo.addEventListener("click",()=>{
	header.style.top = "-2000px"
})

const options = {
	rootMargin: "-150px" 
}

const textUnderline = document.querySelector(".textUnderline")
const aboutMe = document.querySelector(".aboutMe-container")


const incrementWidth = (entries)=>{
	const entry = entries[0]
	if (entry.isIntersecting == true) {
		aboutMe.style.animation = "up 0.5s"
		aboutMe.style.opacity = "1"
		textUnderline.style.animation = "incrementwidth 0.8s"
		setTimeout(()=>{
			aboutMe.style.transform = "translateY(-100px)"
			textUnderline.style.width = "125px"
			document.querySelector(".arrow-container").style.display = "none"
		},500)
	}
}

const observer = new IntersectionObserver(incrementWidth,options)


observer.observe(textUnderline)


document.querySelector(".NewInstagramIcon").addEventListener("click",()=>{
	window.open("https://www.instagram.com/jaimewebdeveloper/")
})
document.querySelector(".NewFacebookIcon").addEventListener("click",()=>{
	window.open("https://www.facebook.com/JaimeEnriqueGonzalvez")
})

document.querySelector(".mouse_scroll").addEventListener("click",()=>{
	document.querySelector(".anchor").scrollIntoView({behavior: "smooth", block: "start" });
})

document.querySelector(".and").addEventListener("click",()=>{
	document.querySelector(".anchor").scrollIntoView({behavior: "smooth", block: "start" });
})