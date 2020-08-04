/**setTimeout(()=>{
    alert("Gracias por ver mi CV, tu visita es a las: " + new Date().toLocaleTimeString())
},3000);*/
/**

console.log("arrancamos el programa" + this)

console.log(this===window)
this.nombre = "Contexto global"

function imprimir(){
    console.log(this.nombre)
}

imprimir()

const obj = {
    nombre:"contexto objeto",

    imprimir: function(){
        console.log(this.nombre)
    }
}
obj.imprimir()

const obj2 = {
    nombre:"contexto objeto 2",
    imprimir
}

obj2.imprimir()

* */

/**
this.lugar ="contexto global"

function saludar(saludo,persona){
    console.log(`${saludo}${persona} desde el ${this.lugar}`)
}
saludar("hello", "victor")


const obj = {
    lugar: "contexto objeto"

}

saludar.call(obj, "hola", " Manuel")
saludar.apply(obj,["holis", " Luis"])

const persona = {
    nombre: "manuel",

    saludar: function () {
        console.log(`Hola ${this.nombre}`)
    }
}
persona.saludar()

const persona2= {
    saludar: persona.saludar.bind(persona)
}

persona2.saludar(); 
* */

/***JSON
const json = {
    cadena: "texto1",
    numero: 26,
    booleano: true,
    arreglo: ["correr",2,true,"cocinar"],
    objeto: {
        nombre:"almirante",
        edad :2050,
        correo: "almirante1@gmail.com",
    },
    nulo:null
}

console.log(json)


console.log(JSON)
console.log(JSON.parse("[1,2,3]"))

console.log(JSON.stringify([1,2,3]))
console.log(JSON.stringify({x:2, y:5}))
console.log(window)
let texto = "Bienvenido a mi paguina soy manuel"
const hablar= (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
hablar(texto)
 */
/**nodos
console.log(document.title)
console.log(document.styleSheets)
setTimeout(()=>{
    console.log(2)
},3000)
document.write("<h2>Hola mundo</h2>")
 */
/***NODOS
console.log(document.querySelectorAll("a"))
console.log(document.getElementById("menu"))

console.log(document.querySelectorAll("a").length)
document.querySelectorAll("a").forEach(el =>console.log(el))
console.log(document.querySelectorAll(".card")[1]);

 */


/**data atributes y atributos 
console.log(document.documentElement.lang)
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

const $linkdom = document.querySelector(".link-dom")
$linkdom.setAttribute("rel","nooopener");
$linkdom.setAttribute("target","_blank");

console.log($linkdom.hasAttribute("rel"))

$linkdom.removeAttribute("rel")
console.log($linkdom.hasAttribute("rel"))


console.log($linkdom.getAttribute("data-description"))

console.log($linkdom.dataset)

console.log($linkdom.dataset.description)
$linkdom.setAttribute("data-description","Nuevo valor al DOM")
console.log($linkdom.dataset.description)
$linkdom.dataset.description="VALOR MADRUGADA"
console.log($linkdom.dataset.description)

console.log(getComputedStyle($linkdom).getPropertyValue("color"))


$linkdom.style.setProperty("text-decoration","none")
$linkdom.style.setProperty("display","block")
$linkdom.style.width ="25%"
$linkdom.style.textAlign = "center"

const $html = document.documentElement,
    $body = document.body;
    

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")
setTimeout(()=>{
    $body.style.backgroundColor = varDarkColor
    $body.style.color = varYellowColor    
},3000)
*/


/**CLASES
const $card= document.querySelector(".card")
console.log($card)
console.log($card.className)
console.log($card.classList)
$card.classList.add("opacity-80", "sepia")
 */

 /**TEXT Y HTML 

const $whatIsDom = document.getElementById("que-es");
let text=`
    <p>El modelo de objetos del documento (<b><i>DOM - Document Object Model </i></b>) es una API para documentos de html y xml</p>
    <p>Provee una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante codigo JS</p> 
    <p><mark>El dom es una api para los navegadores</mark></p>
    `;
    text2 = "hola mundo este metodo sirve para ingresar solo texto, el otro es para ingresar solo html"
$whatIsDom.innerHTML= text; 

$whatIsDom.outerText= text2; 
*/
/*** Recorriendo el DOM


const $cards = document.querySelector(".cards")

console.log($cards)
console.log($cards.parentElement)
console.log($cards.children[2])
console.log($cards.closest("div"))
*/
/*** CREATE ELEMENT Y FRANGMENTOS
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure")


$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt","animals")
$figure.classList.add("card")

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure)


$figure2.innerHTML=`<img src="https://placeimg.com/200/200/animals" alt="animals">
<figcaption>people</figcaption>`;
$figure2.classList.add("card")
$cards.appendChild($figure2);


const estaciones = ["primavera","verano", "otoño", "invierno"],
    $ul=document.createElement("ul");
    document.write("<h3>Estaciones del año</h3>")

document.body.appendChild($ul)
estaciones.forEach(el =>{
    const $li = document.createElement("li")
    $li.textContent = el
    $ul.appendChild($li)
})
 

const continentes = ["africa", "america", "asia", "europa", "oceania"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>")
document.body.appendChild($ul2)

$ul2.innerHTML = "";
continentes.forEach((el)=> ($ul2.innerHTML += `<li>${el}</li>`))

const meses= ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEach(el =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li)
})
document.write("<h3>Meses del año</h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)
*/

