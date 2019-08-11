import {
  Cocktail,
  Liqueur,
  Base,
  Accent,
  Material,
  Translator
} from "../entity/cocktail";
import GachaService, { GachaImpl } from "./gacha";

export default class CocktailGachaService extends GachaService
  implements GachaImpl {
  constructor() {
    super();
  }

  getState() {
    // 翻訳
    const baseJa = this.translate(Material.Liqueur) || "";
    const base2Ja = this.translate(Material.Base) || "";
    const secretJa = this.translate(Material.Accent);

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
    const liqueurLength = Object.keys(Liqueur).length / 2;
    const baseLength = Object.keys(Base).length / 2;
    const accentLength = Object.keys(Accent).length / 2;

    // indexをセット
    this.base = this.random(liqueurLength);
    this.base2 = this.random(baseLength);

    // optionalのやつは確率1/2
    const secretRandom = this.random(accentLength * 2);
    this.accent = secretRandom < accentLength ? secretRandom : undefined;
  }

  translate(type: Material): string | undefined {
    switch (type) {
      case Material.Liqueur:
        return Translator[Liqueur[this.base]];
      case Material.Base:
        return Translator[Base[this.base2]];
      case Material.Accent:
        return this.accent !== undefined
          ? Translator[Accent[this.accent]]
          : undefined;
    }
  }
}
