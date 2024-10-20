export interface Book {
  id: string;
  title: string;
  author: string;
  yearPublished: string;
  registerDate: Date;
  genre: string;
  synopsis: string;
}

export interface Card {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}
