import { Book } from "../types/index";
import { v4 as uuid } from "uuid";

export const books: Book[] = [
  {
    id: uuid(),
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    yearPublished: "1997",
    registerDate: new Date("2024-01-15"),
    genre: "Fantasia",
    synopsis:
      "Um jovem bruxo descobre sua verdadeira identidade e começa a frequentar a escola de magia de Hogwarts, onde enfrenta desafios mágicos e aventuras.",
  },
  {
    id: uuid(),
    title: "O Senhor dos Anéis: A Sociedade do Anel",
    author: "J.R.R. Tolkien",
    yearPublished: "1954",
    registerDate: new Date("2024-02-20"),
    genre: "Fantasia",
    synopsis:
      "O início de uma jornada épica para destruir um anel mágico com poderes destrutivos e garantir a sobrevivência da Terra-média.",
  },
  {
    id: uuid(),
    title: "O Mágico de Oz",
    author: "L. Frank Baum",
    yearPublished: "1900",
    registerDate: new Date("2024-03-05"),
    genre: "Fantasia",
    synopsis:
      "A história de Dorothy, uma jovem que é transportada para um mundo mágico e deve seguir a estrada de tijolos amarelos para encontrar o Mágico de Oz e voltar para casa.",
  },
  {
    id: uuid(),
    title: "A Bruxa de Portobello",
    author: "Paulo Coelho",
    yearPublished: "2006",
    registerDate: new Date("2024-04-10"),
    genre: "Fantasia",
    synopsis:
      "A jornada espiritual de Athena, uma mulher que descobre e abraça suas habilidades mágicas e busca entender seu lugar no mundo.",
  },
  {
    id: uuid(),
    title: "Animais Fantásticos e Onde Habitam",
    author: "J.K. Rowling",
    yearPublished: "2001",
    registerDate: new Date("2024-05-15"),
    genre: "Fantasia",
    synopsis:
      "Uma coleção de descrições de criaturas mágicas do mundo de Harry Potter, oferecendo uma visão mais profunda sobre esses seres fascinantes.",
  },
  {
    id: uuid(),
    title: "A Bela e a Fera",
    author: "Gabrielle-Suzanne Barbot de Villeneuve",
    yearPublished: "1740",
    registerDate: new Date("2024-06-20"),
    genre: "Fantasia",
    synopsis:
      "Uma história clássica sobre uma jovem que, ao ser capturada por uma fera mágica, descobre a verdadeira beleza e o amor.",
  },
  {
    id: uuid(),
    title: "Ciclo da Herança",
    author: "Christopher Paolini",
    yearPublished: "2002",
    registerDate: new Date("2024-07-25"),
    genre: "Fantasia",
    synopsis:
      "A saga de Eragon, um jovem que encontra um ovo de dragão e embarca em uma jornada para se tornar um Cavaleiro de Dragão e enfrentar um império tirânico.",
  },
  {
    id: uuid(),
    title: "O Leão, a Feiticeira e o Guarda-Roupa",
    author: "C.S. Lewis",
    yearPublished: "1950",
    registerDate: new Date("2024-08-30"),
    genre: "Fantasia",
    synopsis:
      "Quatro irmãos são transportados para o mundo mágico de Nárnia, onde enfrentam uma feiticeira e ajudam a restaurar a paz no reino.",
  },
  {
    id: uuid(),
    title: "A Magia do Mundo",
    author: "Terry Pratchett",
    yearPublished: "1990",
    registerDate: new Date("2024-09-10"),
    genre: "Fantasia",
    synopsis:
      "Uma comédia satírica que explora um mundo mágico cheio de personagens excêntricos e situações absurdas, com sutis comentários sociais.",
  },
  {
    id: uuid(),
    title: "Os Contos de Beedle, o Bardo",
    author: "J.K. Rowling",
    yearPublished: "2008",
    registerDate: new Date("2024-09-20"),
    genre: "Fantasia",
    synopsis:
      "Uma coleção de contos de fadas mágicos conhecidos no universo de Harry Potter, com histórias que transmitem lições e encantamentos.",
  },
  {
    id: uuid(),
    title: "As Aventuras de Tom Sawyer",
    author: "Mark Twain",
    yearPublished: "1876",
    registerDate: new Date("2024-01-10"),
    genre: "Aventura",
    synopsis:
      "A história de um jovem travesso, Tom Sawyer, e suas emocionantes aventuras ao longo do rio Mississippi.",
  },
  {
    id: uuid(),
    title: "A Ilha do Tesouro",
    author: "Robert Louis Stevenson",
    yearPublished: "1883",
    registerDate: new Date("2024-02-15"),
    genre: "Aventura",
    synopsis:
      "Um jovem chamado Jim Hawkins encontra um mapa do tesouro e embarca em uma perigosa aventura em busca de riquezas escondidas.",
  },
  {
    id: uuid(),
    title: "Robinson Crusoé",
    author: "Daniel Defoe",
    yearPublished: "1719",
    registerDate: new Date("2024-03-20"),
    genre: "Aventura",
    synopsis:
      "Um náufrago solitário sobrevive em uma ilha deserta, enfrentando desafios e aventuras enquanto luta pela sobrevivência.",
  },
  {
    id: uuid(),
    title: "Viagem ao Centro da Terra",
    author: "Júlio Verne",
    yearPublished: "1864",
    registerDate: new Date("2024-04-12"),
    genre: "Aventura",
    synopsis:
      "Um professor, seu sobrinho e um guia embarcam em uma perigosa jornada ao centro da Terra, enfrentando criaturas e fenômenos incríveis.",
  },
  {
    id: uuid(),
    title: "Moby Dick",
    author: "Herman Melville",
    yearPublished: "1851",
    registerDate: new Date("2024-05-18"),
    genre: "Aventura",
    synopsis:
      "A saga do Capitão Ahab e sua tripulação em uma obsessiva caçada à baleia branca, Moby Dick, pelos oceanos.",
  },
  {
    id: uuid(),
    title: "As Crônicas de Nárnia: O Peregrino da Alvorada",
    author: "C.S. Lewis",
    yearPublished: "1952",
    registerDate: new Date("2024-06-25"),
    genre: "Aventura",
    synopsis:
      "Edmundo, Lúcia e seu primo Eustáquio embarcam em uma emocionante jornada no navio Peregrino da Alvorada, explorando mares desconhecidos e ilhas misteriosas.",
  },
  {
    id: uuid(),
    title: "O Conde de Monte Cristo",
    author: "Alexandre Dumas",
    yearPublished: "1844",
    registerDate: new Date("2024-07-30"),
    genre: "Aventura",
    synopsis:
      "A incrível história de Edmond Dantès, um homem injustamente preso que escapa da prisão e busca vingança contra aqueles que o traíram.",
  },
  {
    id: uuid(),
    title: "O Mundo Perdido",
    author: "Arthur Conan Doyle",
    yearPublished: "1912",
    registerDate: new Date("2024-08-22"),
    genre: "Aventura",
    synopsis:
      "Um professor e seu grupo de exploradores descobrem uma região remota onde dinossauros e outras criaturas pré-históricas ainda existem.",
  },
  {
    id: uuid(),
    title: "O Capitão Corajoso",
    author: "Rudyard Kipling",
    yearPublished: "1897",
    registerDate: new Date("2024-09-05"),
    genre: "Aventura",
    synopsis:
      "A transformação de um jovem arrogante, que após um naufrágio é resgatado por um barco pesqueiro e aprende o verdadeiro valor do trabalho e da coragem.",
  },
  {
    id: uuid(),
    title: "20.000 Léguas Submarinas",
    author: "Júlio Verne",
    yearPublished: "1870",
    registerDate: new Date("2024-09-15"),
    genre: "Aventura",
    synopsis:
      "O Capitão Nemo e seu submarino Náutilus embarcam em uma jornada extraordinária através das profundezas dos oceanos, enfrentando criaturas marinhas e descobrindo mistérios subaquáticos.",
  },
  {
    id: uuid(),
    title: "Missão Impossível",
    author: "Bruce Geller",
    yearPublished: "1966",
    registerDate: new Date("2024-01-05"),
    genre: "Ação",
    synopsis:
      "Uma equipe de agentes secretos altamente treinados enfrenta missões perigosas e de alto risco ao redor do mundo.",
  },
  {
    id: uuid(),
    title: "Os Mercenários",
    author: "Sylvester Stallone",
    yearPublished: "2010",
    registerDate: new Date("2024-02-10"),
    genre: "Ação",
    synopsis:
      "Um grupo de mercenários veteranos é contratado para derrubar um ditador tirânico em uma perigosa missão de combate.",
  },
  {
    id: uuid(),
    title: "Duro de Matar",
    author: "Roderick Thorp",
    yearPublished: "1979",
    registerDate: new Date("2024-03-15"),
    genre: "Ação",
    synopsis:
      "O policial John McClane enfrenta um grupo de terroristas em um arranha-céu, lutando para salvar reféns, incluindo sua própria esposa.",
  },
  {
    id: uuid(),
    title: "O Protetor",
    author: "Antoine Fuqua",
    yearPublished: "2014",
    registerDate: new Date("2024-04-20"),
    genre: "Ação",
    synopsis:
      "Um ex-agente secreto, agora levando uma vida tranquila, volta à ação para proteger uma jovem ameaçada por criminosos perigosos.",
  },
  {
    id: uuid(),
    title: "Mad Max: Estrada da Fúria",
    author: "George Miller",
    yearPublished: "2015",
    registerDate: new Date("2024-05-25"),
    genre: "Ação",
    synopsis:
      "Em um futuro pós-apocalíptico, o guerreiro solitário Max se une a uma rebelde para escapar das garras de um tirano em uma perseguição épica no deserto.",
  },
  {
    id: uuid(),
    title: "John Wick",
    author: "Derek Kolstad",
    yearPublished: "2014",
    registerDate: new Date("2024-06-30"),
    genre: "Ação",
    synopsis:
      "Após a morte de seu cachorro, John Wick, um assassino aposentado, volta à ativa em busca de vingança contra uma perigosa organização criminosa.",
  },
  {
    id: uuid(),
    title: "Caçadores da Arca Perdida",
    author: "George Lucas",
    yearPublished: "1981",
    registerDate: new Date("2024-07-18"),
    genre: "Ação",
    synopsis:
      "O arqueólogo Indiana Jones enfrenta perigos e inimigos para encontrar a Arca da Aliança antes que ela caia nas mãos dos nazistas.",
  },
  {
    id: uuid(),
    title: "Gladiador",
    author: "David Franzoni",
    yearPublished: "2000",
    registerDate: new Date("2024-08-10"),
    genre: "Ação",
    synopsis:
      "Um general romano, traído e reduzido à escravidão, retorna como gladiador em busca de vingança contra o imperador que destruiu sua família.",
  },
  {
    id: uuid(),
    title: "Operação Invasão",
    author: "Gareth Evans",
    yearPublished: "2011",
    registerDate: new Date("2024-09-05"),
    genre: "Ação",
    synopsis:
      "Um grupo de policiais de elite invade um prédio controlado por criminosos, enfrentando desafios brutais enquanto tentam derrubar o líder do cartel.",
  },
  {
    id: uuid(),
    title: "O Último Samurai",
    author: "Edward Zwick",
    yearPublished: "2003",
    registerDate: new Date("2024-09-20"),
    genre: "Ação",
    synopsis:
      "Um ex-soldado americano é contratado para treinar o exército japonês, mas acaba se tornando aliado dos samurais em uma luta por honra e tradição.",
  },
  {
    id: uuid(),
    title: "1984",
    author: "George Orwell",
    yearPublished: "1949",
    registerDate: new Date("2024-01-12"),
    genre: "Ficção",
    synopsis:
      "Em um futuro distópico, a sociedade é controlada por um regime totalitário que monitora todos os aspectos da vida dos cidadãos.",
  },
  {
    id: uuid(),
    title: "Admirável Mundo Novo",
    author: "Aldous Huxley",
    yearPublished: "1932",
    registerDate: new Date("2024-02-20"),
    genre: "Ficção",
    synopsis:
      "Uma sociedade futurista, onde as pessoas são geneticamente programadas e condicionadas a aceitar seu papel em um sistema controlado por um governo global.",
  },
  {
    id: uuid(),
    title: "Neuromancer",
    author: "William Gibson",
    yearPublished: "1984",
    registerDate: new Date("2024-03-25"),
    genre: "Ficção",
    synopsis:
      "Um hacker é contratado para uma missão em um mundo onde o ciberespaço domina a realidade, e a linha entre humanos e máquinas é tênue.",
  },
  {
    id: uuid(),
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    yearPublished: "1953",
    registerDate: new Date("2024-04-10"),
    genre: "Ficção",
    synopsis:
      "Em uma sociedade onde os livros são proibidos, um bombeiro questiona seu papel ao incendiar obras literárias e decide lutar pela liberdade de pensamento.",
  },
  {
    id: uuid(),
    title: "Fundação",
    author: "Isaac Asimov",
    yearPublished: "1951",
    registerDate: new Date("2024-05-18"),
    genre: "Ficção",
    synopsis:
      "Em um vasto império galáctico, um matemático cria a Fundação para preservar o conhecimento humano e evitar a destruição da civilização.",
  },
  {
    id: uuid(),
    title: "O Homem do Castelo Alto",
    author: "Philip K. Dick",
    yearPublished: "1962",
    registerDate: new Date("2024-06-30"),
    genre: "Ficção",
    synopsis:
      "Em uma realidade alternativa onde os nazistas e os japoneses venceram a Segunda Guerra Mundial, os sobreviventes buscam resistir ao regime opressor.",
  },
  {
    id: uuid(),
    title: "Solaris",
    author: "Stanisław Lem",
    yearPublished: "1961",
    registerDate: new Date("2024-07-15"),
    genre: "Ficção",
    synopsis:
      "Uma equipe de cientistas tenta entender o misterioso oceano que cobre o planeta Solaris, que parece interagir de forma imprevisível com suas mentes.",
  },
  {
    id: uuid(),
    title: "A Máquina do Tempo",
    author: "H.G. Wells",
    yearPublished: "1895",
    registerDate: new Date("2024-08-20"),
    genre: "Ficção",
    synopsis:
      "Um cientista viaja pelo tempo e testemunha a evolução e a decadência da humanidade em um futuro distante.",
  },
  {
    id: uuid(),
    title: "O Guia do Mochileiro das Galáxias",
    author: "Douglas Adams",
    yearPublished: "1979",
    registerDate: new Date("2024-09-05"),
    genre: "Ficção",
    synopsis:
      "Um homem é salvo por um alienígena momentos antes da Terra ser destruída e embarca em uma viagem cômica e surreal pelo espaço.",
  },
  {
    id: uuid(),
    title: "Snow Crash",
    author: "Neal Stephenson",
    yearPublished: "1992",
    registerDate: new Date("2024-09-18"),
    genre: "Ficção",
    synopsis:
      "Em um futuro onde o mundo real e o ciberespaço estão intimamente conectados, um entregador de pizza e hacker enfrenta uma nova droga digital perigosa.",
  },
];
