function inicializar() {

    edificio=[];
    crearEdificios();
    imprimirEdificios();
    // agregarPlantasYPuertas(numplantas, puertas) // Se le pasa el número de plantas que queremos crear en el piso y el número de puertas por planta. Cada vez que se llame a este método, añadirá el número de plantas y puertas indicadas en los parámetros, a las que ya están creadas en el edificio.
    // modificarNumero(numero) // Se le pasa el nuevo número del edificio para que lo actualice.
    // modificarCalle(calle) // Se le pasa el nuevo nombre de la calle para que lo actualice.
    // modificarCodigoPostal(codigo) // Se le pasa el nuevo número de código postal del edificio.
    // imprimeCalle // Devuelve el nombre de la calle del edificio.
    // imprimeNumero // Devuelve el número del edificio.
    // imprimeCodigoPostal // Devuelve el código postal del edificio.
    // agregarPropietario(nombre,planta,puerta) // Se le pasa un nombre de propietario, un número de planta y un número de puerta y lo asignará como propietario de ese piso.
    // imprimePlantas // Recorrerá el edificio e imprimirá todos los propietarios de cada puerta.

    
}

function crearEdificios(){
    
    edificio[0] = new edificios("Garcia Prieto", "58", "15706");
    edificio[1]= new edificios("Camino Caneiro", "29", "32004");
    edificio[2] = new edificios("San Clemente", "s/n", "15705");

}

function imprimirEdificios(){
    for (let i = 0; i < edificio.length; i++) {
        
        document.write("Construido nuevo edificio en calle: " + edificio[i].calle + ", nº: " + edificio[i].numero + ", C.P.: " + edificio[i].cod_postal+ "<br>");
        
    }
}

function edificios(calle, numero, cod_postal){

    this.calle = calle;
    this.numero = numero;
    this.cod_postal = cod_postal;

}