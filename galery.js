 "use strict"

const fileUploader = document.querySelector(".Img-reader");
const galery = document.querySelector(".galery")
let fileList = []
let defaultText = document.querySelector(".defaultText")

if (!localStorage.getItem("ingreso")) {
	localStorage.setItem("imgs", "")
	localStorage.setItem("ingreso", 1)
}

fileUploader.addEventListener("click",()=>{
	defaultText.style.display = "none"
})

if(localStorage.getItem("imgs").length > 2){
	defaultText.style.display = "none"	
}

fileUploader.addEventListener("change",(e)=>{
	readFile(fileUploader.files)
})

const readFile = (fl)=>{
		for (let i = 0; i < fl.length; i++) {
			const reader =  new FileReader();
			reader.readAsDataURL(fl[i])
			reader.addEventListener("load",(e)=>{
			let newImg = `<img src="${e.currentTarget.result}">`
			galery.innerHTML += newImg
			let newImgObj = {
				url: e.currentTarget.result
			}
			fileList.push(newImgObj)	
			if (!localStorage.getItem("imgs")) {
				localStorage.setItem("imgs", JSON.stringify(fileList))
				console.log("ejeciciòn tras lista indefinida")
			}else{
				try{
					let newFileList = JSON.parse(localStorage.getItem("imgs"))
				newFileList.push(newImgObj)
				localStorage.setItem("imgs",JSON.stringify(newFileList))
			}catch(e){
				alert("There's no more space :(")
			}
			}
	})	}
}

const loadIMGs = ()=>{
	let LSImgs = JSON.parse(localStorage.getItem("imgs"))
	for (let i = 0; i < LSImgs.length; i++) {
		let newURL = LSImgs[i].url
		galery.innerHTML += `<img src="${newURL}">`
		console.log(i)
	}
}

window.addEventListener("load",()=>{
	loadIMGs()
})

const modalBg = document.querySelector(".modal-background")

addEventListener("click",(e)=>{
	if (e.target.src && modalBg.innerHTML == "") {
		let newIMG = document.createElement("IMG")
		newIMG.src = e.target.src
		modalBg.style.display = "flex"
		modalBg.appendChild(newIMG)

	}else{
		modalBg.style.display = "none"
		modalBg.innerHTML = ""
	}
})

const cm = document.querySelector(".cm")
const cmDelete = document.querySelector(".Delete")

window.addEventListener("contextmenu",(e)=>{
	e.preventDefault()
	cm.style.display = "flex"
    cm.style.top = e.pageY + "px"
    cm.style.left = e.pageX + "px"
    
    window.addEventListener("click",()=>{
    	cm.style.display = "none"
    })
     cmDelete.addEventListener("click",()=>{
    	let fileList = JSON.parse(localStorage.getItem("imgs"))
    	let deletedURL = e.target.src
    	const newFileList = fileList.filter(checkURL)
    	localStorage.removeItem("imgs")
    	localStorage.setItem("imgs",JSON.stringify(newFileList))
    	function checkURL(obj) {
		  return obj.url != deletedURL;
		}
location.reload()
})
})



