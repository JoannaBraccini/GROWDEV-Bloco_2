import { Item } from "./ex1/Item";
import { Pedido } from "./ex1/Pedido";
import { Circulo } from "./ex2/Circulo";
import { Retangulo } from "./ex2/Retangulo";
import { Caixa } from "./ex4/Caixa";
import { Cliente } from "./ex4/Cliente";
import { Cozinheiro } from "./ex4/Cozinheiro";
import { cardapio } from "./ex4/db/cardapio";
import { Garcom } from "./ex4/Garcom";
import { Restaurante } from "./ex4/Restaurante";
import { PedidoEx } from "./ex5/Pedido";
import { ItemPedido } from "./ex5/ItemPedido";

//Ex: 1
// const item1 = new Item({ valor: 50, nome: "pizza", descricao: "calabresa" });
// const item2 = new Item({
//   valor: 25,
//   nome: "pizza simples",
//   descricao: "queijo",
// });

// const pedido = new Pedido({ itens: [] });

// pedido.adicionarItem(item1);
// pedido.adicionarItem(item2);

// console.log(pedido.getItens());
// console.log(pedido.valorTotal);

//Ex: 2
// const circulo = new Circulo(5);
// const retangulo = new Retangulo(10, 2);
// circulo.desenhar();
// circulo.redimensionar();
// circulo.redimensionar();
// circulo.raio = 1;
// circulo.desenhar();
// retangulo.desenhar();
// retangulo.redimensionar();

//Ex: 4
// const lancheria = new Restaurante("Comida Show", "Rua da Refeição, 123");
// const cozinheiro = new Cozinheiro("Arnaldo", "Manhã");
// const garcom = new Garcom("Enzo", "Manhã");
// const caixa = new Caixa("Shrek", "Manhã");
// const beth = new Cliente("Beth", 5);
// lancheria.adicionarFuncionario(cozinheiro);
// lancheria.adicionarFuncionario(garcom);
// lancheria.adicionarFuncionario(caixa);
// lancheria.adicionarCliente(beth);

// beth.pedirMenu();
// beth.fazerPedido(garcom, [cardapio[0], cardapio[3]]);

// console.log(lancheria);

//Ex.5
// const novoPedido = new PedidoEx();
// const item1 = new ItemPedido(50, "item1", 2);
// const item2 = new ItemPedido(10, "item2", 5);
// novoPedido.add(item1);
// novoPedido.add(item2);
// console.log(novoPedido);
// console.log(novoPedido.recuperarValorTotal());
// novoPedido.aplicarDescontoEmPorcentagem(10);
// console.log(novoPedido.recuperarValorTotal());
// novoPedido.aplicarDescontoEmReais(35);
// console.log(novoPedido.recuperarValorTotal());
// novoPedido.removerItem("item1");
// console.log(novoPedido);
