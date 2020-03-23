import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { productExist } from "../../services";
import { Router, Route, Redirect, Link } from "react-router-dom";
import {addToCart} from '../../actions/index'


// import custom Components
import DetailProduct from "../product/DetailProduct";

import ImageZoom from "../common/ImageZoom";
import SmallImages from "../common/SmallImages";

class productLayout extends Component {
  constructor() {
    super();
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const {symbol, item, addToCartcartClick, addToCartUnsafe, addToWishlist} = this.props
    var products = {
        fade: true
    };
console.log(this.props, 'el estado')
    var productsnav = {
        slidesToShow: 3,
        slidesToScroll:1,
        swipeToSlide:true,
        draggable:true,
        focusOnSelect: true
    };
    

    return (
      <div>
        <section>
          <div className="collection-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 product-thumbnail">
                <Slider {...products} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="product-slick">
                                        {item.images.map((vari, index) =>
                                            <div key={index}>
                                                <ImageZoom image={vari.url} className="img-fluid image_zoom_cls-0" />
                                            </div>
                                        )}
                                    </Slider>
                                    <SmallImages item={item} settings={productsnav} navOne={this.state.nav1} />

                </div>
                <DetailProduct
                  symbol={"symbol"}
                  item={item}
                  navOne={"this.state.nav1"}
                  addToCart={addToCartcartClick}
                />
              </div>
            </div>
          </div>
        </section>
        {/*Section End*/}

        <section className="tab-product m-0">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-12">
              </div>
            </div>
          </div>
        </section>
        <div>RELATED PRODUCT</div>
      </div>
    );
  }
}
const mapDispatchtoProps = (dispatch) =>{
  return {
    addToCartcartClick: (item, quantity) => dispatch(addToCart(item, quantity))
  }
}
const mapStateToProps = (state, ownProps) => {
  return {};
};


export default connect(mapStateToProps, mapDispatchtoProps)(productLayout);
