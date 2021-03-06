import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotal } from "../../../utils/";
import { QtyBox } from "./qty-box";
import { decrementQty, incrementQty, removeFromCart } from "../../../actions";

class CartCompontent extends Component {
  render() {
    console.log("thisprops en chekcout", this.props);
    const {
      cartItems,
      valuta,
      decrementClick,
      incrementClick,
      removeFromCart
    } = this.props;
    return (
      <div>
        <section className="cart-section section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                {cartItems.length > 0 ? (
                  <table className="table cart-table table-responsive-xs">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        <th>total</th>
                      </tr>
                    </thead>
                    {cartItems.map((item, index) => {
                      return (
                        <tbody>
                          <tr>
                            <td>
                              <Link>
                                <img src={item.images[0].url} width="100" />
                              </Link>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.publicPrice}</td>
                            <td>
                              <QtyBox
                                item={item}
                                decrementClick={decrementClick}
                                incrementClick={incrementClick}
                              />
                            </td>
                            <td>
                              <span
                                onClick={() => {
                                  removeFromCart(item);
                                }}
                              >
                                x
                              </span>
                            </td>
                            <td>
                              {valuta.symbol} {item.publicPrice * item.qty}
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                ) : (
                  <section className="cart-section section-b-space">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12">
                          <div>
                            <div className="col-sm-12 empty-cart-cls text-center">
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`}
                                className="img-fluid mb-4"
                                alt=""
                              />
                              <h3>
                                <strong>Your Cart is Empty</strong>
                              </h3>
                              <h4>Explore more shortlist some items.</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </div>
            <div className="row cart-buttons">
              <div className="col-6">
                <Link
                  to={`${process.env.PUBLIC_URL}/checkout`}
                  className="btn btn-solid"
                >
                  check out
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToprops = state => {
  var valuta;
  return {
    cartItems: state.cartList.cart,
    total: getCartTotal(state.cartList),
    valuta: (valuta = { symbol: "$" })
  };
};

const mapDispatchToprops = dispatch => {
  return {
    decrementClick: item => dispatch(decrementQty(item)),
    incrementClick: item => dispatch(incrementQty(item)),
    removeFromCart: item => dispatch(removeFromCart(item))
  };
};

export default connect(mapStateToprops, mapDispatchToprops)(CartCompontent);
