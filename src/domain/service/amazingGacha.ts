import {
  Cocktail,
  Translator,
  AmazingMaterial,
  AmazingLiqueur,
  AmazingBase,
  AmazingAccent
} from "../entity/cocktail";
import GachaService, { GachaImpl } from "./gacha";

export default class AmazingGachaService extends GachaService
  implements GachaImpl {
  constructor() {
    super();
  }

  getState() {
    // 翻訳
    const baseJa = this.translate(AmazingMaterial.AmazingLiqueur) || "";
    const base2Ja = this.translate(AmazingMaterial.AmazingBase) || "";
    const secretJa = this.translate(AmazingMaterial.AmazingAccent);

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
    const liqueurLength = Object.keys(AmazingLiqueur).length / 2;
    const baseLength = Object.keys(AmazingBase).length / 2;
    const accentLength = Object.keys(AmazingAccent).length / 2;

    // indexをセット
    this.base = this.random(liqueurLength);
    this.base2 = this.random(baseLength);
    this.accent = this.random(accentLength);
  }

  translate(type: AmazingMaterial): string | undefined {
    switch (type) {
      case AmazingMaterial.AmazingLiqueur:
        return Translator[AmazingLiqueur[this.base]];
      case AmazingMaterial.AmazingBase:
        return Translator[AmazingBase[this.base2]];
      case AmazingMaterial.AmazingAccent:
        return this.accent !== undefined
          ? Translator[AmazingAccent[this.accent]]
          : undefined;
    }
  }
}
