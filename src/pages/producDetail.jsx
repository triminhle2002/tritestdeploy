import React from "react";
import ProductDetail from "../components/ProductDetail/ProductDetailPage";

const productDetail = () => {
  document.title = "Chi tiết sản phẩm";
  return (
    <div>
      <ProductDetail />
    </div>
  );
};

export default productDetail;
