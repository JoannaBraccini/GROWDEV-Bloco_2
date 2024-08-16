export abstract class Animal {
  protected nome: string;
  protected funcao: string;
  protected localizacao: string;

  constructor(nome: string, funcao: string, localizacao: string) {
    this.nome = nome;
    this.funcao = funcao;
    this.localizacao = localizacao;
  }
  verDadosDoAnimal(): void {
    console.log(
      `Nome: ${this.nome}\nFunção: ${this.funcao}\nLocalização: ${this.localizacao}`
    );
  }

  comer(alimento: string): void {
    console.log(this.nome + " está comendo " + alimento);
  }
  dormir(): void {
    console.log(this.nome + " está descansando zZzZz");
  }
  trabalhar(): void {
    console.log(this.nome + " está trabalhando na fazenda.");
  }
}
