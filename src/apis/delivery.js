import axiosClient from "../config/axios.config";

const getListDeliveriesByUserApi = async () => {
  const res = await axiosClient.get(`/delivery/list-deliveries`);
  if (res) {
    return res;
  }
};

export { getListDeliveriesByUserApi };
