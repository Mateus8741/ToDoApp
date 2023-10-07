import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '@screens'

export type AppStackParamList = {
  HomeScreen: undefined
}

export function AppStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>()

  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  )
}
