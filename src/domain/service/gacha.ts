import {
  Liqueur,
  Base,
  Accent,
  Cocktail,
  Translator,
  Material
} from "../entity/cocktail";

export default class GachaService implements GachaImpl {
  private liqueur: Liqueur;
  private base: Base;
  private accent?: Accent;

  constructor() {
    this.execGacha();
  }

  getState() {
    // 翻訳
    const liqueurJa = this.translate(Material.Liqueur) || "";
    const baseJa = this.translate(Material.Base) || "";
    const secretJa = this.translate(Material.Accent);

    // redux側でのinterfaceに合わせる
    const state: Cocktail = {
      liqueur: liqueurJa,
      base: baseJa,
      accent: secretJa,
      name: liqueurJa + baseJa
    };

    return state;
  }

  private translate(type: Material): string | undefined {
    switch (type) {
      case Material.Liqueur:
        return Translator[Liqueur[this.liqueur]];
      case Material.Base:
        return Translator[Base[this.base]];
      case Material.Accent:
        return this.accent !== undefined
          ? Translator[Accent[this.accent]]
          : undefined;
    }
  }

  private execGacha() {
    // enumの長さを取得
    const liqueurLength = Object.keys(Liqueur).length / 2;
    const baseLength = Object.keys(Base).length / 2;
    const secretLength = Object.keys(Accent).length / 2;

    // indexをセット
    this.liqueur = this.random(liqueurLength);
    this.base = this.random(baseLength);

    // optionalのやつは確率1/2
    const secretRandom = this.random(secretLength * 2);
    this.accent = secretRandom < secretLength ? secretRandom : undefined;
  }

  private random(len: number): number {
    return Math.floor(Math.random() * len);
  }
}

export interface GachaImpl {
  getState(): Cocktail;
}
