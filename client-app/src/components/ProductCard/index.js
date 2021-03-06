import React, { useState } from "react";
import "./styles.scss";
import { Link, useRouter } from "../../util/router";
import { getCurrency, formatMoney } from "../../util/helper-functions";
import { handleDeleteProduct } from "./helper";
import { ADD_PRODUCT, CLOUDINARY_IMAGE_PREPEND } from "../../util/constants";

const ProductCard = ({ product, removeproduct, setShowModal }) => {
  const { name, price, country, rating, id, images } = product;
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="col-md-4 col-sm-6">
        <div className=" shadow product-grid">
          <div className="product-image">
            <Link to={`/dashboard/products/${id}`}>
              <img
                className="pic-1"
                alt={name}
                src={`${CLOUDINARY_IMAGE_PREPEND}${images[0].image}`}
              />
              <img
                className="pic-2"
                alt={name}
                src={`${CLOUDINARY_IMAGE_PREPEND}${images[1]?.image}`}
              />
            </Link>
            <ul className="social">
              <li onClick={() => router.push(`/dashboard/products/${id}`)}>
                <span data-tip="View Product">
                  <i className="fa fa-eye"></i>
                </span>
              </li>

              <li
                onClick={() => {
                  setShowModal({
                    show: true,
                    modalId: ADD_PRODUCT,
                    data: {
                      productData: product,
                      editProduct: true,
                    },
                  });
                }}
              >
                <span data-tip="Edit Product">
                  <i className="fa fa-edit"></i>
                </span>
              </li>

              <li
                onClick={() => {
                  handleDeleteProduct(product, setLoading, removeproduct);
                }}
              >
                <span data-tip="Delete Product">
                  <i className="fa fa-trash"></i>
                </span>
              </li>
            </ul>
            <span className="product-new-label">
              {" "}
              {rating ? rating : 0} <li className="fa fa-star"></li>{" "}
            </span>
            {/* <span className="product-discount-label">20%</span> */}
          </div>

          <div className="product-content">
            {loading ? (
              <div className="text-center p-5"> Please Wait</div>
            ) : (
              <>
                <h3 className="title">
                  <Link to={`/product/${id}`}>{name}</Link>
                </h3>
                <div className="price mb-3">
                  {getCurrency(country)} {formatMoney(price)}
                  {/* <span>$20.00</span> */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
