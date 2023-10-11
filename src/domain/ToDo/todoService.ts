import { getApi } from './todoApi'
import { ToDoDTO } from './todoTypes'

async function getList(): Promise<ToDoDTO> {
  const geTodoListAPI = await getApi.getList()

  return {
    ...geTodoListAPI,
  }
}

export const todoService = {
  getList,
}
