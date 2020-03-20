import React, {Component} from 'react';
import Slider from 'react-slick';
import {connect} from "react-redux";


// import custom Components
import DetailPrice from "../common/DetailPrice";
import ProductTabs from "../common/ProductTabs";

import ImageZoom from '../common/ImageZoom'
import SmallImages from '../common/SmallImages'



class productPage extends Component {

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

    render(){
        const {item} = this.props
        var products = {
            fade: true
        };

        var productsnav = {
            slidesToShow: 3,
            slidesToScroll:1,
            swipeToSlide:true,
            draggable:true,
            focusOnSelect: true
        };
        

        return (
            <div>


                {/*Section Start*/}
                {(item)?
                <section >
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 product-thumbnail">
                                <Slider {...products} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="product-slick">
                                        {item.variants.map((vari, index) =>
                                            <div key={index}>
                                                <ImageZoom image={vari.images} className="img-fluid image_zoom_cls-0" />
                                            </div>
                                        )}
                                    </Slider>
                                    <SmallImages item={item} settings={productsnav} navOne={this.state.nav1} />
                                </div>
                                <DetailPrice symbol={'symbol'} item={item} navOne={'this.state.nav1'} addToCartClicked={'addToCart'} />
                            </div>
                        </div>
                    </div>
                </section> : ''}
                {/*Section End*/}

                <section className="tab-product m-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <ProductTabs/>
                            </div>
                        </div>
                    </div>
                </section>
                <div>RELATED PRODUCT</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let productId = ownProps.match.params.id;
    return {
        item: state.data.products.items.find(el => el.id == productId)
    }
}

export default connect(mapStateToProps) (productPage);