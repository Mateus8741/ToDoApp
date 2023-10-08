import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen, SignUpScreen, SuccessScreen } from '@screens'

export type AuthStackParamList = {
  LoginScreen: undefined
  SignUpScreen: undefined
  SuccessScreen: { user: string }
}

export function AuthStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>()

  return (
    <Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
      <Screen name="SuccessScreen" component={SuccessScreen} />
    </Navigator>
  )
}
