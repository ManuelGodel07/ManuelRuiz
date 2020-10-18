import hamburguerMenu from "./hamburguesa.js";
import {digitalClock} from "./script14.js";
import {shortcut} from "./teclado.js";
//import {countdown} from "./cuentaRegresiva.js";


const d= document;
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj" , "#activar-reloj","#desactivar-reloj");
    countdown("countdown","Mayo 23, 2021", "Felicidades")
});

d.addEventListener("keydown",(e)=>{
    shortcut(e)
});
