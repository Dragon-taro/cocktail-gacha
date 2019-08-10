import {
  Liqueur,
  Base,
  Secret,
  Cocktail,
  Translator,
  Material
} from "../entity/cocktail";

export default class GachaService implements GachaImpl {
  private liqueur: Liqueur;
  private base: Base;
  private secret?: Secret;

  constructor() {
    this.execGacha();
  }

  getState() {
    // 翻訳
    const liqueurJa = this.translate(Material.Liqueur) || "";
    const baseJa = this.translate(Material.Base) || "";
    const secretJa = this.translate(Material.Secret);

    // redux側でのinterfaceに合わせる
    const state: Cocktail = {
      liqueur: liqueurJa,
      base: baseJa,
      secret: secretJa,
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
      case Material.Secret:
        return this.secret !== undefined
          ? Translator[Secret[this.secret]]
          : undefined;
    }
  }

  private execGacha() {
    // enumの長さを取得
    const liqueurLength = Object.keys(Liqueur).length / 2;
    const baseLength = Object.keys(Base).length / 2;
    const secretLength = Object.keys(Secret).length / 2;

    // indexをセット
    this.liqueur = this.random(liqueurLength);
    this.base = this.random(baseLength);

    // optionalのやつは確率1/2
    const secretRandom = this.random(secretLength * 2);
    this.secret = secretRandom < secretLength ? secretRandom : undefined;
  }

  private random(len: number): number {
    return Math.floor(Math.random() * len);
  }
}

export interface GachaImpl {
  getState(): Cocktail;
}
