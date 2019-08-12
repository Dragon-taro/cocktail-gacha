import { connect } from "react-redux";

import { execGacha } from "../../../redux/cocktail/actions";
import CocktailGachaService from "../../../domain/service/cocktailGacha";
import { StateProps } from "./type";
import Index from "./presentation";
import NonAlcoholGachaService from "../../../domain/service/NonAlcoholGacha";
import { setLoading } from "../../../redux/loading/effects";

const mapStateToProps = (state: StateProps): StateProps => ({
  loading: state.loading
});

export default connect(mapStateToProps)(Index);
