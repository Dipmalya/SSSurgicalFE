import React, { Component } from "react";
import { Header, Accordion, Footer } from "../views";
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
      };
    }

    componentDidMount() {
        window.addEventListener("resize", this.setState({ showSideBar: window.innerWidth > 768 }));
    }

    toggleBar = () => {
      const { showSideBar } = this.state;
      this.setState({ showSideBar: !showSideBar });
    };

    render() {
      const data = [
        {
          category: "Category 1",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
          ],
        },
        {
          category: "Category 2",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
          ],
        },
        {
          category: "Category 3",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
          ],
        },
        {
          category: "Category 4",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
          ],
        },
        {
          category: "Category 5",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
          ],
        },
        {
          category: "Category 6",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
          ],
        },
        {
          category: "Category 7",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
          ],
        },
        {
          category: "Category 8",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
          ],
        },
        {
          category: "Category 9",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
          ],
        },
        {
          category: "Category 10",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
          ],
        },
        {
          category: "Category 11",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
          ],
        },
        {
          category: "Category 12",
          options: [
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
            {
              subCategory: "Sub Category",
              link: "subcategory",
            },
          ],
        },
      ];
      const { showSideBar } = this.state;
      return (
        <div>
          <HeaderContainer>
            <Header toggleBar={this.toggleBar} />
          </HeaderContainer>
          {showSideBar && (
            <SideBar className="pt-5">
              {data.map((item, index) => (
                <Accordion key={index} item={item} />
              ))}
            </SideBar>
          )}
          <MainContainer
            style={showSideBar ? { marginLeft: "20%" } : { marginLeft: '2.5%' }}
          >
            <ChildComponent />
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
