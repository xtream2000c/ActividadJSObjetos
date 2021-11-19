function inicializar() {

    edificio=[];
    plantas=[];
    puerta=[];
    crearEdificios();
    document.write("El codigo postal del edificio 1 es: "+edificio[0].imprimeCodigoPostal()+ "<br>");
    document.write("La calle del edificio 3 es: "+edificio[2].imprimeCalle() + "<br>");
    document.write("El edificio 2 esta situado en la calle: "+ edificio[1].imprimeCalle() + " numero: "+ edificio[1].imprimeNumero()+ "<br>");

    crearPlantaYPuertas();

    agregarPropietarios();
    
    edificio[0].imprimePlantas();
    edificio[1].imprimePlantas();
    
}

function crearEdificios(){
    
    edificio[0] = new edificios("Garcia Prieto", "58", "15706");
    edificio[1] = new edificios("Camino Caneiro", "29", "32004");
    edificio[2] = new edificios("San Clemente", "s/n", "15705");

    for (let i = 0; i < edificio.length; i++) {
        
        document.write("Construido nuevo edificio en calle: " + edificio[i].imprimeCalle() + ", nº: " + edificio[i].imprimeNumero() + ", C.P.: " + edificio[i].imprimeCodigoPostal()+ "<br>");
        
    }

}

function crearPlantaYPuertas() {

    edificio[0].agregarPlantasYPuertas(2,3);
    edificio[0].agregarPlantasYPuertas(1,3);
    edificio[1].agregarPlantasYPuertas(2,3);
    edificio[1].agregarPlantasYPuertas(1,4);
    edificio[1].agregarPlantasYPuertas(2,2);
    edificio[1].agregarPlantasYPuertas(4,1);

}

function agregarPropietarios(){
    edificio[0].agregarPropietario('Jose Antonio Lopez', 0, 0);
    edificio[0].agregarPropietario('Luisa Martinez', 0, 1);
    edificio[0].agregarPropietario('Marta Castellón', 0, 2);
    edificio[0].agregarPropietario('Antonio Pereira', 1, 1);
    edificio[0].agregarPropietario('Pedro Meijide', 2, 1);
    edificio[1].agregarPropietario('Jose Antonio Lopez', 0, 0);
    edificio[1].agregarPropietario('Luisa Martinez', 0, 1);
    edificio[1].agregarPropietario('Marta Castellón', 0, 2);
    edificio[1].agregarPropietario('Antonio Pereira', 1, 1);
    edificio[1].agregarPropietario('Pedro Meijide', 2, 1);
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
                this.puertas = puertas;
                for (let i = this.numplantas; i < nuevasPlantas ; i++) {
                    this.puerta=[]
                    for (let j = 0; j < this.puertas; j++) {
                        this.puerta[j] = "Vacio";
                    }
                    this.plantas.push(this.puerta);
                }
                this.numplantas += numplantas;
            }
            else{
                alert("No puede haber un numero de puertas negativo. Se usaran el mismo numero de puertas que la ultima vez");
    
                let nuevasPlantas = this.numplantas + numplantas;
                for (let i = this.numplantas; i < nuevasPlantas ; i++) {
                    this.puerta=[]
                    for (let j = 0; j < this.puertas; j++) {
                        this.puerta[j] = "Vacio";
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
            document.write(nombre + " es ahora propietario de la puerta " + puertaDePlanta + " de la planta "+ planta + " del edificio de la calle "+ this.imprimeCalle() + " numero " + this.imprimeNumero() +"<br>");
        }else{
            alert("La convinacion de puerta y planta no existe.");
        }
    }

    this.imprimeCalle = function (){
        return this.calle;
    }

    this.imprimeNumero = function (){
        return this.numero;
    }

    this.imprimeCodigoPostal = function (){
        return this.cod_postal;
    }

    this.imprimePlantas = function (){

        if (this.numplantas > 0) {
            document.write("<h2><br>Listado de propietarios del edificio calle: " + this.imprimeCalle() + " - Numero: "+ this.imprimeNumero() +"<br></h2>");
            for (let i = 0; i < this.numplantas; i++) {
                for (let j = 0; j < this.plantas[i].length; j++) {
                    document.write("Propietario de la puerta: "+ (j+1) + " de la planta: "+ (i+1) + ": "+ this.plantas[i][j]+"<br>");
                }   
            }
        }  
    }

}