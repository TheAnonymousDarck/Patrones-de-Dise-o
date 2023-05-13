import  IFigure  from "../Interfaces/IFigure";

export default class Rectangle implements IFigure {
  constructor(private base: number, private altura: number) {}

  calcularArea(): number {
    return this.base * this.altura;
  }
}
