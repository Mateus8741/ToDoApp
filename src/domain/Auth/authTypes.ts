export interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

export interface AuthCredentials {
  access_token: string
  user: User
}

export interface SignUpData {
  name: string
  email: string
  password: string
}

export interface LoginData {
  username: string
  email: string
  password: string
}
