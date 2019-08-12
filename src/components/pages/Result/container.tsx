import { connect } from "react-redux";

import { StateProps } from "./type";
import Index from "./presentation";

const mapStateToProps = (state: StateProps): StateProps => ({
  cocktail: state.cocktail
});

const mapDispatchToProps = (dispatch: any) => ({
  // execGacha: () => {
  //   dispatch(execGacha(new CocktailGachaService()));
  //   dispatch(setLoading());
  // },
  // execNonAlcoholGacha: () => {
  //   dispatch(execGacha(new NonAlcoholGachaService()));
  //   dispatch(setLoading());
  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
