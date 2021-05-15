import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { getCategoryList } from "../../Home/action";
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
  getProductBySubCategory: bindActionCreators(
    getProductBySubCategory,
    dispatch
  ),
});

function Layout(ChildComponent) {
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
      const { checkoutId } = this.state;
      this.setState({ modalOpenned: false });
      if (checkoutId) this.redirectUrl(`/checkout/${checkoutId}`);
    };

    openRegistration = (checkoutId) => {
      this.setState({ modalOpenned: true, checkoutId });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

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
      const { categoryList = [] } = this.props;
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
            {modalOpenned && <ModalForm proceedFurther={this.proceedFurther} />}
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
  return WrappedComponent;
}

export default compose(connect(mapStateToProps, mapDispatchToProps), Layout);
