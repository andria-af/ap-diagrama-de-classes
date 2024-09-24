//1

export class Pedido {
    constructor(
        public itens: Item[] = [],
        public valorTotal: number = 0
    ){}

    adicionarItem(item: Item): void {
        this.itens.push(item);
        this.calcularValorTotal();
    }

    calcularValorTotal(): void {
        this.valorTotal = this.itens.reduce((total, item) => total + item.valor, 0);
    }
}

export class Item {
    constructor(
        public valor: number,
        public nome: string,
        public descricao: string
    ){}
}

//2

export class FormatoDeElemento{
    constructor(
    ){}

    public desenhar(){

    }

    public redimensionar(){

    }
}

export class Circulo implements FormatoDeElemento {
    constructor(
        public raio: number,
    ){}

    public desenhar(){
        //console.log(`Desenhar circulo com o raio ${this.raio}`)
    }

    public redimensionar(){
       //console.log(`Redimensionar o circulo com o raio ${this.raio}`)
    }

}

export class Retangulo implements FormatoDeElemento {
    constructor(
        public comprimento: number,
        public altura: number
    ){}

    public desenhar(){
        console.log(`Desenhar retangulo com o comprimento ${this.comprimento} e com a altura ${this.altura}.`)
    }

    public redimensionar(){
        console.log(`Redimensionar retangulo com o comprimento ${this.comprimento} e com a altura ${this.altura}.`)
    }

}

//4

export abstract class Pessoa {
    constructor(
        protected _nome: string,
        protected _cpf: string
    ){}
}

export class Musculacao{
    public correr(){
    }

    public treino(dia: string){

    }
}

export class Aluno extends Pessoa implements Musculacao{
    constructor(
        _nome: string,
        _cpf: string,
        private _matricula: number

    ){super(_nome, _cpf)}

    public correr(): void {
        console.log("Correr na esteira");
    }
    public treino(dia: string): void {
        if (dia === "segunda" || "quarta") {
            console.log("Dia de treinar 🦵🏽")
        } else if (dia === "terca" || "quinta") {
            console.log("Dia de treinar 💪🏽")            
        } else {
            console.log("Não é dia de treinar 😜")
        }
    }

    public get nome() : string {
        return this._nome
    }

    public get cpf() : string {
        return this._cpf
    }

    public get matricula() : number {
        return this._matricula
    }
}
