import React from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { FormCustomCheckBox } from '../Form/FormCustomCheckBox'

interface ToDoProps {
  todoName: string
  status: boolean
  onPress?: () => void
}

export function ToDo({ status = false, todoName, onPress }: ToDoProps) {
  const { control } = useForm()

  const statusCompleted = status ? 'line-through' : 'none'

  return (
    <View className="w-ful">
      <View className="flex-row w-full">
        <FormCustomCheckBox
          control={control}
          isChecked={status}
          defaultValue={status}
          onPress={onPress}
          name="todo"
        />

        <Text
          className={`font-bold text-xl text-left pt-3 pb-3 ${statusCompleted}`}>
          {todoName}
        </Text>
      </View>
    </View>
  )
}
