import { connect } from "react-redux";

import Index from "./presentation";
import { loaded } from "../../../redux/loading/actions";

const mapDispatchToProps = (dispatch: any) => ({
  skipLoading: () => {
    dispatch(loaded());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Index);
