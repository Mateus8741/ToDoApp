import { api } from '@api'

import { authApi } from './authApi'
import { AuthCredentials, SignUpData } from './authTypes'

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const ac = await authApi.signIn(email, password)

    return ac
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

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`
}

function removeToken() {
  api.defaults.headers.common.Authorization = null
}

async function authenticateByRefreshToken(
  refreshToken: string,
): Promise<AuthCredentials> {
  const authCredentialsAPI = await authApi.refreshToken(refreshToken)
  return authCredentialsAPI
}

export const authService = {
  signIn,
  signOut,
  signUp,
  updateToken,
  removeToken,
  authenticateByRefreshToken,
}
