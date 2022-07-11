import axiosClient from "../utils/axiosClient";

export const getAllOrderAPI = async () => {
  const { data } = await axiosClient.get('orders', {
    // params: {
    //   _sort: 'id',
    //   _order: 'desc'
    // }
  })
  return data
}

export const getOrderByIdAPI = async id => {
  const { data } = await axiosClient.get(`orders/${id}`)
  return data
}

export const createNewOrderAPI = async (body) => {
  await axiosClient.post('orders', {
    ...body
  })
}

export const deleteOrderByIdAPI = async id => {
  await axiosClient.delete(`orders/${id}`)
}

export const updateOrderByIdAPI = async (id, body) => {
  await axiosClient.put(`orders/${id}`, {
    ...body
  })
}