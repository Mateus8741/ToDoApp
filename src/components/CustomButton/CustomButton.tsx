import React from 'react'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'

export interface ButtonProps extends TouchableOpacityProps {
  title: string
  isLoading?: boolean
}

export function CustomButton({ title, isLoading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="w-full h-[44px] bg-green-500 rounded-lg items-center justify-center"
      style={$shadowProps}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text className="text-center font-medium text-base text-white">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}

const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.3,
  shadowRadius: 12,
  shadowOffset: {
    width: 0,
    height: 8,
  },
}
