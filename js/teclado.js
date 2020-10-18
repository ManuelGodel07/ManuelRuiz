const d= document;
export function shortcut(e) {
    console.log(e.type);
    console.log(e.key);
    console.log(e);


    if (e.key==="a" && e.altKey) {
        alert("Se preciono la tecla alt")

    }
    if (e.key==="b" && e.altKey) {
        alert("Se preciono la tecla b alt")

    }
}