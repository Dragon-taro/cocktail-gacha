import { connect } from "react-redux";

import { execGacha } from "../../../redux/cocktail/actions";
import CocktailGachaService from "../../../domain/service/cocktailGacha";
import { StateProps } from "./type";
import Index from "./presentation";
import NonAlcoholGachaService from "../../../domain/service/NonAlcoholGacha";
import { setLoading } from "../../../redux/loading/effects";
import AmazingGachaService from "../../../domain/service/amazingGacha";

const mapStateToProps = (state: StateProps): StateProps => ({
  cocktail: state.cocktail,
  loading: state.loading
});

const mapDispatchToProps = (dispatch: any) => ({
  execGacha: (url: string) => {
    dispatch(execGacha(new CocktailGachaService()));
    dispatch(setLoading(url));
  },
  execNonAlcoholGacha: (url: string) => {
    dispatch(execGacha(new NonAlcoholGachaService()));
    dispatch(setLoading(url));
  },
  execAmazingGacha: (url: string) => {
    dispatch(execGacha(new AmazingGachaService()));
    dispatch(setLoading(url));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
