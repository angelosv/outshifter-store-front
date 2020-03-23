import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';


class DetailProduct extends Component {

    constructor (props) {
        super (props)
        this.state = {
            open:false,
            quantity:1,
            stock: 'InStock',
            nav3: null
        }
    console.log('this', this.props.item.quantity)
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
        if(this.state.quantity > 1) {
            this.setState({stock: 'InStock'})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    plusQty = () => {
        if(this.props.item.stock >= this.state.quantity) {
            this.setState({quantity: this.state.quantity+1})
            console.log(this.props.item.stock,'STOCCK?')
        }else{
            this.setState({stock: 'Out of Stock !'})
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render (){
        const {symbol, item, addToCart, BuynowClicked, addToWishlistClicked} = this.props
        var colorsnav = {
            slidesToShow: 6,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };


        console.log('sss', this.props)
        return (
            <div className="col-lg-6 rtl-text">
                <div className="product-right">
                <h2> {item.title} </h2>
<h4>
{item.publicPrice}

</h4>
<h3>{symbol}{item.price-(item.price*item.discount/100)} </h3>
{
    !item.variants?
    <ul>
        <li>Existen variantes</li>
    </ul>
    : ''}                        <span className="instock-cls">{this.state.stock}</span>
    <h6 className="product-title">quantity</h6>
                </div>
                <div className="product-buttons" >
                        <a className="btn btn-solid" onClick={() => addToCart(item, this.state.quantity)}>add to cart</a>
                        <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid" onClick={() => addToCart(item, this.state.quantity)} >buy now</Link>
                    </div>
            </div>
            
        )
    }
}


export default DetailProduct;