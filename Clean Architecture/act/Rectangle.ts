class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getArea(): number {
      return this.width * this.height;
    }

    public getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(8, 4);

console.log(`El area del rectángulo es: ${rectangle.getArea()}`);
console.log(`El perímetro del rectángulo es: ${rectangle.getPerimeter()}`); 

1 clase animal debe tener 2 propiedades privadas: nombre y edad. que se inicializarán en el constructor.
3 metodos publicos que serán: getNombre, getEdad y hacerSonido.
2 clases que hereden de animal: perro( getter raza y hacer sonido) y gato.
perro recibe 3 parametros raza.


crear 2 instancias, tigre que extiende de animal 



Animal y perro que extiende de animal