import { api } from '@api'
import { QueryKeys } from '@infra'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void
  onError?: (message: string) => void
  errorMessage?: string
}

export interface UpdateToDo {
  todoID: number
  status: boolean
}

export function useToDoUpdate(options?: MutationOptions<UpdateToDo>) {
  const QueryClient = useQueryClient()

  const { mutate, isLoading, isError } = useMutation<
    UpdateToDo,
    unknown,
    { status: boolean; todoID: number }
  >({
    mutationFn: ({ status, todoID }) =>
      api.patch('/todo', {
        status,
        todoID,
      }),
    onSuccess: (data) => {
      QueryClient.invalidateQueries([QueryKeys.TodoList])

      if (options?.onSuccess) {
        options.onSuccess(data)
      }
    },

    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Erro ao atualizar todo')
      }
    },
  })

  async function updateToDo(status: boolean, todoID: number) {
    mutate({ status, todoID })
  }

  return {
    updateToDo,
    isLoading,
    isError,
  }
}
