import axiosClient from "../utils/axiosClient";

export const getAllOverviewAPI = async () => {
  const { data } = await axiosClient.get('overviews', {
    // params: {
    //   _sort: 'id',
    //   _order: 'desc'
    // }
  })
  return data
}

export const getOverviewByIdAPI = async id => {
  const { data } = await axiosClient.get(`overviews/${id}`)
  return data
}

export const createNewOverviewAPI = async (body) => {
  await axiosClient.post('overviews', {
    ...body
  })
}

export const deleteOverviewByIdAPI = async id => {
  await axiosClient.delete(`overviews/${id}`)
}

export const updateOverviewByIdAPI = async (id, body) => {
  await axiosClient.put(`overviews/${id}`, {
    ...body
  })
}