import React, { Component } from "react";
import { Header, Accordion, Footer, ModalForm } from "../views";
import {
  HeaderContainer,
  SideBar,
  MainContainer,
  FooterContainer,
} from "./view";

export default function Layout(ChildComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showSideBar: true,
        isLoggedIn: this.props.isLoggedIn,
        modalOpenned: false
      };
    }

    componentDidMount() {
        window.addEventListener("resize", this.setState({ showSideBar: window.innerWidth > 768 }));
    }

    toggleBar = () => {
      const { showSideBar } = this.state;
      this.setState({ showSideBar: !showSideBar });
    };

    proceedFurther = () => {
      const { checkoutId } = this.state;
      this.setState({ modalOpenned: false });
      if (checkoutId) this.redirectUrl(`/checkout/${checkoutId}`)
    }

    openRegistration = (checkoutId) => {
      this.setState({ modalOpenned: true, checkoutId });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    gotToProduct = (link) => this.props.history.push(`/product/${link}`);

    redirectUrl = (url) => this.props.history.push(url);

    render() {
      const data = [
        {
          category: "Category 1",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory11",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory12",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory13",
            },
          ],
        },
        {
          category: "Category 2",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory21",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory22",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory23",
            },
          ],
        },
        {
          category: "Category 3",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory31",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory32",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory33",
            },
          ],
        },
        {
          category: "Category 4",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory41",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory42",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory43",
            },
          ],
        },
        {
          category: "Category 5",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory51",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory52",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory53",
            },
          ],
        },
        {
          category: "Category 6",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory61",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory62",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory63",
            },
          ],
        }
      ];
      const { showSideBar, isLoggedIn, modalOpenned } = this.state;
      return (
        <div>
          <HeaderContainer>
            <Header toggleBar={this.toggleBar} />
          </HeaderContainer>
          {showSideBar && (
            <SideBar className="pt-5">
              {data.map((item, index) => (
                <Accordion key={index} item={item} onSubCategoryClick={this.gotToProduct} />
              ))}
            </SideBar>
          )}
          <MainContainer
            style={showSideBar ? { marginLeft: "20%" } : { marginLeft: '2.5%' }}
          >
            {modalOpenned && 
              <ModalForm
                  proceedFurther={this.proceedFurther}
              />
            }
            <ChildComponent 
              redirectUrl={this.redirectUrl}
              isLoggedIn={isLoggedIn}
              openRegistration={this.openRegistration}
            />
          </MainContainer>
          <FooterContainer
            style={showSideBar ? { marginLeft: "20%" } : null}
          >
            <Footer />
          </FooterContainer>
        </div>
      );
    }
  };
}
