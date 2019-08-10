export interface CocktailState {
  name: string;
  liqueur: string;
  base: string;
  secret?: string;
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

export enum Secret {
  Gin,
  Honey,
  Rum,
  Vermut
}

export enum Material {
  Liqueur,
  Base,
  Secret
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
