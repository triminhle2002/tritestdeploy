import axiosClient from "../config/axios.config";

const addAProduct = async (
  accessToken,
  name,
  description,
  category,
  price,
  discounted_price
) => {
  try {
    const response = await axiosClient.post(
      "/createProduct",
      {
        name: name,
        description: description,
        category: category,
        price: price,
        discounted_price: discounted_price,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return {
      id: response.data.id,
      response: response.data,
      statusCode: response.status,
    };
  } catch (e) {
    return {
      error: e.response.data,
      status: e.response.status,
    };
  }
};

const createProductApi = async ({ storeId, formData }) => {
  const res = await axiosClient.post(
    `/product/create-product/${storeId}`,
    formData
  );
  if (res) {
    return res;
  }
};

const getListProductsByStoreApi = async ({
  orderBy,
  sortBy,
  q,
  limit,
  page,
  categoryId,
  rating,
  minPrice,
  maxPrice,
  storeId,
}) => {
  const res = await axiosClient.get(
    `/product/list-products/by-store/${storeId}?q=${q}&sortBy=${sortBy}&orderBy=${orderBy}&page=${page}&limit=${limit}&categoryId=${categoryId}&rating=${rating}&minPrice=${minPrice}&maxPrice=${maxPrice}`
  );
  if (res) {
    return res;
  }
};

const getListProductsByUserApi = async ({
  orderBy,
  sortBy,
  q = "",
  limit,
  page,
  categories = [],
  rating,
  minPrice,
  maxPrice,
  storeId,
}) => {
  const res = await axiosClient.get(
    `/product/list-products/by-user?q=${q}&sortBy=${sortBy}&orderBy=${orderBy}&page=${page}&limit=${limit}&categories=${categories}&rating=${rating}&minPrice=${minPrice}&maxPrice=${maxPrice}`
  );
  if (res) {
    return res;
  }
};

const getSearchProductApi = async ({ q = "", limit = 6 }) => {
  const res = await axiosClient.get(
    `/product/search/list-products/by-user?q=${q}&limit=${limit}`
  );
  if (res) {
    return res;
  }
};

const getgetOtherProductOfStoreApi = async ({ storeId, limit = 6 }) => {
  const res = await axiosClient.get(
    `/product/list-other-products/by-user/${storeId}?limit=${limit}`
  );
  if (res) {
    return res;
  }
};

const getProductDetailApi = async (productId) => {
  const res = await axiosClient.get(`/product/detail-product/${productId}`);
  if (res) {
    return res;
  }
};

const getListHotSellingProductsApi = async () => {
  const res = await axiosClient.get("/product/list-hot-products");
  if (res) {
    return res;
  }
};

const getListProductsByCategoryApi = async ({ categoryId, limit }) => {
  const res = await axiosClient.get(
    `/product/list-products/by-category?categoryId=${categoryId}&&limit=${limit}`
  );
  if (res) {
    return res;
  }
};

const getListHotSellingProductsByStoreApi = async ({ storeId, userId }) => {
  const res = await axiosClient.get(
    `/product/list-hot-products/by-store/${storeId}/${userId}`
  );
  if (res) {
    return res;
  }
};

const getListProductsFromStoreByUserApi = async ({ storeId, limit }) => {
  const res = await axiosClient.get(
    `/product/list-products/from-store/by-user/${storeId}?limit=${limit}`
  );
  if (res) {
    return res;
  }
};

export {
  addAProduct,
  createProductApi,
  getListProductsByStoreApi,
  getListProductsByUserApi,
  getSearchProductApi,
  getgetOtherProductOfStoreApi,
  getProductDetailApi,
  getListHotSellingProductsApi,
  getListProductsByCategoryApi,
  getListHotSellingProductsByStoreApi,
  getListProductsFromStoreByUserApi,
};
