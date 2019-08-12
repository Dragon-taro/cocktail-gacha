import { Cocktail } from "../../../domain/entity/cocktail";
import { Loading } from "../../../domain/entity/loading";

export interface StateProps {
  cocktail: Cocktail;
}

export interface DisaptchProps {
  backToTop: () => void;
}

export type Props = StateProps & DisaptchProps;
