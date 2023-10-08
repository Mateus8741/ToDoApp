import React from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { FormCustomCheckBox } from '../Form/FormCustomCheckBox'

export function ToDo() {
  const { control } = useForm()
  return (
    <View className="w-full">
      <Text className="font-bold text-2xl mb-4">USER ToDo List</Text>

      <View className="flex-row border-t-2 border-gray-200">
        <FormCustomCheckBox
          control={control}
          name="todo"
          defaultValue={false}
        />

        <Text className="font-bold text-xl text-left pt-3 pb-3">ToDo 1</Text>
      </View>
    </View>
  )
}
