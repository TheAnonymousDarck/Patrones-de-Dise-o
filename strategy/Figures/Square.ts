import  IFigure  from "../Interfaces/IFigure";

export default class Square implements IFigure {
  constructor(private lado: number) {}

  calcularArea(): number {
    return Math.pow(this.lado, 2);
  }
}

