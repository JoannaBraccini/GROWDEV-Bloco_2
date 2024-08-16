export type Turno = "Manhã" | "Tarde" | "Noite";
export type Cargo = "Cozinheiro" | "Garçom" | "Caixa";
export interface Funcionario {
  nome: string;
  cargo: Cargo;
  turno: Turno;
}
