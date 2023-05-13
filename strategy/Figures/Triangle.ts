import  IFigure  from "../Interfaces/IFigure";

export default class Triangle implements IFigure 
{
    constructor(private base: number, private altura: number) {}

    calcularArea(): number {
      return (this.base * this.altura) / 2;
    }
}