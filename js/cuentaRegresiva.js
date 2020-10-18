const d = document;
export function countdown(id,limitDate,finalMessage) {
    const $countdown =d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=>{
        console.log(countdownDate, new Date().getTime);
    },1000)

}