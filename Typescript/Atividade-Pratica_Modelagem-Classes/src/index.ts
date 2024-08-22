import { Bola } from "./Bola";
import { Calculadora } from "./Calculadora";
import { Carro } from "./Carro";
import { ContaCorrente } from "./ContaCorrente";
import { Contador } from "./Contador";
import { BombaCombustivel } from "./PostoIpiranga/BombaCombustível";

//testes
const bola = new Bola("azul", "50cm", "plástico");
// console.log(bola.pegarBola());
// console.log(bola.mostrarCorDaBola());
// console.log(bola.trocarCorDaBola("Vermelha"));

const calculadora = new Calculadora();
// console.log(calculadora.dividir(10, 2));
// console.log(calculadora.dividir(3, 0));
// console.log(calculadora.multiplicar(10, 2));
// console.log(calculadora.multiplicar(3, -2));
// console.log(calculadora.somar(10, 2));
// console.log(calculadora.somar(3, -4));
// console.log(calculadora.subtrair(10, 2));
// console.log(calculadora.subtrair(3, 2.5));
// console.log(calculadora.mostrarOperacoes());

const carro = new Carro(10);
// console.log(carro.andar(10));
// console.log(carro.adicionarGasolina(20));
// console.log(carro.andar(100));
// console.log(carro.andar(150));
// console.log(carro.obterGasolina());

const conta = new ContaCorrente(1234, "Joanna", 500);
// console.log(conta.alterarNome("Joanna Braccini"));
// console.log(conta.fazerSaque(600));
// console.log(conta.fazerSaque(100));
// console.log(conta.fazerDeposito(100));
// console.log(conta.consultarSaldo());
// console.log(conta.consultarExtrato());

const contagem = new Contador();
// console.log(contagem.mostrarContador());
// console.log(contagem.incrementarContador());
// console.log(contagem.incrementarContador());
// console.log(contagem.incrementarContador());
// console.log(contagem.zerarContador());
// console.log(contagem.mostrarContador());

const bomba = new BombaCombustivel("diesel", 5, 100);
// console.log(bomba.alterarValor(10));
// console.log(bomba.alterarQuantidadeCombustivel(200));
// console.log(bomba.alterarCombustivel("gasolina"));
// console.log(bomba.abastecerPorLitro(50));
// console.log(bomba.abastecerPorValor(102.5));
// console.log(bomba.verificarBomba());
// console.log(bomba.abastecerPorLitro(140));
