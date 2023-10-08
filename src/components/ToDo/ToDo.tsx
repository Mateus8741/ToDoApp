import React from 'react'
import { Text, View } from 'react-native'

export function ToDo() {
  return (
    <View className="w-full">
      <Text className="font-bold text-2xl mb-4">USER ToDo List</Text>

      <View className="flex border-t-2 border-gray-200">
        <Text className="font-bold text-xl text-left pt-3 pb-3">ToDo 1</Text>
      </View>
    </View>
  )
}
