import axiosClient from "../utils/axiosClient";

export const getAllRoomAPI = async () => {
  const { data } = await axiosClient.get('room', {
    // params: {
    //   _sort: 'id',
    //   _order: 'desc'
    // }
  })
  return data
}

export const getRoomByIdAPI = async id => {
  const { data } = await axiosClient.get(`room/${id}`)
  return data
}

export const createNewRoomAPI = async (body) => {
  await axiosClient.post('room', {
    ...body
  })
}

export const deleteRoomByIdAPI = async id => {
  await axiosClient.delete(`room/${id}`)
}

export const updateRoomByIdAPI = async (id, body) => {
  await axiosClient.put(`room/${id}`, {
    ...body
  })
}