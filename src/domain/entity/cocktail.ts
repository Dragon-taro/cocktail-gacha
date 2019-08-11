export interface Cocktail {
  name: string;
  base: string;
  base2: string;
  accent?: string;
}

// リキュール
export enum Liqueur {
  Malibu,
  Peach,
  Mango,
  Cassis,
  Aloe,
  Lychee
}

// カクテルの割材
export enum Base {
  Pineapple,
  Orange,
  Grapefruit,
  Milk,
  Soda
}

// カクテルの隠し味
export enum Accent {
  Gin,
  Honey,
  Rum,
  Vermut
}

// カクテルの材料
export enum Material {
  Liqueur,
  Base,
  Accent
}

// ノンアルのベース
export enum NonAlcoholBase {
  Pineapple,
  Orange,
  Cola,
  Ginger
}

// ノンアルのベース
export enum NonAlcoholBase2 {
  Pineapple,
  Orange,
  Cola,
  Ginger,
  Calpis
}

// ノンアルの隠し味
export enum NonAlcoholAccent {
  Grenadine,
  Lime,
  Lemon,
  GumSyrup
}

// ノンアルの材料
export enum NonAlcoholMaterial {
  NonAlcoholBase,
  NonAlcoholBase2,
  NonAlcoholAccent
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
  Vermut: "ベルモット",
  Cola: "コーラ",
  Ginger: "ジンジャー",
  Calpis: "カルピス",
  Grenadine: "グレナデンシロップ",
  Lime: "ライムジュース",
  Lemon: "レモンジュース",
  GumSyrup: "ガムシロップ"
};
