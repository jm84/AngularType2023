interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "What do you want from me",
  details: {
    author: "Pink Floyd",
    year: 1976,
  },
};

// al colocar dos punto  se puede agregar un nuevo valor a la variable destructurada
// esto puede ser necesario en caso que la variable se llame igual que otra presente en el código
// en el caso de detail, hay que crear primero la variable dentro del primer const para poder usarla en el segundo

const { audioVolume, songDuration: duration, details } = audioPlayer;
const { author } = details;
console.log(`el valor de audio volumen es ${audioVolume}`);
console.log(`La dureación de la canción es:  ${duration}`);
console.log(`El autor de la canción es:  ${author}`);

// destructurar Arreglo

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [, , p3 = "no encontrado", p4 = "no encontrado"] = dbz;
const trunks = dbz[3] || "Personaje no encontrado";
console.error(trunks);
console.log("personaje 3 :", p3, p4);

export {};
