import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCart, deleteItemFromCart, orderItem } from "./action";
import Checkout from "./index";

const mapStateToProps = (props) => ({
  ...props,
});

const mapDispatchToProps = (dispatch) => ({
  updateCart: bindActionCreators(updateCart, dispatch),
  deleteItemFromCart: bindActionCreators(deleteItemFromCart, dispatch),
  orderItem: bindActionCreators(orderItem, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
