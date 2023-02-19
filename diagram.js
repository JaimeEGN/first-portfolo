navigator.serviceWorker && navigator.serviceWorker.register("sw.js");

const main = document.querySelector(".main")

const gear = document.querySelector(".fa-gear"),
    header = document.querySelector(".header"),
    hGear = document.querySelector(".HddGear"),
    ul__li = document.querySelector(".ul__li"),
    hGearI = document.querySelector(".HGear"),
    pages = document.querySelector(".pages"),
    pages2 = document.querySelector(".pages2"),
    pages3 = document.querySelector(".pages3"),
    pages4 = document.querySelector(".pages4"),
    description1 = document.querySelector(".description1"),
    description2 = document.querySelector(".description2"),
    description3 = document.querySelector(".description3"),
    description4 = document.querySelector(".description4"),
    taskList = [];
gear.addEventListener("click", () => {
    (gear.style.display = "none"),
        (hGear.style.display = "block"),
        (hGearI.style.animation = "rotateEngine 0.8s forwards"),
        (header.style.left = "0%"),
        (pages.style.animation = "moveleft 0.8s forwards"),
        (pages2.style.animation = "moveleft 0.8s forwards"),
        (pages3.style.animation = "moveleft 0.8s forwards"),
        (pages4.style.animation = "moveleft 0.8s forwards"),
        (description1.style.animation = "appear 0.8s forwards"),
        (description2.style.animation = "appear 0.8s forwards"),
        (description3.style.animation = "appear 0.8s forwards"),
        (description4.style.animation = "appear 0.8s forwards");
}),
    hGear.addEventListener("click", () => {
        (hGear.style.display = "none"),
            (gear.style.display = "block"),
            (header.style.left = "-150px"),
            (gear.style.animation = "rotateEngine 0.8s forwards"),
            (pages.style.animation = "moveright 0.3s forwards"),
            (pages2.style.animation = "moveright 0.3s forwards"),
            (pages3.style.animation = "moveright 0.3s forwards"),
            (pages4.style.animation = "moveright 0.3s forwards"),
            (description1.style.animation = "disappear 0.4s forwards"),
            (description2.style.animation = "disappear 0.4s forwards"),
            (description3.style.animation = "disappear 0.4s forwards"),
            (description4.style.animation = "disappear 0.4s forwards");
});

//Ahora si se viene lo chido

document.querySelector(".addParam").addEventListener("click",addParam);
document.querySelector(".showResults").addEventListener("click",showResults);

var parametros = [];
var valores = [];

function addParam(){
    let html = document.querySelector(".container").innerHTML;
    let newHTML = '<div><input type="text" class="parametro" placeholder="Point"><input type="number" class="valor" placeholder="Value"></div>'; 
    document.querySelector(".container").innerHTML = html + newHTML;
} 


function showResults(){
    for (var i = 0; i < document.querySelectorAll('.parametro').length ; i++) {
      parametros.push(document.querySelectorAll('.parametro')[i].value);
      valores.push(parseInt(document.querySelectorAll(".valor")[i].value));
    }
    var data = [{
      x: parametros,
      y: valores,
      type: "linear"
    }];
    Plotly.newPlot("grafico",data);
    document.querySelector(".main-svg").style.backgroundColor = "#04283c"
}
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

document.querySelector(".description1").style.top = `${magnifyingGlassTop + 3}px`
document.querySelector(".description2").style.top = `${questionBoardTop + 3}px`
document.querySelector(".description3").style.top = `${checkStorageTop + 3}px`
document.querySelector(".description4").style.top = `${graphTop + 3}px`