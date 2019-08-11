import { Cocktail } from "../../../domain/entity/cocktail";

export interface StateProps {
  cocktail: Cocktail;
}

export interface DisaptchProps {
  execGacha: () => void;
  execNonAlcoholGacha: () => void;
}

export type Props = StateProps & DisaptchProps;
