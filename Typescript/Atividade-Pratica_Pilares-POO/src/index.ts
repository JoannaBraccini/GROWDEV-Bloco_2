// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.
import { Camarote } from "./Cinema/Camarote";
import { Normal } from "./Cinema/Normal";
import { VIP } from "./Cinema/VIP";
import { Cachorro } from "./Fazenda/Cachorro";
import { Cavalo } from "./Fazenda/Cavalo";
import { Gato } from "./Fazenda/Gato";

const ingressoNormal = new Normal(10);
ingressoNormal.imprimeValor();
const ingressoVip = new VIP(10, 5);
ingressoVip.imprimeValor();
const ingressoCamarote = new Camarote(10, 10);
ingressoCamarote.imprimeValor();

// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.
import { Novo } from "./Imobiliaria/Novo";
import { Velho } from "./Imobiliaria/Velho";

const novoImovel = new Novo("Rua das Casinhas, 123", 150000, 10000);
novoImovel.acessarDados();
novoImovel.imprimirValor();
const velhoImovel = new Velho("Rua das Mansões, 321", 5000000, 100000);
velhoImovel.acessarDados();
velhoImovel.imprimirValor();
// 3. Dado o seguinte diagrama:
// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.
const cachorro = new Cachorro("Rex", "guarda", "portão");
cachorro.verDadosDoAnimal();
cachorro.comer("ração");
cachorro.dormir();
cachorro.trabalhar();

const cavalo = new Cavalo("Thor", "carregador de carga", "campo");
cavalo.verDadosDoAnimal();
cavalo.comer("feno");
cavalo.dormir();
cavalo.trabalhar();

const gato = new Gato("Chico", "caçador", "celeiro");
gato.verDadosDoAnimal();
gato.comer("ração");
gato.dormir();
gato.trabalhar();
