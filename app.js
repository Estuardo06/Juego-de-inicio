//para acortar muchisimo más el cod se puede crear una variable que sea llame igual que la función que queremos
//retornar. la variable se debe de crear desde afuera. por ejemplo numero llama a la funcion generar número
let numero = 0;
let intentos = 0;
let lista = [];
let NumeroMaximoIntentos = 3 ;
//Se puso a 0 porque la función CondicionesInicialesDelJuego, le va a dar el verdadero valor a las variables
function valorDeLaFuncion (tituloDelJuego, parrafoDelJuego) {
    let element = document.querySelector(tituloDelJuego);
    element.innerHTML = parrafoDelJuego;
    return;
}
//a
function verificarIntento(){
//input es una etiqueta HTML que se va a llamar desde js
   let  numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   if (numeroDeUsuario === numero){
        valorDeLaFuncion ("p", `acertase el numero. lo hiciste en ${intentos} ${ intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
   } else{
    if(numeroDeUsuario > numero){
        valorDeLaFuncion('p', 'el numero es menor')
    } else{
        valorDeLaFuncion('p', 'el numero es mayor') 
    }
    intentos++;
    limpiarCaja()
   }
    return;
}

//a

function limpiarCaja (){
    document.querySelector ("#valorUsuario").value= "";

}
function generarNumero() {
    let numeroGenereado = Math.floor(Math.random()*NumeroMaximoIntentos)+1;

    console.log(numeroGenereado);
    console.log(lista);

// si ya se salieron todos los números de la lista
    if(lista.length === NumeroMaximoIntentos ){
        valorDeLaFuncion("p", "Ya se sortearon todos los números");
    } else {
        //si número generado esta en la lista hará // el .includes va a verificar si el nuevo num generado ya esta en la lista
        if (lista.includes(numeroGenereado)){
            return generarNumero();
        } else {
            lista.push(numeroGenereado);
            return numeroGenereado;
        }
    }   
}

function CondicionesInicialesDelJuego(){
    limpiarCaja();
    valorDeLaFuncion('h1','Juego del número secreto!');
    valorDeLaFuncion('p',`Indica un número del 1 al ${NumeroMaximoIntentos}`);
    numero = generarNumero();
    intentos = 1;
    console.log(numero)

}

function ReiniciarJuego(){
    //Limpiar el Juego 
    //Indicar mensaje de los numeros
    //generar número aleatorio
    // Iniciar el Número de intentos
    CondicionesInicialesDelJuego();
    //deshabilitar del boton del juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}
CondicionesInicialesDelJuego();
