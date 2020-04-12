import React, { Component } from "react";
import { connect } from "react-redux";
import StackGrid, { transitions } from "react-stack-grid";
import { Link } from "react-router-dom";
import { getVisibleProducts } from "../../../services/index";
import ProductListItem from "../../product-list";

const { scaleDown } = transitions;

class Main extends Component {
  render() {
    const { isLoading, dafaultvalues, products } = this.props;
    const { productImage } = dafaultvalues;
    if (isLoading) {
      return <p>Loading</p>;
    } else {
    

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
                        {products.length > 0 ? (
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
                            {products.map((product, index) => (
                              <div className="isotopeContainer row">
                                                                                                <div className="isotopeSelector" key={index}>

                                <ProductListItem
                                  product={product}
                                  dafaultvalues={productImage}
                                ></ProductListItem>
                                </div>
                              </div>
                            ))}
                          </StackGrid>
                        ) : (
                          <div className="col-sm-12 text-center section-b-space mt-5 no-found">
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`}
                              class="img-fluid mb-4"
                            />
                            <h3>
                              Sorry! Couldn't find the product you were looking
                              For!!!{" "}
                            </h3>
                            <p>
                              Please check if you have misspelt something or try
                              searching with other words.
                            </p>
                            <Link
                              to={`${process.env.PUBLIC_URL}/`}
                              class="btn btn-solid"
                            >
                              continue shopping
                            </Link>
                          </div>
                        )}
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
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.data, state.data),
  isLoading: state.data.isLoading,
  dafaultvalues: state.defaultvalues
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
