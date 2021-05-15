import { connect } from "react-redux";
import Product from "./index";

const mapStateToProps = ({ viewProduct }) => ({
  viewProduct,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(Product);
