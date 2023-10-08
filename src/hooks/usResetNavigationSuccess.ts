import { useNavigation } from '@react-navigation/native'

import { AuthStackParamList } from '@routes'

export function useResetNavigationSuccess() {
  const { reset } = useNavigation()

  function resetNavigation(params: AuthStackParamList['SuccessScreen']) {
    reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    })
  }

  return { reset: resetNavigation }
}
