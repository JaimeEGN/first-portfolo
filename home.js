const gear=document.querySelector(".fa-gear"),header=document.querySelector(".header"),hGear=document.querySelector(".HddGear"),ul__li=document.querySelector(".ul__li"),hGearI=document.querySelector(".HGear"),pages=document.querySelector(".pages"),pages2=document.querySelector(".pages2"),pages3=document.querySelector(".pages3"),pages4=document.querySelector(".pages4"),description1=document.querySelector(".description1"),description2=document.querySelector(".description2"),description3=document.querySelector(".description3"),description4=document.querySelector(".description4"),taskList=[];gear.addEventListener("click",()=>{gear.style.display="none",hGear.style.display="block",hGearI.style.animation="rotateEngine 0.8s forwards",header.style.left="0%",pages.style.animation="moveleft 0.8s forwards",pages2.style.animation="moveleft 0.8s forwards",pages3.style.animation="moveleft 0.8s forwards",pages4.style.animation="moveleft 0.8s forwards",description1.style.animation="appear 0.8s forwards",description2.style.animation="appear 0.8s forwards",description3.style.animation="appear 0.8s forwards",description4.style.animation="appear 0.8s forwards"}),hGear.addEventListener("click",()=>{hGear.style.display="none",gear.style.display="block",header.style.left="-150px",gear.style.animation="rotateEngine 0.8s forwards",pages.style.animation="moveright 0.3s forwards",pages2.style.animation="moveright 0.3s forwards",pages3.style.animation="moveright 0.3s forwards",pages4.style.animation="moveright 0.3s forwards",description1.style.animation="disappear 0.4s forwards",description2.style.animation="disappear 0.4s forwards",description3.style.animation="disappear 0.4s forwards",description4.style.animation="disappear 0.4s forwards"});const search=document.querySelector(".search"),actSearch=document.querySelector(".fa-magnifying-glass"),searchLine=document.querySelector(".searchLine"),searchInput=document.querySelector(".SearchedTask"),main=document.querySelector(".main"),lookForTask=e=>{let t=e,a=document.querySelectorAll("input[contenido]");for(let s=0;s<a.length;s++)a[s].attributes[2].value.toString().includes(t)&&a[s].classList.add("highlightedE")},unLookForTask=()=>{let e=document.querySelectorAll("input[contenido]");for(let t=0;t<e.length;t++)e[t].style.textDecoration="none"};actSearch.addEventListener("click",()=>{search.style.top="0",main.style.top="80px",main.style.animation="moveDown 0.7s",searchLine.style.animation="incrementWidth 0.7s",searchLine.style.animationDelay="0.7s",setTimeout(()=>{searchInput.addEventListener("keypress",e=>{"Enter"===e.key&&lookForTask(searchInput.value)}),searchLine.style.width="90%",main.addEventListener("click",e=>{unLookForTask(),searchInput.value="",main.style.top="0px",search.style.top="-82px",searchLine.style.animation="decrementWidth 0.3s",setTimeout(()=>{searchLine.style.width="0%"},200)})},700)});const addTask=document.querySelector(".fa-plus"),body=document.querySelector(".body"),mPH=document.querySelector(".main-palceholder"),cm=document.querySelector(".cm"),cmDelete=document.querySelector(".Delete"),dateSelector=document.querySelector(".date"),day=document.querySelector(".day"),month=document.querySelector(".month"),year=document.querySelector(" .year"),hour=document.querySelector(".hour"),min=document.querySelector(".min");addTask.addEventListener("click",()=>{dateSelector.style.top="13%",mPH.style.display="none";let e=document.createDocumentFragment(),t=document.createDocumentFragment(),a=document.createElement("DIV"),s=document.createElement("DIV");s.classList.add("checkS"),a.classList.add("task"),e.appendChild(a),main.appendChild(e),t.appendChild(s);let l=document.createDocumentFragment(),i=document.createElement("INPUT");i.setAttribute("type","submit"),i.setAttribute("value","ready?"),i.classList.add("submitName"),l.appendChild(i),a.appendChild(l);let n=document.createDocumentFragment(),r=document.createElement("INPUT");r.setAttribute("type","text"),r.spellcheck=!1,r.setAttribute("placeholder","Write your task's name"),r.classList.add("taskName"),n.appendChild(r),a.appendChild(n),main.appendChild(t),s.addEventListener("click",()=>{if('<i class="fa-solid fa-check"></i>'!=s.innerHTML){let e='<i class="fa-solid fa-check"></i>';s.innerHTML+=e;let t=JSON.parse(localStorage.getItem("taskList")),a=[],l=s.previousElementSibling,i=l.children[1].value;for(let n=0;n<t.length;n++)i!=t[n].name?(a.push(t[n]),localStorage.removeItem("taskList"),localStorage.setItem("taskList",JSON.stringify(a))):1==t.length&&(localStorage.removeItem("taskList"),mPH.style.display="block");l.style.animation="fromLeft 0.8s",s.style.animation="fromLeft 0.8s",setTimeout(()=>{l.style.display="none",s.style.display="none"},"700")}else s.innerHTML=""});let o=()=>{if(dateSelector.style.top="-60%",r.value){if(day.value&&month.value&&year.value&&hour.value&&min.value){let e=new Date(`${month.value} ${day.value}, ${year.value} ${hour.value}:${min.value}:00`),t=new Date;setTimeout(()=>{new Notification(r.value)},e.getTime()-t.getTime())}let a=!0;'<i class="fa-solid fa-check"></i>'!=s.innerHTML&&(a=!1);let l=JSON.parse(localStorage.getItem("taskList"));l=null!=l?JSON.parse(localStorage.getItem("taskList")):[];let n={name:r.value,completed:a};l.push(n),localStorage.setItem("taskList",JSON.stringify(l)),i.style.animation="up 0.2s",i.style.top="0px",i.style.opacity="0"}};i.style.position="absolute",i.addEventListener("click",()=>{o()}),a.addEventListener("contextmenu",e=>{e.preventDefault(),cm.style.display="block",cm.style.top=e.pageY+"px",cm.style.left=e.pageX+"px",window.addEventListener("click",()=>{cm.style.display="none"});let t=e.target.value;cmDelete.addEventListener("click",e=>{let a=JSON.parse(localStorage.getItem("taskList")),s=[];for(let l=0;l<a.length;l++)t!=a[l].name?(s.push(a[l]),localStorage.removeItem("taskList"),localStorage.setItem("taskList",JSON.stringify(s))):1==a.length&&localStorage.removeItem("taskList");location.reload()}),document.querySelector(".Edit").addEventListener("click",()=>{let e=a.children[1].value;console.log(e);let t=JSON.parse(localStorage.getItem("taskList")),l=[];for(let i=0;i<t.length;i++)e!=t[i].name?(l.push(t[i]),localStorage.removeItem("taskList"),localStorage.setItem("taskList",JSON.stringify(l))):1==t.length&&localStorage.removeItem("taskList");a.style.outline="4px solid #77D6CE";let n=document.createDocumentFragment(),o=document.createElement("INPUT");o.setAttribute("type","submit"),o.setAttribute("value","ready?"),o.classList.add("submitName"),n.appendChild(o),a.appendChild(n),dateSelector.style.top="13%",o.style.position="absolute",o.addEventListener("click",()=>{if(a.style.outline="none",dateSelector.style.top="-60%",r.value){if(day.value&&month.value&&year.value&&hour.value&&min.value){let e=new Date(`${month.value} ${day.value}, ${year.value} ${hour.value}:${min.value}:00`),t=new Date;setTimeout(()=>{new Notification(r.value)},e.getTime()-t.getTime())}let l=!0;'<i class="fa-solid fa-check"></i>'!=s.innerHTML&&(l=!1);let i=JSON.parse(localStorage.getItem("taskList"));i=null!=i?JSON.parse(localStorage.getItem("taskList")):[];let n={name:r.value,completed:l};i.push(n),localStorage.setItem("taskList",JSON.stringify(i)),o.style.animation="up 0.2s",o.style.top="0px",o.style.opacity="0"}})})})}),window.addEventListener("load",()=>{let e=JSON.parse(localStorage.getItem("taskList")),t=e;for(let a=0;a<e.length;a++){let s=document.createElement("DIV");document.createDocumentFragment().appendChild(s),s.classList.add("task"),main.appendChild(s);let l=document.createDocumentFragment(),i=document.createElement("INPUT");i.setAttribute("type","text"),i.setAttribute("placeholder","Write your task's name"),i.setAttribute("contenido",e[a].name),i.classList.add("taskName"),i.spellcheck=!1,l.appendChild(i),s.appendChild(l),i.value=e[a].name;let n=document.createElement("DIV"),r=document.createDocumentFragment();if(n.classList.add("checkS"),r.appendChild(n),main.appendChild(r),!0==e[a].completed){let o='<i class="fa-solid fa-check"></i>';n.innerHTML+=o}else n.innerHTML="";n.addEventListener("click",()=>{if('<i class="fa-solid fa-check"></i>'!=n.innerHTML){let e='<i class="fa-solid fa-check"></i>';n.innerHTML+=e;let t=n.previousElementSibling,a=t.children[0].value,s=JSON.parse(localStorage.getItem("taskList")),l=[];for(let i=0;i<s.length;i++)a!=s[i].name?(l.push(s[i]),localStorage.removeItem("taskList"),localStorage.setItem("taskList",JSON.stringify(l))):1==s.length&&localStorage.removeItem("taskList");t.style.animation="fromLeft 0.8s",n.style.animation="fromLeft 0.8s",setTimeout(()=>{t.style.display="none",n.style.display="none"},"700")}else n.innerHTML=""}),s.addEventListener("contextmenu",e=>{document.querySelector(".Edit").addEventListener("click",e=>{let t=s.firstChild.value;console.log(t);let a=JSON.parse(localStorage.getItem("taskList")),l=[];for(let r=0;r<a.length;r++)t!=a[r].name?(l.push(a[r]),localStorage.removeItem("taskList"),localStorage.setItem("taskList",JSON.stringify(l))):1==a.length&&localStorage.removeItem("taskList");s.style.outline="4px solid #77D6CE";let o=document.createDocumentFragment(),c=document.createElement("INPUT");c.setAttribute("type","submit"),c.setAttribute("value","ready?"),c.classList.add("submitName"),o.appendChild(c),s.appendChild(o),dateSelector.style.top="13%",c.style.left="0%",c.addEventListener("click",()=>{if(s.style.outline="none",dateSelector.style.top="-60%",i.value){if(day.value&&month.value&&year.value&&hour.value&&min.value){let e=new Date(`${month.value} ${day.value}, ${year.value} ${hour.value}:${min.value}:00`),t=new Date;setTimeout(()=>{new Notification(i.value)},e.getTime()-t.getTime())}let a=!0;'<i class="fa-solid fa-check"></i>'!=n.innerHTML&&(a=!1);let l=JSON.parse(localStorage.getItem("taskList"));l=null!=l?JSON.parse(localStorage.getItem("taskList")):[];let r={name:i.value,completed:a};l.push(r),localStorage.setItem("taskList",JSON.stringify(l)),c.style.animation="up 0.2s",c.style.top="0px",c.style.opacity="0"}})}),e.preventDefault(),cm.style.display="block",cm.style.top=e.pageY+"px",cm.style.left=e.pageX+"px",window.addEventListener("click",()=>{cm.style.display="none"});let t=e.target.value;cmDelete.addEventListener("click",e=>{let a=JSON.parse(localStorage.getItem("taskList")),s=[];for(let l=0;l<a.length;l++)t!=a[l].name?(s.push(a[l]),localStorage.removeItem("taskList"),localStorage.setItem("taskList",JSON.stringify(s))):1==a.length&&localStorage.removeItem("taskList");location.reload()})})}t.length>0&&(mPH.style.display="none")});

