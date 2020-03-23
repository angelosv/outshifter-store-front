import React, { Component } from "react";
import { connect } from "react-redux";
import StackGrid, { transitions } from "react-stack-grid";
import { Link } from "react-router-dom";
import { getVisibleProducts } from "../../../services/index";
import ProductListItem from "../../product-list";

const { scaleDown } = transitions;

class Main extends Component {
  render() {
    var items = [
      {
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
      },
      {
        id: 2,
        name: "Wrap Dress",
        price: 330.0,
        salePrice: 165.0,
        discount: 50,
        pictures: [
          "/assets/images/fashion/product/15.jpg",
          "/assets/images/fashion/product/7.jpg",
          "/assets/images/fashion/product/9.jpg",
          "/assets/images/fashion/product/13.jpg"
        ],
        shortDetails:
          "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        stock: 6,
        new: true,
        sale: false,
        category: "women",
        colors: ["gray", "orange"],
        size: ["M", "L", "XL"],
        tags: ["caprese", "puma"],
        rating: 5,
        variants: [
          {
            color: "gray",
            images: "/assets/images/fashion/product/15.jpg"
          },
          {
            color: "orange",
            images: "/assets/images/fashion/product/7.jpg"
          }
        ]
      },
      {
        id: 3,
        name: "Danim Jeans",
        price: 500.0,
        salePrice: 250.0,
        discount: 50,
        pictures: [
          "/assets/images/fashion/product/32.jpg",
          "/assets/images/fashion/product/2.jpg",
          "/assets/images/fashion/product/25.jpg",
          "/assets/images/fashion/product/26.jpg"
        ],
        shortDetails:
          "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        stock: 12,
        new: false,
        sale: false,
        category: "women",
        colors: ["blue", "white", "yellow"],
        size: ["M", "L", "XL"],
        tags: ["puma"],
        rating: 4,
        variants: [
          {
            color: "blue",
            images: "/assets/images/fashion/product/32.jpg"
          },
          {
            color: "white",
            images: "/assets/images/fashion/product/2.jpg"
          },
          {
            color: "yellow",
            images: "/assets/images/fashion/product/25.jpg"
          }
        ]
      },
      {
        id: 4,
        name: "Waist Dress",
        price: 180.0,
        salePrice: 360.0,
        discount: 50,
        pictures: [
          "/assets/images/fashion/product/5.jpg",
          "/assets/images/fashion/product/12.jpg",
          "/assets/images/fashion/product/31.jpg",
          "/assets/images/fashion/product/18.jpg"
        ],
        shortDetails:
          "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        stock: 10,
        new: true,
        sale: true,
        category: "women",
        colors: ["pink", "gray", "green"],
        size: ["M", "L", "XL"],
        tags: ["lifestyle"],
        rating: 4,
        variants: [
          {
            color: "pink",
            images: "/assets/images/fashion/product/5.jpg"
          },
          {
            color: "gray",
            images: "/assets/images/fashion/product/12.jpg"
          },
          {
            color: "green",
            images: "/assets/images/fashion/product/31.jpg"
          }
        ]
      },
      {
        id: 5,
        name: "Trim Dress",
        price: 420.0,
        salePrice: 840.0,
        discount: 50,
        pictures: [
          "/assets/images/fashion/product/13.jpg",
          "/assets/images/fashion/product/10.jpg",
          "/assets/images/fashion/product/21.jpg",
          "/assets/images/fashion/product/15.jpg"
        ],
        shortDetails:
          "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        stock: 10,
        new: true,
        sale: false,
        category: "women",
        colors: ["pink", "yellow", "gray"],
        size: ["M", "L", "XL"],
        tags: ["caprese", "lifestyle"],
        rating: 5,
        variants: [
          {
            color: "pink",
            images: "/assets/images/fashion/product/13.jpg"
          },
          {
            color: "yellow",
            images: "/assets/images/fashion/product/10.jpg"
          },
          {
            color: "gray",
            images: "/assets/images/fashion/product/21.jpg"
          }
        ]
      },
      {
        id: 6,
        name: "Cut Dress",
        price: 290,
        salePrice: 580,
        discount: 50,
        pictures: [
          "/assets/images/fashion/product/30.jpg",
          "/assets/images/fashion/product/29.jpg",
          "/assets/images/fashion/product/28.jpg",
          "/assets/images/fashion/product/9.jpg"
        ],
        shortDetails:
          "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        stock: 10,
        new: false,
        sale: true,
        category: "women",
        colors: ["blue", "gray", "orange"],
        size: ["M", "L", "XL"],
        tags: ["caprese"],
        rating: 5,
        variants: [
          {
            color: "blue",
            images: "/assets/images/fashion/product/30.jpg"
          },
          {
            color: "gray",
            images: "/assets/images/fashion/product/24.jpg"
          },
          {
            color: "orange",
            images: "/assets/images/fashion/product/9.jpg"
          }
        ]
      },
      {
        id: 7,
        name: "Sleeveless dress",
        price: 950.0,
        salePrice: 425.0,
        discount: 50,
        pictures: [
          "/assets/images/fashion/product/20.jpg",
          "/assets/images/fashion/product/4.jpg",
          "/assets/images/fashion/product/35.jpg",
          "/assets/images/fashion/product/32.jpg"
        ],
        shortDetails:
          "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        stock: 10,
        new: true,
        sale: true,
        category: "women",
        colors: ["red", "white", "blue"],
        size: ["M", "L", "XL"],
        tags: ["nike", "lifestyle"],
        rating: 4,
        variants: [
          {
            color: "red",
            images: "/assets/images/fashion/product/20.jpg"
          },
          {
            color: "white",
            images: "/assets/images/fashion/product/4.jpg"
          },
          {
            color: "blue",
            images: "/assets/images/fashion/product/35.jpg"
          }
        ]
      },
      {
        id: 8,
        name: "Maxi Dress",
        price: 140.0,
        salePrice: 280.0,
        discount: 50,
        pictures: [
          "/assets/images/fashion/product/11.jpg",
          "/assets/images/fashion/product/6.jpg",
          "/assets/images/fashion/product/22.jpg",
          "/assets/images/fashion/product/1.jpg"
        ],
        shortDetails:
          "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        stock: 10,
        new: true,
        sale: false,
        category: "women",
        colors: ["black", "yellow"],
        size: ["M", "L", "XL"],
        tags: ["nike", "lifestyle"],
        rating: 3,
        variants: [
          {
            color: "black",
            images: "/assets/images/fashion/product/11.jpg"
          },
          {
            color: "yellow",
            images: "/assets/images/fashion/product/1.jpg"
          }
        ]
      },
      {
        id: 9,
        name: "Knit Dress",
        price: 370.0,
        salePrice: 720.0,
        discount: 50,
        pictures: [
          "/assets/images/fashion/product/14.jpg",
          "/assets/images/fashion/product/15.jpg",
          "/assets/images/fashion/product/4.jpg",
          "/assets/images/fashion/product/19.jpg"
        ],
        shortDetails:
          "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        stock: 10,
        new: true,
        sale: false,
        category: "women",
        colors: ["pink", "gray"],
        size: ["M", "L", "XL"],
        tags: ["nike", "lifestyle"],
        rating: 4,
        variants: [
          {
            color: "pink",
            images: "/assets/images/fashion/product/14.jpg"
          },
          {
            color: "gray",
            images: "/assets/images/fashion/product/4.jpg"
          }
        ]
      },
      {
        id: 10,
        name: "Cut Top Dress",
        price: 110.0,
        salePrice: 220.0,
        discount: 50,
        pictures: [
          "/assets/images/fashion/product/23.jpg",
          "/assets/images/fashion/product/22.jpg",
          "/assets/images/fashion/product/11.jpg",
          "/assets/images/fashion/product/2.jpg"
        ],
        shortDetails:
          "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        stock: 10,
        new: false,
        sale: false,
        category: "women",
        colors: ["red", "black", "white"],
        size: ["M", "L", "XL"],
        tags: ["nike", "lifestyle"],
        rating: 3,
        variants: [
          {
            color: "red",
            images: "/assets/images/fashion/product/23.jpg"
          },
          {
            color: "black",
            images: "/assets/images/fashion/product/22.jpg"
          },
          {
            color: "white",
            images: "/assets/images/fashion/product/2.jpg"
          }
        ]
      },
      {
        id: 11,
        name: "Sleeveless dress",
        price: 330.0,
        salePrice: 660.0,
        discount: 50,
        pictures: [
          "/assets/images/fashion/product/9.jpg",
          "/assets/images/fashion/product/12.jpg",
          "/assets/images/fashion/product/14.jpg",
          "/assets/images/fashion/product/19.jpg"
        ],
        shortDetails:
          "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        stock: 10,
        new: true,
        sale: true,
        category: "women",
        colors: ["orange", "gray", "pink"],
        size: ["M", "L", "XL"],
        tags: ["nike", "lifestyle"],
        rating: 5,
        variants: [
          {
            color: "orange",
            images: "/assets/images/fashion/product/9.jpg"
          },
          {
            color: "gray",
            images: "/assets/images/fashion/product/12.jpg"
          },
          {
            color: "pink",
            images: "/assets/images/fashion/product/14.jpg"
          }
        ]
      },
      {
        id: 12,
        name: "Overlap Dresss",
        price: 250.0,
        salePrice: 500.0,
        discount: 50,
        pictures: [
          "/assets/images/fashion/product/2.jpg",
          "/assets/images/fashion/product/22.jpg",
          "/assets/images/fashion/product/24.jpg",
          "/assets/images/fashion/product/11.jpg"
        ],
        shortDetails:
          "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        stock: 10,
        new: true,
        sale: false,
        category: "women",
        colors: ["white", "black"],
        size: ["M", "L", "XL"],
        tags: ["nike", "lifestyle"],
        rating: 3,
        variants: [
          {
            color: "white",
            images: "/assets/images/fashion/product/2.jpg"
          },
          {
            color: "black",
            images: "/assets/images/fashion/product/22.jpg"
          }
        ]
      }
    ];
    const { isLoading, dafaultvalues } = this.props;
    const { productImage } = dafaultvalues;
    if (isLoading === true) {
      return <p>Loading</p>;
    } else {
    }

    return (
      <div>
        <section className="section-b-space">
          <div className="collection-wrapper">
            <div className="container">
              <div className="row">
                <div className="collection-content col">
                  <div className="page-main-content">
                    <div className="top-banner-wrapper">
                      <a href="#">
                        <img
                          src="/assets/images/mega-menu/2.jpg"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="top-banner-content small-section pb-0">
                        <h4>fashion</h4>
                        <h5>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                    <div className="collection-product-wrapper">
                                            <div className="section-t-space portfolio-section portfolio-padding metro-section port-col">
                                            <StackGrid
                  appear={scaleDown.appear}
                  appeared={scaleDown.appeared}
                  enter={scaleDown.enter}
                  entered={scaleDown.entered}
                  leaved={scaleDown.leaved}
                  columnWidth={"16.66%"}
                  gutterWidth={20}
                  gutterHeight={20}
                >
                  {this.props.products.map((product, index) => (
                    <div className="isotopeSelector">
                      <ProductListItem
                        product={product}
                        dafaultvalues={productImage}
                      ></ProductListItem>
                    </div>
                  ))}
                </StackGrid>
                                              </div>
                                              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.data, state.data),
  isLoading: state.data.isLoading,
  dafaultvalues: state.defaultvalues
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
