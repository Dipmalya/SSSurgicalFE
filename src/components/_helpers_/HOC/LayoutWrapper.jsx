import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategoryList, loginUser } from "../../Home/action";
import { addToCart } from "../../Item/action";
import {
  getProductByCategory,
  getProductBySubCategory,
} from "../../Product/action";
import { Header, Accordion, Footer, ModalForm } from "../views";
import {
  HeaderContainer,
  SideBar,
  MainContainer,
  FooterContainer,
} from "./view";

const mapStateToProps = (props) => ({
  ...props,
});

const mapDispatchToProps = (dispatch) => ({
  getCategoryList: bindActionCreators(getCategoryList, dispatch),
  getProductByCategory: bindActionCreators(getProductByCategory, dispatch),
  loginUser: bindActionCreators(loginUser, dispatch),
  addToCart: bindActionCreators(addToCart, dispatch),
  getProductBySubCategory: bindActionCreators(
    getProductBySubCategory,
    dispatch
  ),
});

export default (ChildComponent) => {
  class WrappedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showSideBar: true,
        isLoggedIn: this.props.isLoggedIn,
        modalOpenned: false,
      };
    }

    componentDidMount() {
      const { categoryList, getCategoryList } = this.props;
      if (!categoryList.length) {
        getCategoryList();
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.addEventListener(
        "resize",
        this.setState({ showSideBar: window.innerWidth > 768 })
      );
    }

    toggleBar = () => {
      const { showSideBar } = this.state;
      this.setState({ showSideBar: !showSideBar });
    };

    proceedFurther = () => {
      this.setState({ modalOpenned: false });
      this.redirectUrl(`/checkout`);
    };

    openRegistration = (checkoutId) => {
      this.setState({ modalOpenned: true, checkoutId });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    handleCart = (id) => {
      const cartItem = this.props.viewProduct.find(data => data.itemId === id);
      this.props.addToCart(cartItem);
    }

    gotToProduct = (link, category) => {
      if (category) {
        this.props.getProductByCategory(link);
      } else {
        this.props.getProductBySubCategory(link);
      }
      this.props.history.push(`/product/${link}`);
    };

    redirectUrl = (url) => this.props.history.push(url);

    render() {
      const { categoryList = [], loginUser } = this.props;
      const { showSideBar, isLoggedIn, modalOpenned } = this.state;
      return (
        <div>
          <HeaderContainer>
            <Header toggleBar={this.toggleBar} />
          </HeaderContainer>
          {showSideBar && (
            <SideBar className="pt-5">
              {categoryList.length &&
                categoryList.map((item, index) => (
                  <Accordion
                    key={index}
                    item={item}
                    onSubCategoryClick={this.gotToProduct}
                  />
                ))}
            </SideBar>
          )}
          <MainContainer
            style={
              showSideBar ? { marginLeft: "22.5%" } : { marginLeft: "2.5%" }
            }
          >
            {modalOpenned && (
              <ModalForm
                proceedFurther={this.proceedFurther}
                onLogin={loginUser}
                itemId={this.props.history.location.pathname}
                addToCart={this.handleCart}
              />
            )}
            <ChildComponent
              {...this.props}
              redirectUrl={this.redirectUrl}
              isLoggedIn={isLoggedIn}
              openRegistration={this.openRegistration}
            />
          </MainContainer>
          <FooterContainer style={showSideBar ? { marginLeft: "22.5%" } : null}>
            <Footer />
          </FooterContainer>
        </div>
      );
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
};
