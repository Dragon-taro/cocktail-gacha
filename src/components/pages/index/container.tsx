import { Dispatch } from "redux";

import { execGacha } from "../../../redux/cocktail/actions";
import GachaService from "../../../domain/service/gacha";
import { StateProps } from "./type";
import { connect } from "react-redux";
import Index from "./presentation";

const mapStateToProps = (state: StateProps): StateProps => ({
  cocktail: state.cocktail
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  execGacha: () => {
    dispatch(execGacha(new GachaService()));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
