class Pila{
    
    static contadorPilas = 0; //estatico de Clase

    constructor(){
        this.count = 0;
        this.items = [];
        this.numPila = ++Pila.contadorPilas;
    }

    agregaItem(item){
        this.items.push(item);
        this.count += 1;
    }

    getNumeroPila(){
        return this.numPila;
    }

    getItems(){
        return this.items;
    }

    getCount(){
        return this.count;
    }

    toString(){
        return `ID Pila: ${this.getNumeroPila()}\nitems: ${this.getItems()}\nCant de elementos de la pila: ${this.getCount()}`;
    }

    static getContadorPilas(){
        return `Hay un total de ${Pila.contadorPilas} pilas`;
    }

}

pil = new Pila();
pil.agregaItem(1200);
pil.agregaItem(1204500);

pil2 = new Pila();
pil2.agregaItem("manu");
pil2.agregaItem("Volpe");

console.log(pil2.toString())
//console.log(pil.toString());
//console.log(Pila.getContadorPilas());