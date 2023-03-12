class Animal{
    // private edad;
    // private name;
    // private spice;
    edad;
    name;
    spice;

    constructor(edad, name, spice){
        this.edad = edad;
        this.name = name;
        this.spice = spice;
    }

    getEdad(){
        return this.edad;
    }

    getInfo(){
        return {
            edad: this.edad,
            name: this.name,
            spice: this.spice
        }
    }

    envejecer(){
        this.edad++;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}



const cat = new Animal(1, 'cat', 'mamifero');

console.log(cat);