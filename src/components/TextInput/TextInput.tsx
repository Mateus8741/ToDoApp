import React, { ReactElement, useRef } from 'react'
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  View,
} from 'react-native'

export interface TextInputProps extends RNTextInputProps {
  label?: string
  rightComponent?: ReactElement
  errorMessage?: string
}

export function TextInput({
  label,
  rightComponent,
  errorMessage,
  ...rnTextInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null)

  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <View className="mb-3">
      <Pressable onPress={focusInput}>
        {label && <Text className="text-text-700 mb-2">{label}</Text>}
        <View
          className={`flex-row bg-text-100 border-[1px] rounded-md items-center ${
            errorMessage ? 'border-red-500' : 'border-[#d2d2d2bd]'
          }`}>
          <RNTextInput
            className="w-full py-2 px-3 text-text-500 placeholder-text-400"
            autoCapitalize="none"
            ref={inputRef}
            style={$TextInputStyle}
            {...rnTextInputProps}
          />
          {rightComponent && (
            <View className="mx-4 justify-center">{rightComponent}</View>
          )}
        </View>
        {errorMessage && (
          <Text className="text-red-500 text-xs font-semiBold mt-1">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </View>
  )
}

const $TextInputStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
}
