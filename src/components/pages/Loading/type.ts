export interface StateProps {}

export interface DisaptchProps {
  skipLoading: () => void;
}

export type Props = StateProps & DisaptchProps;
