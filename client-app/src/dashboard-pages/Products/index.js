import React, { useEffect, useContext } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import SearchProducts from "../../components/SearchProducts";
import { ADD_PRODUCT } from "../../util/constants";
import "./styles.scss";
import ProductList from "../../components/ProductList";
import { Context as ProductsContext } from "./../../contexts/productContext";

const Products = ({ setShowModal }) => {
  const {
    state: { products },
    fetchAllProducts,
    removeProduct,
  } = useContext(ProductsContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5 className="dashboard-header mb-5"> Products</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="products-top-section">
              <SearchProducts />
              <div>
                <Button
                  onClick={() => {
                    setShowModal({
                      show: true,
                      modalId: ADD_PRODUCT,
                      data: {},
                    });
                  }}
                  className="btn-info btn-sm d-block"
                >
                  + Add Product
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <ProductList products={products} removeproduct={removeProduct} />
      </Container>
    </>
  );
};

export default Products;
