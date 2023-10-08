import React from 'react'
import { Text, View } from 'react-native'

export function OrSeparator() {
  return (
    <View className="flex-row items-center mt-7">
      <View className="flex-1 h-px bg-green-400" />
      <Text className="mx-2 text-gray-500 text-sm font-semibold italic">
        OR
      </Text>
      <View className="flex-1 h-px bg-green-400" />
    </View>
  )
}
