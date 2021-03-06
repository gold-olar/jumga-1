import React, { useContext, useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PageLoader from "../../components/PageLoader";
import SingleProductComp from "../../components/SingleProductcard";
import { Context as ProductsContext } from "./../../contexts/productContext";

const SingleProduct = (props) => {
  const history = useHistory();
  const [product, setProduct] = useState();
  const {
    mediaQuery,
    setShowModal,
    match: {
      params: { productId },
    },
  } = props;

  const {
    state: { products, loading },
    fetchAllProducts,
    removeProduct,
  } = useContext(ProductsContext);

  useEffect(() => {
    fetchAllProducts(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    products &&
      setProduct(
        products.find((product) => parseInt(product.id) === parseInt(productId))
      );
  }, [products, productId]);

  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5
              className={`${
                mediaQuery === "isMobile" && "ml-4"
              } dashboard-header mb-5`}
            >
              {" "}
              {product?.name}{" "}
            </h5>
          </Col>
        </Row>
        <span onClick={() => history.goBack()} className="go-back-icon">
          <i className="fa fa-arrow-left"></i> Back
        </span>{" "}
        {product && (
          <SingleProductComp
            setShowModal={setShowModal}
            product={product}
            removeProduct={removeProduct}
          />
        )}
        {products && products.length > 0 && !product && (
          <>This Product cannot be found, or does not exist</>
        )}
        {loading && <PageLoader />}
      </Container>
    </>
  );
};

export default SingleProduct;
