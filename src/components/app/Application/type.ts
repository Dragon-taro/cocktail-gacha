import { Loading } from "../../../domain/entity/loading";

export interface StateProps {
  loading: Loading;
}

export interface DisaptchProps {}

export type Props = StateProps & DisaptchProps;
