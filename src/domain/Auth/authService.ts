import { api } from '@api'

import { authApi } from './authApi'
import { AuthCredentials, SignUpData } from './authTypes'

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentials = await authApi.signIn(email, password)
    api.defaults.headers.common.Authorization = `Bearer ${authCredentials.access_token}`
    return authCredentials
  } catch (error) {
    throw new Error('email ou senha inválido')
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut()
  return message
}

async function signUp(signUpData: SignUpData): Promise<void> {
  await authApi.signUp(signUpData)
}

function removeToken() {
  api.defaults.headers.common.Authorization = null
}

export const authService = {
  signIn,
  signOut,
  signUp,
  removeToken,
}
