import { api } from '@api'
import { ToDoDTO } from '@domain'
import { QueryKeys } from '@infra'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void
  onError?: (message: string) => void
  errorMessage?: string
}

export function useToDoCreate(options?: MutationOptions<ToDoDTO>) {
  const QueryClient = useQueryClient()

  const { mutate, isLoading, isError } = useMutation<
    ToDoDTO,
    unknown,
    { title: string }
  >({
    mutationFn: (title) => api.post('/todo', title),
    onSuccess: (data) => {
      QueryClient.invalidateQueries([QueryKeys.TodoList])

      if (options?.onSuccess) {
        options.onSuccess(data)
      }
    },

    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'Erro ao criar todo')
      }
    },
  })

  async function createToDo(title: string) {
    mutate({ title })
  }

  return {
    createToDo,
    isLoading,
    isError,
  }
}
