import { connect } from "react-redux";

import { StateProps } from "./type";
import Index from "./presentation";
import { reset } from "../../../redux/loading/actions";

const mapStateToProps = (state: StateProps): StateProps => ({
  cocktail: state.cocktail
});

const mapDispatchToProps = (dispatch: any) => ({
  backToTop: () => {
    dispatch(reset());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
