export const getVisibleProducts = (data, { brand, color, value, sortBy }) => {
  console.log("we are here", data.products);

  return data.products;
};

export const productExist = (products, id) => {
  if (!isNaN(id)) {
    var productId = parseInt(id);
    if (products.find(x => x.id === productId)) {
      return products.find(x => x.id === productId);
    } else {
    }
  } else {
    return false;
  }
};


export const getCartTotal = cartItems => {
var total = 0;
for(var i=0; i<cartItems.legth; i++){
  total += parseInt(cartItems[i].qty)*parseInt((cartItems[i].price));
}
return total
}