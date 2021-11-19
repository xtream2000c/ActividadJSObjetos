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
    edificio[0].agregarPlantasYPuertas(1,3);
    edificio[1].agregarPlantasYPuertas(2,3);
    edificio[1].agregarPlantasYPuertas(1,4);
    edificio[1].agregarPlantasYPuertas(2,2);
    edificio[1].agregarPlantasYPuertas(4,1);
    agregarPropietarios();
    
    imprimePlantas();
    
}

function crearEdificios(){
    
    edificio[0] = new edificios("Garcia Prieto", "58", "15706");
    edificio[1] = new edificios("Camino Caneiro", "29", "32004");
    edificio[2] = new edificios("San Clemente", "s/n", "15705");

}

function agregarPropietarios(){
    edificio[0].agregarPropietario('Carlos Maroto', 1, 2);
}

function imprimirEdificios(){
    for (let i = 0; i < edificio.length; i++) {
        
        document.write("Construido nuevo edificio en calle: " + edificio[i].calle + ", nº: " + edificio[i].numero + ", C.P.: " + edificio[i].cod_postal+ "<br>");
        
    }
}

function imprimePlantas(){
    
    for (let k = 0; k < edificio.length; k++) {
        document.write("<h2><br>Edificio de la calle: " + edificio[k].calle + "<br></h2>");
        for (let i = 0; i < edificio[k].numplantas; i++) {
            for (let j = 0; j < edificio[k].plantas[i].length; j++) {
                console.log("Aqui llego" + k);
                document.write("En la planta: "+ i + " Puerta "+ j + " vive: "+ edificio[k].plantas[i][j]+"<br>");
                
            }   
            
        }
    }
}

function edificios(calle, numero, cod_postal){

    this.calle = calle;
    this.numero = numero;
    this.cod_postal = cod_postal;
    this.numplantas = 0;
    this.puertas = 1;
    this.plantas=[];
    this.puerta=[];

    this.agregarPlantasYPuertas = function (numplantas, puertas){
        if (numplantas > 0) {
            if(puertas > 0){
                let nuevasPlantas = this.numplantas + numplantas;
                console.log("Total de planta "+nuevasPlantas);
                this.puertas = puertas;
                for (let i = this.numplantas; i < nuevasPlantas ; i++) {
                    this.puerta=[]
                    for (let j = 0; j < this.puertas; j++) {
                        console.log("Planta en el for" + i + j);
                        this.puerta[j] = "vacio" + i + j;
                        
                    }
                    this.plantas.push(this.puerta);
                }
                this.numplantas += numplantas;
            }
            else{
                alert("No puede haber un numero de puertas negativo. Se usaran el mismo numero de puertas que la ultima vez");
    
                let nuevasPlantas = this.numplantas + numplantas;
                console.log("Total de planta "+nuevasPlantas);
                for (let i = this.numplantas; i < nuevasPlantas ; i++) {
                    this.puerta=[]
                    for (let j = 0; j < this.puertas; j++) {
                        console.log("Planta en el for" + i + j);
                        this.puerta[j] = "vacio" + i + j;
                        
                    }
                    this.plantas.push(this.puerta);
                }
                
                this.numplantas += numplantas;
            }  
        }else{
            alert('No puede haber plantas negativas');
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
    
    this.agregarPropietario = function (nombre,planta,puertaDePlanta) {
        if(this.plantas[planta][puertaDePlanta]){
            this.plantas[planta][puertaDePlanta] = nombre;
        }else{
            alert("La convinacion de puerta y planta no existe.");
        }
    }

}


