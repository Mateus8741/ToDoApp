import { ToDo } from '@components'
import React from 'react'
import { View } from 'react-native'

export function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white px-5">
      <ToDo />
    </View>
  )
}
