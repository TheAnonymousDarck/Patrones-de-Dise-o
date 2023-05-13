import Triangle from "./Figures/Triangle";
import Circle from "./Figures/Circle";
import Square from "./Figures/Square";
import Rectangle from "./Figures/Rectangle";
import CalculadorArea from "./Calculo";

const triangulo = new Triangle(5, 4);
const circulo = new Circle(3);
const cuadrado = new Square(2);
const rectangulo = new Rectangle(6, 3);

const calculadoraTriangulo = new CalculadorArea(triangulo);
const calculadoraCirculo = new CalculadorArea(circulo);
const calculadoraCuadrado = new CalculadorArea(cuadrado);
const calculadoraRectangulo = new CalculadorArea(rectangulo);

console.log("Área del triángulo:", calculadoraTriangulo.calcularArea()); // Área del triángulo: 10
console.log("Área del círculo:", calculadoraCirculo.calcularArea()); // Área del círculo: 28.274333882308138
console.log("Área del cuadrado:", calculadoraCuadrado.calcularArea()); // Área del cuadrado: 4
console.log("Área del rectángulo:", calculadoraRectangulo.calcularArea()); // Área del rectángulo
