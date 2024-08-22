// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.
// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.
// Exemplo:
// meuFusca = new Carro(15)
// meuFusca.adicionarGasolina(20)
// meuFusca.andar(100)
// meuFusca.obterGasolina()
export class Carro {
  consumo: number;
  nivelCombustivel: number;
  constructor(consumo: number) {
    this.consumo = consumo;
    this.nivelCombustivel = 0;
  }

  andar(distancia: number): string {
    const consumoTotal: number = distancia / this.consumo;

    if (this.nivelCombustivel == 0) {
      return "Tanque vazio. Abasteça com urgência!";
    } else if (consumoTotal <= this.nivelCombustivel) {
      this.nivelCombustivel -= consumoTotal;
      return `Distância percorrida: ${distancia}km. Combustível restante: ${this.nivelCombustivel} litros.`;
    } else {
      const distanciaPercorrida: number = this.nivelCombustivel * this.consumo;
      const distanciaRestante: number = distancia - distanciaPercorrida;
      this.nivelCombustivel = 0;
      return `Tanque vazio. Distância percorrida: ${distanciaPercorrida}km. Faltam ${distanciaRestante}km para o destino.`;
    }
  }
  obterGasolina(): string {
    return `O tanque tem ${this.nivelCombustivel} litros restantes.`;
  }
  adicionarGasolina(litros: number): string {
    this.nivelCombustivel += litros;
    return `Tanque abastecido com ${litros} litros. Quantidade total: ${this.nivelCombustivel} litros.`;
  }
}
