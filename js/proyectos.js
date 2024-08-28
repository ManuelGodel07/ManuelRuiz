const $html = document.documentElement,
    $body = document.body;
    let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varBlueColor = getComputedStyle($html).getPropertyValue("--blue-color");
    const $figure = document.createElement("figure");
    const $img = document.createElement("img");
    const $figcaption = document.createElement("figcaption");
    const $textFigcaption = document.createTextNode("Animals");
    const $cards = document.querySelector(".projectResponses");
    let currentClassIndex = 0;
    const $semanticEvent = document.getElementById("semantic-event");
    const $EventMultiple = document.getElementById("event-multiple-handler");
    const $board = document.querySelectorAll(".target-board div");
    const $myTargetBoard = document.getElementById("target-board-btn");
    const $linkEvento = document.getElementById("ligulink")

    function knowingMyBrowserk(){
        try {
            const response = window.isSecureContext;
            document.getElementById("projectResponses").innerHTML=response;
            console.log(window)
        } catch (error) {
            console.log(error);
        }
    }

function toSpeech(texto){
    try {
        speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
    } catch (error) {
        console.log(error)
    }
}

function testingDoccument(){
    const response = document.doctype;
    const response2 = document.characterSet;
    const response3 = document.styleSheets;
    const response4 = document.scripts;
    const response5 = document.getSelection();
    const response6 = document.querySelectorAll("a");
    const docElemnt = document.documentElement.lang;
    const docElemnt2 = document.documentElement.getAttribute("lang");
    const docElemnt3 = document.querySelector(".img-cal").getAttribute("src")
    const $linguImage = document.querySelector(".img-cal");
    const $linguLink = document.querySelector("#ligulink");
    const $linguLinkText = document.querySelectorAll(".calculator-text")
    const $switchStylesImage = document.querySelector(".handle-screen-img");
    /*     docElemnt.forEach(element => {
        }); removeAttribute ; hasAttribute; dataSet*/


    document.getElementById("projectResponses").innerHTML = docElemnt3;

    $linguLink.setAttribute("target","_blank")
    console.log($linguLink.getAttribute("target"))
    console.log($linguLinkText)

    $linguLinkText.forEach(element=>{
        element.style.setProperty("color", "red");
        element.style.fontWeight = "bold";
        element.style.fontSize = "32px";
    })
    $body.style.backgroundColor = varDarkColor;
    $body.style.color= varBlueColor;
    $switchStylesImage.style.opacity="0.5"
}

function sweacherImageStyles(){
    //Agregando estilos en linea
    const $switchStylesImage = document.querySelector(".handle-screen-img")
    if($switchStylesImage.style.opacity===""){
        $switchStylesImage.style.opacity="0.5"
        $body.style.backgroundColor= varDarkColor;
        $body.style.color=varBlueColor;
    }else if($switchStylesImage.style.opacity==="0.5"){
        $switchStylesImage.style.opacity=""
        $body.style.backgroundColor= "#fff";
        $body.style.color="#000";
    }else{
        console.log(typeof($switchStylesImage.style.opacity))
    }
    console.log('Background',varDarkColor)
}




function saludar(nombre){
    toSpeech(`Hola ${nombre} porfavor seleccióna el proyecto que te interese ver`)
    alert(`Hola ${nombre} porfavor seleccióna el proyecto que te interese ver`)
}

$EventMultiple.addEventListener("click",(e)=>{
    const $removeFunction = document.getElementById("event-multiple-handler");
    try {
        $removeFunction.removeEventListener("click",saludar); 
    } catch (error) {
        console.log(error)
    }
})

$EventMultiple.addEventListener("click",(e)=>{
    const nickName = document.getElementById("textInput").value;
    console.log(e.type,e.target);
    if(nickName===""){
        alert("Escribe tu nombre")
    }else{
        saludar(nickName);
    }
})

function flujoEvento(e){
    console.log(`Hola ${e.target.className} ${this

        
    }`)
}

$myTargetBoard.addEventListener("click",(e)=>{
    
    /*     $board.forEach(div=>{
        console.log("Fase de burbuja con false/default y de captura con true");
        div.addEventListener("click",(e)=>{
            e.preventDefault($linkEvento);
            e.stopPropagation()
            console.log(div.textContent)
        },false)
    }) */
})

document.addEventListener("click",(e)=>{
    if(e.target.matches(".target-board div")){
        flujoEvento(e)
    }
})
