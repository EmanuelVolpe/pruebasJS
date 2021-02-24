class Dog {
    constructor(name) {
        this.name = name;
        this.ownProps = [];
        this.prototypeProps = [];
    }    
    
    
    agregaPropiedad() {
        for (let property in this) {
            if (this.hasOwnProperty(property)) {
                this.ownProps.push(property);
            } else {
                this.prototypeProps.push(property);
            }
        }
    }
    
    getName(){
        return this.name;
    }
}

let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;
beagle.agregaPropiedad();

console.log(beagle.prototypeProps)


//console.log(ownProps);
