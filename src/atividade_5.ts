


export class Desconto {
  public aplicarDescontoEmPorcentagem(desconto: number): void{}

  public aplicarDescontoEmReais(desconto: number): void {}
}

export class ValorPedido {

  public recuperarValorTotal(): number {
    return 0;
  }
  
}

class Pedido implements ValorPedido {
  
  itens: ItemPedido[] = [];

  add(item: ItemPedido): void {
    this.itens.push(item);
  }

  removeItem(item: string): void {
    const index = this.itens.findIndex((i) => i.nome === item);
    if (index > -1) {
      this.itens.splice(index, 1);
    }
  }

  public recuperarValorTotal(): number {
    let total = this.itens
      .map((i) => i.recuperarValorTotal())
      .reduce((sum, v) => sum + v, 0);

    return total;
  }

}

class ItemPedido implements ValorPedido, Desconto {
 
  valor: number;
  nome: string;
  quantidade: number;

  constructor(valor: number, nome: string, quantidade: number) {
    this.valor = valor;
    this.nome = nome;
    this.quantidade = quantidade;
  }

  public aplicarDescontoEmPorcentagem(desconto: number): void {
    const porcentagem = desconto / 100;
    const descontoEmReais = this.valor * porcentagem;
    this.valor -= descontoEmReais;
  }

  public aplicarDescontoEmReais(desconto: number): void {
    this.valor -= desconto;
  }

  public recuperarValorTotal(): number {
    return this.valor * this.quantidade;
  }
}