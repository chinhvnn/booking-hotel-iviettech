import axiosClient from "../utils/axiosClient";

export const getAllServiceAPI = async () => {
  const { data } = await axiosClient.get('services', {
    // params: {
    //   _sort: 'id',
    //   _order: 'desc'
    // }
  })
  return data
}

export const getServiceByIdAPI = async id => {
  const { data } = await axiosClient.get(`services/${id}`)
  return data
}

export const createNewServiceAPI = async (body) => {
  await axiosClient.post('services', {
    ...body
  })
}

export const deleteServiceByIdAPI = async id => {
  await axiosClient.delete(`services/${id}`)
}

export const updateServiceByIdAPI = async (id, body) => {
  await axiosClient.put(`services/${id}`, {
    ...body
  })
}