import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { AuthStack } from './AuthStack'

export function Routes() {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <AppStack /> */}
    </NavigationContainer>
  )
}
