export interface Book {
  id: string;
  title: string;
  author: string;
  yearPublished: number;
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

export type TToast = "success" | "error";

export type Toast = {
  message: string;
  type: TToast;
  duration: number;
};
