import { api } from '@api'

import { authApi } from './authApi'
import { AuthCredentials, SignUpData } from './authTypes'

async function signIn(
  name: string,
  email: string,
  password: string,
): Promise<AuthCredentials> {
  const authCredentials = await authApi.signIn(name, email, password)
  api.defaults.headers.common.Authorization = `Bearer ${authCredentials.token}`
  return authCredentials
  // try {
  // } catch (error) {
  //   throw new Error('email ou senha inválido')
  // }
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
