import { Cocktail } from "../../../domain/entity/cocktail";
import { Loading } from "../../../domain/entity/loading";

export interface StateProps {
  cocktail: Cocktail;
  loading: Loading;
}

export interface DisaptchProps {
  execGacha: () => void;
  execNonAlcoholGacha: () => void;
}

export type Props = StateProps & DisaptchProps;
