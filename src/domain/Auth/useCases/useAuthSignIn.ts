import { useMutation } from '@tanstack/react-query'

import { authService } from '../authService'
import { AuthCredentials } from '../authTypes'
import { MutationOptions } from './useAuthSignUp'

interface Variables {
  name: string
  email: string
  password: string
}

export function useAuthSignIn(options?: MutationOptions<AuthCredentials>) {
  // const { saveCredentials } = useAuthCredentials()

  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({ name, email, password }) =>
      authService.signIn(name, email, password),
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
