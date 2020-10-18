const d= document;
export function digitalClock(clock,btnplay,btnstop) {
    d.addEventListener("click", e=>{
        let clocktem;
        if(e.target.matches(btnplay)){
            clocktem =setInterval(()=>{
                let clockHour= new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML= `<h3>${clockHour}</h3>`;
            },1000);
            e.target.disabled= true;
        }
        if(e.target.matches(btnstop)){
            clearInterval(clocktem);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnplay).disabled= false;
        };
    });
};

export function alarm() {
    console.log("hola");    
}