import { Aluno, Circulo, Item, Pedido, Retangulo } from "./classes";

//1
const item1= new Item(10, "calça", "jens claro")
const item2= new Item(20, "tenis", "listrado")

let itens = Array <Item>;

const pedido1= new Pedido();

pedido1.adicionarItem(item1)
pedido1.adicionarItem(item2)

console.log(pedido1)

// 2

const circulo= new Circulo(20)
circulo.desenhar();
circulo.redimensionar();

const retangulo= new Retangulo(20,10);
retangulo.desenhar();
retangulo.redimensionar();




// 4

const aluno = new Aluno("Ândria", "00022002", 1234);

aluno.correr();

aluno.treino("segunda");