import { useMutation } from '@tanstack/react-query'

import { authService } from '../authService'
import { AuthCredentials } from '../authTypes'
import { MutationOptions } from './useAuthSignUp'

interface Variables {
  email: string
  password: string
}

export function useAuthSignIn(options?: MutationOptions<AuthCredentials>) {
  // const { saveCredentials } = useAuthCredentials()

  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({ email, password }) => authService.signIn(email, password),
    retry: false,
    onError: (error) => {
      if (options?.onError) {
        options.onError(error.message)
      }
    },
    onSuccess: (authCredentials) => {
      // authService.updateToken(authCredentials.token);
      // saveCredentials(authCredentials)
    },
  })

  return {
    isLoading: mutation.isLoading,
    signIn: (variables: Variables) => mutation.mutate(variables),
  }
}
