export interface Cocktail {
  name: string;
  liqueur: string;
  base: string;
  accent?: string;
}

export enum Liqueur {
  Malibu,
  Peach,
  Mango,
  Cassis,
  Aloe,
  Lychee
}

export enum Base {
  Pineapple,
  Orange,
  Grapefruit,
  Milk,
  Soda
}

export enum Accent {
  Gin,
  Honey,
  Rum,
  Vermut
}

export enum Material {
  Liqueur,
  Base,
  Accent
}

export const Translator: { [key: string]: string } = {
  Malibu: "マリブ",
  Peach: "ピーチ",
  Mango: "マンゴー",
  Cassis: "カシス",
  Aloe: "アロエ",
  Lychee: "ライチ",
  Pineapple: "パイナップル",
  Orange: "オレンジ",
  Grapefruit: "グレフル",
  Milk: "ミルク",
  Soda: "ソーダ",
  Gin: "ジン",
  Honey: "はちみつ",
  Rum: "ラム",
  Vermut: "ベルモット"
};
