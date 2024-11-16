let botonSumar = document.getElementById('sumar');
let botonRestar = document.getElementById('restar');
let respuesta = document.getElementById('respuesta');

botonSumar.addEventListener('click', hacerSuma);
botonRestar.addEventListener('click', hacerResta);

function hacerSuma(event){
    event.preventDefault();
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let s = n1 + n2;
    respuesta.innerHTML = `La suma es = ${s}`;
}

function hacerResta(event){
    event.preventDefault();
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let s = n1 - n2;
    if(n1 < n2){
        respuesta.innerHTML = "0 (Produce valor negativo)";
    } else{
        document.querySelector("#respuesta").innerHTML = `La resta es = ${s}`;
        }
}