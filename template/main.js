let nombres= [];
let gastos = [];
let gastosTotales = 0;

function agregarValores(nuevoNombre, gasto){
    let existeNombre = false;
    for(let i in nombres){
        if(nombres[i]==nuevoNombre){
            existeNombre=true;
            gastos[i] = parseInt(gastos[i]) + parseInt(gasto);
            console.log('ya existe persona');
        }
    }
    gastosTotales = parseInt(gastosTotales) + parseInt(gasto);
    if(!existeNombre){
        nombres.push(nuevoNombre);
        gastos.push(gasto);
    }
    console.log('gastosTotales: '+gastosTotales);

}

function imprimirArrays(){
    let contenido = document.getElementById('contenido');
    let nuevaPersona;
    while (contenido.hasChildNodes()) {
        contenido.removeChild(contenido.firstChild);
    }
    for (let i in nombres) {
        nuevaPersona = document.createElement('li');
        nuevaPersona.innerHTML = `${nombres[i]}: $${gastos[i]}`;
        nuevaPersona.classList.add('list-group-item');
        nuevaPersona.classList.add('list-group-item-dark');
        contenido.appendChild(nuevaPersona);
    }
}

function imprimirResultados(){
    let resultado = document.getElementById('resultado');
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    let total = document.createElement('p');
    total.innerHTML = `Total: $${gastosTotales}`;
    resultado.appendChild(total);

    let aporte=0;
    if(nombres.length>0){
        aporte = parseInt(gastosTotales)/parseInt(nombres.length);
    }
    let aportes = document.createElement('p');
    aportes.innerHTML = `A cada uno le toca aportar: $${aporte}`;
    resultado.appendChild(aportes);
}

function agregarPersona(){
    let nombre = document.getElementById('nombre').value;
    let gasto = document.getElementById('gasto').value;

    console.log(nombre)
    console.log(gasto)

    if(nombre == "" || gasto == ""){
        alert("Falta rellenar campos")
    }else{
        agregarValores(nombre, gasto);

        imprimirArrays();
        imprimirResultados();
    } 
}

function eliminarPersona(){
    let contenido = document.getElementById('contenido');
    let nombre = document.getElementById('nombre').value;
    if(nombre == ""){
        alert("Falta rellenar campo nombre")
    }else{
        for(let i in nombres){
            if(nombre == nombres[i]){
                console.log('Borre a: '+nombres[i]);
                gastosTotales = parseInt(gastosTotales) - parseInt(gastos[i]);
                nombres.splice(i,1);
                gastos.splice(i,1);
                contenido.removeChild(contenido.children[i]);
            }
        }
        console.log(nombres);
        imprimirResultados();
    }
}

function eliminarTodo(){
    let contenido = document.getElementById('contenido');
    while (contenido.hasChildNodes()) {
        contenido.removeChild(contenido.firstChild);
    }
    nombres.splice(0,nombres.length);
    gastos.splice(0,gastos.length);
    gastosTotales=0;
    console.log(nombres);
    console.log(gastos);
    imprimirResultados();
}
