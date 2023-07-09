const skills: string[] = ["bas", "count", "heald"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["bas", "conunter"],
};

strider.hometown = "rivendell";

console.table(strider);
export {};
