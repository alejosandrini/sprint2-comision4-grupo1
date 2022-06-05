let nombres= [];
let gastos = [];
let gastosTotales = 0;

function agregarNombre(nombre){
    nombres.push(nombre);
}

function agregarGasto(gasto){
    gastos.push(gasto);
    gastosTotales += gasto;
}

function agregarPersona(){
    let contenido = document.getElementById('contenido');
    let nombre = document.getElementById('nombre').value;
    let gasto = document.getElementById('gasto').value;

    agregarNombre(nombre);
    agregarGasto(gasto);

    let nuevaPersona = document.createElement('p');
    nuevaPersona.innerHTML = `${nombre}: $${gasto}`;
    contenido.appendChild(nuevaPersona);
}

function eliminarPersona(){
    let contenido = document.getElementById('contenido');
    let nombre = document.getElementById('nombre').value;
    for(let i in nombres){
        if(nombre == nombreArray[i]){
            nombres.splice(i,1)

        }
    }
}