import React, { Component } from "react";
import { connect } from "react-redux";
import { productExist } from "../../services";
import { Redirect } from "react-router-dom";

//import the component from  product-layout
import ProductLayout from "../product/product-layout";

class productPage extends Component {
  render() {
    let productId = this.props.match.params.id;
    const { isLoading } = this.props;
    if (!isLoading) {
      var product = productExist(this.props.products, productId);
    }

    return product ? <ProductLayout item={product} /> : <Redirect to="/" />;
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.data.isLoading,
    products: state.data.products
  };
};

export default connect(mapStateToProps)(productPage);
