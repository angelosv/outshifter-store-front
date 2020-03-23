
export function handleClick(name, rate) {
    console.log('click');
    var symbol = ''
    if (name === 'USD') {
        symbol = '$'
    } else if (name === 'NOK') {
        symbol = 'Kr'
    } else if (name === 'EUR') {
        symbol = 'Kr'
    } else {
        symbol = name
    }
    const valuta = [{ "name": name, "symbol": symbol, "rate": rate }]
    this.props.changeCurrencyfor(valuta)
}

export const getCartTotal = cartItems => {
    
    var total = 0;
    for (var i=0; i<cartItems.length; i++){
        total += parseInt(cartItems[i].qty) * parseInt(cartItems[i].publicPrice)

    }
    return total;

}