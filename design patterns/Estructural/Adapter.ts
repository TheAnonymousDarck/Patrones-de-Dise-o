class Objective{

    public request(): string {
        return 'Este es el objetivo ya existente';
    }

}


class Anormal{
    public specificRequest(): string {
        return 'Este-es-el-objetivo-anormal';
    }
}


class Adapter extends Objective{
    private adatada: Anormal;

    constructor(adaptada:Anormal) {
        super();
        this.adatada = adaptada;
    }

    public request(): string {
        const result = this.adatada.specificRequest().replace(/[-]/g, ' ');
        return `Este es el objetivo adaptado: ${result}`;
    }
}

function client(objective:Objective){
    const result = objective.request();

    console.log(result);
    return result;
}

const objetivo = new Objective();
client(objetivo);

const anormal = new Anormal();

const resultAnormal = anormal.specificRequest();
console.log({resultAnormal});
const adapterAnormal = new Adapter(anormal);

