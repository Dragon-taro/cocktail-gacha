import {
  Cocktail,
  NonAlcoholMaterial,
  NonAlcoholBase,
  NonAlcoholBase2,
  NonAlcoholAccent,
  Translator
} from "../entity/cocktail";
import GachaService, { GachaImpl } from "./gacha";

export default class NonAlcoholGachaService extends GachaService
  implements GachaImpl {
  constructor() {
    super();
  }

  getState() {
    // 翻訳
    const baseJa = this.translate(NonAlcoholMaterial.NonAlcoholBase) || "";
    const base2Ja = this.translate(NonAlcoholMaterial.NonAlcoholBase2) || "";
    const secretJa = this.translate(NonAlcoholMaterial.NonAlcoholAccent);

    // redux側でのinterfaceに合わせる
    const state: Cocktail = {
      base: baseJa,
      base2: base2Ja,
      accent: secretJa,
      name: baseJa + base2Ja
    };

    return state;
  }

  execGacha() {
    // enumの長さを取得
    const baseLength = Object.keys(NonAlcoholBase).length / 2;
    const base2Length = Object.keys(NonAlcoholBase2).length / 2;
    const accentLength = Object.keys(NonAlcoholAccent).length / 2;

    // indexをセット
    this.base = this.random(baseLength);
    this.base2 = this.random(base2Length);

    // optionalのやつは確率1/2
    const secretRandom = this.random(accentLength * 2);
    this.accent = secretRandom < accentLength ? secretRandom : undefined;

    // 被ったら再帰的にやり直し
    if (NonAlcoholBase[this.base] === NonAlcoholBase2[this.base2])
      this.execGacha();
  }

  protected translate(type: NonAlcoholMaterial): string | undefined {
    switch (type) {
      case NonAlcoholMaterial.NonAlcoholBase:
        return Translator[NonAlcoholBase[this.base]];
      case NonAlcoholMaterial.NonAlcoholBase2:
        return Translator[NonAlcoholBase2[this.base2]];
      case NonAlcoholMaterial.NonAlcoholAccent:
        return this.accent !== undefined
          ? Translator[NonAlcoholAccent[this.accent]]
          : undefined;
    }
  }
}
