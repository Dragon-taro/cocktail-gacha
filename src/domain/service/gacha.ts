import {
  Liqueur,
  Base,
  Accent,
  Cocktail,
  Material,
  NonAlcoholMaterial,
  NonAlcoholBase,
  NonAlcoholBase2,
  NonAlcoholAccent
} from "../entity/cocktail";

export default abstract class GachaService {
  protected base: Liqueur | NonAlcoholBase;
  protected base2: Base | NonAlcoholBase2;
  protected accent?: Accent | NonAlcoholAccent;

  constructor() {
    this.execGacha();
  }

  abstract getState(): Cocktail;

  protected abstract execGacha(): void;

  protected abstract translate(
    type: Material | NonAlcoholMaterial
  ): string | undefined;

  protected random(len: number): number {
    return Math.floor(Math.random() * len);
  }
}

export interface GachaImpl {
  getState(): Cocktail;
}
