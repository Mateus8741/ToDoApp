import { useEffect, useState } from 'react'

import { ToDoDTO, getApi } from '@domain'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '../infraTypes'

export interface UseTodoListResult {
  list: ToDoDTO[]
  isError: boolean | null
  isLoading: boolean
  refresh: () => void
}

export function useTodoList(): UseTodoListResult {
  const [list, setList] = useState<ToDoDTO[]>([])
  const query = useQuery({
    queryKey: [QueryKeys.TodoList],
    queryFn: getApi.getList,
  })

  useEffect(() => {
    if (query.data) {
      setList(query.data as any)
    }
  }, [query.data])

  return {
    list,
    isLoading: query.isLoading,
    isError: query.isError,
    refresh: query.refetch,
  }
}
