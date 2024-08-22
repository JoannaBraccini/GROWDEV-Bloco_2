import { Base } from "./Base";
import { Rating } from "./Rating";
import { User } from "./User";
import { Comment } from "./Comment";
import { comments } from "../db/comments";
import { Rate } from "./Rating";
import { ratings } from "../db/ratings";
export class Product extends Base {
  public name: string;
  public value: number;

  private rating: Rating[] = [];

  constructor(name: string, value: number) {
    super();
    this.name = name;
    this.value = value;
  }

  public show(): string {
    this.showDetails();
    console.log("\n---------------------\n");
    return "";
  }

  private showDetails(): string {
    //mostrar o produto
    console.log(`${this.name} (R$ ${this.value})`);
    //buscar avaliações deste produto
    const ratesList = ratings.filter((rate) => rate.product === this);
    if (ratesList.length !== 0) {
      //somar avaliações
      const sumRates = ratesList.reduce((prev, curr) => prev + curr.rate, 0);
      //dividir pelo total de avaliações
      const media = sumRates / ratesList.length;
      // mostrar a média de avaliações
      console.log(`| Avaliação média: ${media.toFixed(1)} |`);
    } else {
      console.log("Ainda não existem avaliações para este produto.");
    }
    // mostrar todos os comentários
    /*
      -------------------
      Calca preta (R$ 300)
    | Avaliação média: 4.5 |
    [bruninha]: Muito bonita, preço bom
    [daphne]: Ficou grande
    
    -------------------
    */
    const commentsList = comments.filter((comment) => comment.product === this);
    commentsList.forEach((element) => {
      console.log(`[${element.user.username}]: ${element.content}`);
    });

    return ""; //só pra cumprir a requisição
  }

  public comment(content: string, user: User): void {
    const comment = new Comment(content, this, user);
    //this carrega todos os dados da classe
    comments.push(comment);
  }

  public rate(rate: Rate, user: User): void {
    const rating = new Rating(rate, this, user);
    ratings.push(rating);
  }
}
