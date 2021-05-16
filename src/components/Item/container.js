import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "./action";
import Item from "./index";

const mapStateToProps = (props) => ({
  ...props,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: bindActionCreators(addToCart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
