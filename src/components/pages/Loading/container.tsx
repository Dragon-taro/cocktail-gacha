import { connect } from "react-redux";

import Index from "./presentation";
import { loaded } from "../../../redux/loading/actions";
import { StateProps } from "./type";

const mapStateToProps = (state: StateProps): StateProps => ({
  loading: state.loading
});

const mapDispatchToProps = (dispatch: any) => ({
  skipLoading: () => {
    dispatch(loaded());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
