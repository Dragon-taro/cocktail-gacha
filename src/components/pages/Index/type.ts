import { Cocktail } from "../../../domain/entity/cocktail";
import { Loading } from "../../../domain/entity/loading";

export interface StateProps {
  cocktail: Cocktail;
  loading: Loading;
}

export interface DisaptchProps {
  execGacha: (url: string) => void;
  execNonAlcoholGacha: (url: string) => void;
  execAmazingGacha: (url: string) => void;
}

export type Props = StateProps & DisaptchProps;
