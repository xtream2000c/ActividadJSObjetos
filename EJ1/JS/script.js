function inicializar() {

    edificio=[];
    plantas=[];
    puerta=[];
    crearEdificios();
    imprimirEdificios();
    // imprimeCalle // Devuelve el nombre de la calle del edificio.
    // imprimeNumero // Devuelve el número del edificio.
    // imprimeCodigoPostal // Devuelve el código postal del edificio.
    // imprimePlantas // Recorrerá el edificio e imprimirá todos los propietarios de cada puerta.
    edificio[0].agregarPlantasYPuertas(2,3);
    edificio[1].agregarPlantasYPuertas(1,7);
    
    imprimePlantas();
    
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

function imprimePlantas(){
    console.log(edificio[0].numplantas);
    for (let k = 0; k < edificio.length; k++) {
        for (let i = 0; i < edificio[k].numplantas; i++) {
            for (let j = 0; j < edificio[k].puertas; j++) {
                
                document.write("En la planta: "+ i + " Puerta "+ j + " vive: "+ edificio[k].plantasYpuertas[i][j]+"<br>");

            }   
            
        }
    }


}

function edificios(calle, numero, cod_postal){

    this.calle = calle;
    this.numero = numero;
    this.cod_postal = cod_postal;
    this.numplantas = 0;
    this.puertas = 0;
    
    this.plantas=[];
    this.puerta=[];
    this.plantasYpuertas = new Array(plantas,puerta);
    this.agregarPlantasYPuertas = function (numplantas, puertas){
        this.numplantas = numplantas;
        this.puertas = puertas;

        for (let i = 0; i < numplantas; i++) {
            for (let j = 0; j < puertas; j++) {

                this.plantasYpuertas[i][j] = "vacio"

            }
        }
        
    }

    this.modificarNumero = function (numero){
        this.numero = numero;
    }
    this.modificarCalle = function (calle){
        this.calle = calle;
    }
    this.modificarCodigoPostal = function (codigo){
        this.cod_postal = cod_postal;
    }
    
    this.agregarPropietario = function (nombre,planta,puerta) {
        
    }

}