if (window.matchMedia('(max-width: 743px)').matches) {
		header.style.left = "-200px"
		document.querySelector(".fa-gear").style.left = "200px"
		document.querySelector(".fa-gear").style.color = "#1f71b4"
		document.querySelector(".fa-gear").style.marginTop = "25px"
		document.querySelector(".fa-gear").style.transition = "color 0.3s"
}

hGear.addEventListener("click",()=>{
	if (window.matchMedia('(max-width: 743px)').matches) {
		document.querySelector(".fa-gear").style.marginTop = "5px"
	document.querySelector(".fa-gear").style.color = "#000"
	header.style.left = "-200px"
	document.querySelector(".fa-gear").style.left = "150px"
	setTimeout(()=>{
		document.querySelector(".fa-gear").style.marginTop = "25px"
		document.querySelector(".fa-gear").style.color = "#1f71b4"
		document.querySelector(".fa-gear").style.transition = "left 0.3s"
		document.querySelector(".fa-gear").style.left = "200px"
	},600)
}
})

const magnifyingGlass = document.querySelector(".fa-magnifying-glass").getBoundingClientRect()
const questionBoard = document.querySelector(".fa-clipboard-question").getBoundingClientRect()
const checkStorage = document.querySelector(".fa-check-to-slot").getBoundingClientRect()
const graph = document.querySelector(".fa-chart-simple").getBoundingClientRect()

const magnifyingGlassTop = magnifyingGlass.top
const questionBoardTop = questionBoard.top
const checkStorageTop = checkStorage.top
const graphTop = graph.top

document.querySelector(".description1").style.top = `${magnifyingGlassTop - 23}px`
document.querySelector(".description2").style.top = `${questionBoardTop - 13}px`
document.querySelector(".description3").style.top = `${checkStorageTop - 5}px`
document.querySelector(".description4").style.top = `${graphTop + 8}px`


