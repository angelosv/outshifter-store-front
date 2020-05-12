import React from 'react'

const resumenOrder = (Items, symbol, total) => {
    return(
    <div className="col-lg-6 col-sm-12 col-xs-12">
        <div className="checkout-details">
            <div className="order-box">
                <div className="title-box">
                    <div>
                        Product <span> Total</span>
                    </div>
                </div>
                <ul className="qty">
                {Items.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.title} x {item.qty}{" "}
                                <span>
                                    {symbol} {item.publicPrice * item.qty}
                                </span>
                            </li>
                        );
                    })}
                </ul>
                <ul className="sub-total">
                    <li>
                        Subtotal{" "}
                        <span className="count">
                            {symbol}
                            {total}
                        </span>
                    </li>
                    <li>
                        Shipping{" "}
                        <div className="shipping">
                            <div className="shopping-option">
                                <input
                                    type="checkbox"
                                    name="free-shipping"
                                    id="free-shipping"
                                />
                                <label htmlFor="free-shipping">
                                    Free Shipping
                                  </label>
                            </div>
                            <div className="shopping-option">
                                <input
                                    type="checkbox"
                                    name="local-pickup"
                                    id="local-pickup"
                                />
                                <label htmlFor="local-pickup">
                                    Local Pickup
                                  </label>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul className="total">
                    <li>
                        Total{" "}
                        <span className="count">
                            {symbol}
                            {total}
                        </span>
                    </li>
                </ul>
            </div>

            <div className="payment-box">
                <div className="upper-box">
                    <div className="payment-options">
                        <ul>
                            <li>
                                <div className="radio-option stripe">
                                    <input
                                        type="radio"
                                        name="payment-group"
                                        id="payment-2"
                                        defaultChecked={true}
                                        onClick={() => this.checkhandle("mangopay")}
                                    />
                                    <label htmlFor="payment-2">Stripe</label>
                                </div>
                            </li>
                            <li>
                                <div className="radio-option paypal">
                                    <input
                                        type="radio"
                                        name="payment-group"
                                        id="payment-1"
                                        onClick={() => this.checkhandle("mangopay")}
                                    />
                                    <label htmlFor="payment-1">
                                        PayPal
                                      <span className="image">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/images/paypal.png`}
                                                alt=""
                                            />
                                        </span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {total !== 0 ? (
                    <div className="text-right">
                       
                            <button
                                type="button"
                                className="btn-solid btn"
                                onClick={() => this.PlaceOrder()}
                            >
                                Place Order
                            </button>
                     
                    </div>
                ) : (
                        ""
                    )}
            </div>
        </div>
    </div>
)}

export default resumenOrder;