/* eslint-disable padded-blocks */
export interface Candidato {
  Img: string;
  Nome: string;
  Votos: number;
  Color: string;
}
export const users: string[] = [];
export const canditados: Candidato[] = [
  {
    Nome: "Sonic 2",
    Votos: 0,
    Color: "blue",
    Img: `${process.env.images}sonic2.jpg`,
  },
  {
    Nome: "The Last Of Us",
    Votos: 0,
    Color: "gray",
    Img: `${process.env.images}the_last_of_us.webp`,
  },
  {
    Nome: "Cupehead",
    Votos: 0,
    Color: "rgb(174, 53, 53)",
    Img: `${process.env.images}cuphead.webp`,
  },
  {
    Nome: "Mario",
    Votos: 0,
    Color: "red",
    Img: `${process.env.images}mario.jpg`,
  },
  {
    Nome: "FNAF",
    Votos: 0,
    Color: "purple",
    Img: `${process.env.images}fnaf.webp`,
  },
  {
    Nome: "Angry Birds",
    Votos: 0,
    Color: "black",
    Img: `${process.env.images}angry_birds.png`,
  },
];
