import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ProductListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;

        return(
            <div className="product-box">
                <div className="img-Wrapper">
                <div className="front">
                                <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`} ><img
                                    src={product.variants?
                                        this.state.image?this.state.image:product.images[0].url
                                        :product.pictures[0]}
                                    className="img-fluid"
                                    alt="" /></Link>
                            </div>
                </div>
                <div className="cart-info cart-wrap">
                                <button title="Add to cart" >
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </button>
                                <a href="javascript:void(0)" title="Add to Wishlist"  >
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                </a>
                                <a href="javascript:void(0)" data-toggle="modal"
                                   data-target="#quick-view"
                                   title="Quick View"
                                   ><i className="fa fa-search" aria-hidden="true"></i></a>
                                <Link to={`${process.env.PUBLIC_URL}/compare`} title="Compare" >
                                    <i className="fa fa-refresh" aria-hidden="true"></i></Link>
                            </div>
                            <div className="product-detail">
                            <div>
                                <div className="rating">
                                   
                                </div>
                                <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}>
                                    <h6>{product.title}</h6>
                                </Link>
                                <h4>{symbol}{product.publicPrice}
                                    <del><span className="money">{symbol}{product.publicPrice}</span></del></h4>

                            </div>
                        </div>
            </div>
            
        )
    }
}

export default ProductListItem