/***template
const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
        title: "tecnologia",
        img: "https://placeimg.com/200/200/tech",
        },
        {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals",
        },
        {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",
        },
        {
        title: "Gente",
        img: "https://placeimg.com/200/200/people",
        },
        {
        title: "Naturalez",
        img: "https://placeimg.com/200/200/nature",
        },


    ];
    cardContent.forEach(el=>{
        $template.querySelector("img").setAttribute("src",el.img);
        $template.querySelector("img").setAttribute("alt",el.title);
        $template.querySelector("figcaption").textContent= el.title;

    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone)
    });
    $cards.appendChild($fragment)

 */

/*old style

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");
$newCard.innerHTML = `
<img src= "https://placeimg.com/200/200/any" alt ="any"><figcaption>Any</figcaption>
`
$newCard.classList.add("card");
$cards.replaceChild($newCard,$cards.children[2]) 
$cards.insertBefore($newCard, $cards.lastElementChild)
$cards.removeChild($cards.firstElementChild)
**/
/***cool style
 *  .insertAdjacent
 * .insertAdjacentElement(posicion,el)
 * .insertAdjacentHMTL(posicion,html)
 * .insertAdjacentText(posicion, text)
 * 
 *Posiciones 
 * beforebegin(hermano anterior)
 * afterbegin(primer hijo)
 * 
 * beforeend(ultimo hijo)
 * afterend(hermano siguiente)

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contenCard = `
<img src= "https://placeimg.com/200/200/any" alt ="any"><figcaption>Any</figcaption>
`;

$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend",$contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterend","Nuevo")
$cards.insertAdjacentElement("beforebegin",$newCard);
 */

/**Manejadores de eventos 

function holaMundo(){
    alert("soy el manejador de eventos");
    console.log(event)
}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click",holaMundo)
$eventoMultiple.addEventListener("click",(e)=> {
    alert("Segunda función") 
    console.log(e)
    console.log(e.type)
    console.log(e.target)
});
*/

/*******************************************
const $divsEventos = document.querySelector(".eventos-justos div"),
    $linkEventos = document.querySelector(".eventos-flujos a");

function flujoEventos(e){
    console.log(
        `Hola, te saluda ${this.className}, el click lo origino ${e.target.className}`
    )
    e.stopPropagation();
}
console.log($divsEventos)

$divsEventos.forEach((div) => {
    div.addEventListener("click", flujoEventos)
});
 */

/****BOM EVENTOS 
window.addEventListener("resize",(e)=>{
console.clear()
console.log("evento resize")
console.log(window.innerHeight)
console.log(window.innerWidth)
console.log(window.outerHeight)
console.log(window.outerWidth)
console.log(window.scrollX)
console.log(window.scrollY)
})  

window.addEventListener("scroll", e=>{
    console.clear();
    console.log("**evento**")
    console.log(window.scrollX)
    console.log(window.scrollY)
})

window.addEventListener("load",e=>{
    console.log("**evento LOAD**")
    console.log(screenX)
    console.log(screenY)
})

document.addEventListener("DOMContentLoaded", e=>{
    console.log("**evento DOM**")
    console.log(window.scrollX)
    console.log(window.scrollY)

})
*/
/***METODOS
const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

$btnAbrir.addEventListener("click", e=>{
    window.open("http://www.nostalghiamusic.com/")
})
$btnCerrar.addEventListener("click", e=>{
    window.close();
})
$btnImprimir.addEventListener("click", e=>{
    window.print()
})
 */




































