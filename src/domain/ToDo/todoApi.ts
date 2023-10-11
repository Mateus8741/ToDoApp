import { api } from '@api'
import { ToDoDTO } from './todoTypes'

async function getList(): Promise<ToDoDTO> {
  const response = await api.get<ToDoDTO>('/todo')
  return response.data
}

export const getApi = {
  getList,
}
