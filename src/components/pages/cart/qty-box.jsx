import React, { Component } from 'react'
export class QtyBox extends Component {
    render() {
        const { item, decrementClick, incrementClick} = this.props
        return (
            <div>
                <div className="input-group">
                    <span className="input-group-prepend">
                        <button type="button" className="btn quantity-left-minus" onClick={() => decrementClick(item)} data-type="minus" data-field="">
                            <i className="fa fa-angle-left"></i>
                        </button>
                    </span>
                    <input type="text" name="quantity" value={item.qty} readOnly={true} className="form-control input-number" />

                    <span className="input-group-prepend">
                        <button className="btn quantity-right-plus" onClick={() => incrementClick(item)} data-type="plus" disabled={(item.qty >= item.stock) ? true : false}>
                            <i className="fa fa-angle-right"></i>
                        </button>
                    </span>
                </div>
                
            </div>
        )
    }
}

export default QtyBox