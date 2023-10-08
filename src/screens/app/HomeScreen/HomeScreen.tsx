import { CustomButton, FormTextInput, ToDo } from '@components'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppSafeArea } from '@hooks'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FlatList, Text, View } from 'react-native'
import { HomeSchema, homeSchema } from './homeScheema'

const todoList = [
  {
    id: 1,
    todoName: 'Learn React Native',
    status: true,
  },
  {
    id: 2,
    todoName: 'Learn React Hook Form',
    status: false,
  },
  {
    id: 3,
    todoName: 'Learn Tailwind CSS',
    status: true,
  },
  {
    id: 4,
    todoName: 'Learn React Query',
    status: false,
  },
  {
    id: 5,
    todoName: 'Learn React Navigation',
    status: true,
  },
]

export function HomeScreen() {
  const { top, bottom } = useAppSafeArea()

  const { control, handleSubmit } = useForm<HomeSchema>({
    resolver: zodResolver(homeSchema),

    defaultValues: {
      todo: '',
    },
  })

  function addToDo(data: HomeSchema) {
    console.log(data)
  }

  return (
    <View
      className="flex-1 justify-center bg-white px-5"
      style={{
        paddingTop: top,
      }}>
      <Text className="font-bold text-2xl mb-4">USER ToDo List</Text>

      <View className="pb-5">
        <FormTextInput
          control={control}
          name="todo"
          placeholder="Adicione seu todo"
        />

        <CustomButton title="Add Todo" onPress={handleSubmit(addToDo)} />
      </View>

      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <ToDo todoName={item.todoName} status={item.status} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingBottom: bottom,
        }}
        ItemSeparatorComponent={() => <View className="h-[2px] bg-gray-200" />}
      />
    </View>
  )
}
