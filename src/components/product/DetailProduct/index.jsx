import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

class DetailProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      quantity: 1,
      stock: "InStock",
      nav3: null
    };
this.minusQty = this.minusQty.bind(this)
this.plusQty = this.plusQty.bind(this)
this.changeQty = this.changeQty.bind(this)
}

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    this.setState({
      nav3: this.slider3
    });
  }

  minusQty = () => {
      console.log('minusQTY')
    if (this.state.quantity > 1) {
      this.setState({ stock: "InStock" });
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  plusQty = () => {

    console.log('minusQTY')
    if (this.state.quantity) {
      this.setState({ quantity: this.state.quantity + 1 });
      console.log(this.props.item.stock, "STOCCK?");
    } else {
      this.setState({ stock: "Out of Stock !" });
    }
  };
  changeQty = e => {
    var qty = parseInt(e.target.value)
    
  if (!isNaN(qty)){
     this.setState({ quantity: parseInt(e.target.value) })
  }else{
   
  }
}

  render() {
    const {
      symbol,
      item,
      addToCart,
      BuynowClicked,
      addToWishlistClicked
    } = this.props;
    var colorsnav = {
      slidesToShow: 6,
      swipeToSlide: true,
      arrows: false,
      dots: false,
      focusOnSelect: true
    };

    console.log("sss", this.props);
    return (
      <div className="col-lg-6 rtl-text">
        <div className="product-right">
          <h2> {item.title} </h2>
          <h4>{item.publicPrice}</h4>
          <h3>
            {symbol}
            {item.price - (item.price * item.discount) / 100}{" "}
          </h3>
          {!item.variants ? (
            <ul>
              <li>Existen variantes</li>
            </ul>
          ) : (
            ""
          )}{" "}
          <span className="instock-cls">{this.state.stock}</span>
          <h6 className="product-title">quantity</h6>
          <div className="qty-box">
            <div className="input-group">
              <span className="input-group-prepend">
                <button
                  type="button"
                  className="btn quantity-left-minus"
                  onClick={this.minusQty}
                  data-type="minus"
                  data-field=""
                >
                  <i className="fa fa-angle-left"></i>
                </button>
              </span>
              <input
                type="text"
                name="quantity"
                value={this.state.quantity}
                onChange={this.changeQty}
                className="form-control input-number"
              />
              <span className="input-group-prepend">
                <button
                  type="button"
                  className="btn quantity-right-plus"
                  onClick={this.plusQty}
                  data-type="plus"
                  data-field=""
                >
                  <i className="fa fa-angle-right"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="product-buttons">
          <a
            className="btn btn-solid"
            onClick={() => addToCart(item, this.state.quantity)}
          >
            add to cart
          </a>
          <Link
            to={`${process.env.PUBLIC_URL}/checkout`}
            className="btn btn-solid"
            onClick={() => addToCart(item, this.state.quantity)}
          >
            buy now
          </Link>
        </div>
      </div>
    );
  }
}

export default DetailProduct;
