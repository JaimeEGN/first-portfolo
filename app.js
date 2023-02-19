const header = document.querySelector(".header")
const name = document.querySelector(".resName")
const bar1 = document.querySelector(".nameLine1")
const bar2 = document.querySelector(".nameLine2")
const nav = document.querySelector(".nav")
const goFullMenu = document.querySelector(".goFullMenu")

if (window.matchMedia("(max-width: 430px)").matches) {
	name.style.position = "absolute"
	bar1.style.display = "none"
	bar2.style.display = "none"
}


if (window.matchMedia("(min-width: 637px)").matches) {
	
	const options = {
	rootMargin: "-100px" 
}


const menus = document.querySelector(".menus")


const incrementWidth = (entries)=>{
	const entry = entries[0]
	if (entry.isIntersecting == true) {
		menus.style.animation = "MenusUp 0.5s"
		menus.style.opacity = "1"
		setTimeout(()=>{
			menus.style.transform = "translateY(-200px)"
		},500)
	}
}

const observer = new IntersectionObserver(incrementWidth,options)


if (menus) {
	observer.observe(menus)
}
}else{
	try{
		const menus = document.querySelector(".menus")
	menus.style.opacity = "1"
	menus.style.transform = "translateY(-200px)"
	document.querySelector(".menuTitle2").style.transform = "translateY(50px)"
	document.querySelector(".menuTitle3").style.transform = "translateY(50px)"
	}catch (error) {
		console.log("not in menu page")
	}	
}

try{
	document.querySelector(".mouse_scroll").addEventListener("click",()=>{
	document.querySelector(".footer").scrollIntoView({behavior: "smooth", block: "start" });
})

}catch (err){
	
}


window.addEventListener("load",()=>{
	let underline = document.querySelector(".underline")
	if (underline) {
		setTimeout(()=>{
		underline.style.animation = "incrementSize 0.3s"
		underline.style.width = "305px"
	},1000)
	}
})

if (document.querySelector(".goHome")) {
	document.querySelector(".goHome").addEventListener("click",()=>{
	window.open("https://jaimeegn.github.io/restaurant.html")
})
}