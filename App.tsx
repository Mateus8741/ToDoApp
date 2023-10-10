import { Routes } from '@routes'
import {
  AuthCredentialsProvider,
  MMKVStorage,
  initializeStorage,
} from '@services'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import { LogBox } from 'react-native'
LogBox.ignoreLogs(['Require cycle:'])

export default function App() {
  initializeStorage(MMKVStorage)

  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <Routes />
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  )
}
