import { useContext } from 'react'

import { AuthCredentialsContext } from './Providers/AuthCredentialsProvider'
import { AuthCredentialsService } from './authCredentialsTypes'

export function useAuthCredentials(): AuthCredentialsService {
  const context = useContext(AuthCredentialsContext)
  if (!context) {
    throw new Error(
      'useAuthCredentials must be used within a AuthCredentialsProvider',
    )
  }

  return context
}

// const useAuthCredentialsZustand = create<AuthCredentialsService>()(
//   persist(
//     set => ({
//       authCredentials: null,
//       saveCredentials: async ac => set({ authCredentials: ac }),
//       removeCredentials: async () => set({ authCredentials: null }),
//       isLoading: false,
//     }),
//     {
//       name: '@Auth',
//       storage: storage,
//     },
//   ),
// );
