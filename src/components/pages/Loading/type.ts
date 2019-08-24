import { Loading } from "../../../domain/entity/loading";

export interface StateProps {
  loading: Loading;
}

export interface DisaptchProps {
  skipLoading: () => void;
}

export type Props = StateProps & DisaptchProps;
