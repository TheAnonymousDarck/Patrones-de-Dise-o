import  IFigure  from "../Interfaces/IFigure";

export default class Circle implements IFigure 
{
    constructor(private radio: number) {}
  
    calcularArea(): number {
      return Math.PI * Math.pow(this.radio, 2);
    }
}