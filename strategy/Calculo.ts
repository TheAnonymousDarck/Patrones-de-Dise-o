import IFigure from "./Interfaces/IFigure";

export default class CalculadorArea {
  constructor(private figura: IFigure) {}

  calcularArea(): number {
    return this.figura.calcularArea();
  }
}
