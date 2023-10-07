import { Routes } from '@routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Routes />
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
