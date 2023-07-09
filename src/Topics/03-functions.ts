function addNumbers(a: number, b: number) {
  return a + b;
}

const addNumberArrow = (a: number, b: number): number => {
  return a + b;
};

// primero se coloca los parametros obligatorios, luego el opcional con ? y
//  al final los que tengan valores por defecto en este caso el valor 2 por defecto
function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 30,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 50);
strider.showHp();
multiply(3);
addNumbers(1, 4);
addNumberArrow(5, 60);
export {};
