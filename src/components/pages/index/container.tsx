import { Dispatch } from "redux";
import { connect } from "react-redux";

import { execGacha } from "../../../redux/cocktail/actions";
import CocktailGachaService from "../../../domain/service/cocktailGacha";
import { StateProps } from "./type";
import Index from "./presentation";

const mapStateToProps = (state: StateProps): StateProps => ({
  cocktail: state.cocktail
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  execGacha: () => {
    dispatch(execGacha(new CocktailGachaService()));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
