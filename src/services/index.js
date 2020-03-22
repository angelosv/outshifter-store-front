export const getVisibleProducts = (data, { brand, color, value, sortBy }) => {
  console.log("we are here", data.products);

  var items = {
    id: 1,
    name: "Flare Dress",
    price: 120,
    salePrice: 200,
    discount: 50,
    pictures: [
      "/assets/images/fashion/product/1.jpg",
      "/assets/images/fashion/product/21.jpg",
      "/assets/images/fashion/product/36.jpg",
      "/assets/images/fashion/product/12.jpg"
    ],
    shortDetails:
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    stock: 16,
    new: true,
    sale: true,
    category: "women",
    colors: ["yellow", "gray", "green"],
    size: ["M", "L", "XL"],
    tags: ["nike", "caprese"],
    rating: 4,
    variants: [
      {
        color: "yellow",
        images: "/assets/images/fashion/product/1.jpg"
      },
      {
        color: "gray",
        images: "/assets/images/fashion/product/21.jpg"
      },
      {
        color: "green",
        images: "/assets/images/fashion/product/36.jpg"
      }
    ]
  };

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
