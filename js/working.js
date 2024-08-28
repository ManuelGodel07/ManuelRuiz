const student = {
    name: "John",
    age: 30,
    city: "New York"
}

function myFunction() {
    console.log("Hello guys");
    let text= "";
    for(let x in student){
        text += `${student[x] } `
        console.log(text)
    }
    document.getElementById("performer").innerHTML= text;
}


document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById("myTestingImage");
    image.onclick = function() {
        myFunction();
    };
});



function giveDate(){
/*     document.getElementById("performer").innerHTML= Date(); 
    window.location.href = "../HTML/evaluacion.html";

*/
    try {
        alert(Date())
    } catch (error) {
        console.log(error);
    }
}

function navigateToTheNextPage(page){
/*     document.getElementById("performer").innerHTML= Date(); */
    try {
        console.log('camara adentro!');
        window.location.href = page;
        console.log('camara fuera!')
    } catch (error) {
        console.log(error);
    }
}


