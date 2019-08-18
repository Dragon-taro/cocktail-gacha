import { Cocktail } from "../../../domain/entity/cocktail";

export interface StateProps {
  cocktail: Cocktail;
}

export interface DisaptchProps {
  backToTop: () => void;
}

export type Props = StateProps & DisaptchProps;
