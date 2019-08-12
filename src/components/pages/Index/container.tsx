import { connect } from "react-redux";

import { execGacha } from "../../../redux/cocktail/actions";
import CocktailGachaService from "../../../domain/service/cocktailGacha";
import { StateProps } from "./type";
import Index from "./presentation";
import NonAlcoholGachaService from "../../../domain/service/NonAlcoholGacha";
import { setLoading } from "../../../redux/loading/effects";

const mapStateToProps = (state: StateProps): StateProps => ({
  cocktail: state.cocktail,
  loading: state.loading
});

const mapDispatchToProps = (dispatch: any) => ({
  execGacha: () => {
    dispatch(execGacha(new CocktailGachaService()));
    dispatch(setLoading());
  },
  execNonAlcoholGacha: () => {
    dispatch(execGacha(new NonAlcoholGachaService()));
    dispatch(setLoading());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
