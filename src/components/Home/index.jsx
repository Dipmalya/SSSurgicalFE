import React, { Component } from "react";
import Layout from "../_helpers_/HOC/LayoutWrapper";
import Carousel from "../_helpers_/views/Carousel";
import QuoteForm from "../_helpers_/views/helpers/QuoteForm";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <div className="my-5">
          <h4>Products</h4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nulla perferendis doloremque, laborum libero nemo nostrum in aut mollitia impedit iure, debitis sit. Eum quasi tenetur doloribus quae optio neque error, voluptates incidunt excepturi perspiciatis nam, molestias laudantium alias culpa ipsum aspernatur perferendis a minus. Et dolor molestiae quos quis neque molestias amet ex magni, aspernatur, ipsum ratione. Soluta, ab eius nihil voluptatum nostrum sit odio incidunt odit consequatur vel molestias obcaecati ratione dolores fugiat laboriosam deserunt et. Commodi quasi tempore deleniti quod dolorem accusantium numquam eveniet delectus, quam iste. Accusamus provident maiores laborum tempore quaerat omnis ratione, iste expedita?
        </div>
        <div className="my-5">
          <h4>Get Instant Quote</h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt consequatur aut magni fuga numquam sunt dolores, necessitatibus provident rem voluptas soluta laborum repellat ut.
          <div className="my-3 mr-3">
            <QuoteForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout(Home);