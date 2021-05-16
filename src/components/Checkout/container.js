import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCart, deleteItemFromCart } from "./action";
import Checkout from "./index";

const mapStateToProps = (props) => ({
  ...props,
});

const mapDispatchToProps = (dispatch) => ({
  updateCart: bindActionCreators(updateCart, dispatch),
  deleteItemFromCart: bindActionCreators(deleteItemFromCart, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
