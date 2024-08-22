import { Product } from "./classes/Product";
import { User } from "./classes/User";

const pedrinho = new User("Pedro", "pedrinho", "pedrinh@");
const calca = new Product("Calça-jeans", 100);
const camisa = new Product("Gola polo", 150);

calca.comment("Muito grande!", pedrinho);
calca.rate(3, pedrinho);
calca.show();
pedrinho.addToCart(calca);
pedrinho.addToCart(camisa);
// pedrinho.removeFromCart(calca);
pedrinho.showCart();
