import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { getCartTotal } from '../../../utils/'
import {QtyBox} from './qty-box'
import { decrementQty, incrementQty } from '../../../actions'

class CartCompontent extends Component {
  render() {
      console.log('thisprops', this.props);
      const { cartItems, valuta, decrementClick, incrementClick} = this.props
    return (
      <div>
        <section>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-sm-12'}>
                            
                                    {cartItems.length>0
                                ? <table className={'cart-table'}>
                                    <tbody>

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
                                    {
                                        cartItems.map((item, index) => {
                                            return(
                                                <tr>
                                                    <td>
                                                        <Link>
                                                            <img src={item.images[0].url}/>
                                                        </Link>
                                                    </td>
                                                    <td>{item.title}</td>
                                                    <td>{item.publicPrice}</td>
                                                    <td>
                                                        <QtyBox item={item} decrementClick={decrementClick} incrementClick={incrementClick}/>
                                                    
                                                    
                                                    </td>
                                                    <td><span onClick={()=>{console.log('delete product');
                                                    }}>x</span></td>
                                                    <td>{valuta.symbol} {item.publicPrice*item.qty}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                                : <section className="cart-section section-b-space">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div >
                                                    <div className="col-sm-12 empty-cart-cls text-center">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`} className="img-fluid mb-4" alt="" />
                                                        <h3>
                                                            <strong>Your Cart is Empty</strong>
                                                        </h3>
                                                        <h4>Explore more shortlist some items.</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>}
                               
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
    return{
        cartItems: state.cartList,
        total: getCartTotal(state.cartList)
    }
}

const mapDispatchToprops = dispatch => {
    return {
        decrementClick: (item) => dispatch(decrementQty(item)),
        incrementClick: (item) => dispatch(incrementQty(item))
    }
}


export default connect(mapStateToprops, mapDispatchToprops)(CartCompontent);