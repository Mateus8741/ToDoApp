import { api } from '@api'

import { AuthCredentials, SignUpData, User } from './authTypes'

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  const response = await api.post<AuthCredentials>('/login', {
    email,
    password,
  })
  return response.data
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('/user')
  return response.data
}

async function signUp(data: SignUpData) {
  await api.post<User>('/user', data)
}

export const authApi = {
  signIn,
  signOut,
  signUp,
}
