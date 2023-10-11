import { CustomButton, FormTextInput, ToDo } from '@components'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppSafeArea } from '@hooks'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, FlatList, ListRenderItemInfo, Text, View } from 'react-native'

import { ToDoDTO } from '@domain'

import {
  UpdateToDo,
  useGetTodoList,
  useToDoCreate,
  useToDoUpdate,
} from '@infra'
import { useAuthCredentials } from '@services'
import { HomeSchema, homeSchema } from './homeScheema'

export function HomeScreen() {
  const { list, isLoading, refresh } = useGetTodoList()

  const { createToDo } = useToDoCreate({
    onSuccess: () => {
      refresh()
    },
  })

  const { updateToDo } = useToDoUpdate({
    onSuccess: () => {
      refresh()
    },
  })

  const { authCredentials } = useAuthCredentials()

  const ac = authCredentials?.access_token
  // console.log(ac)

  const { top, bottom } = useAppSafeArea()

  const { removeCredentials } = useAuthCredentials()

  const { control, handleSubmit, reset } = useForm<HomeSchema>({
    resolver: zodResolver(homeSchema),

    defaultValues: {
      title: '',
    },
  })

  function renderItem({ item }: ListRenderItemInfo<ToDoDTO>) {
    return (
      <ToDo
        todoName={item.title}
        status={item.status}
        onPress={() =>
          updateToDoStatus({
            todoID: item.id,
            status: !item.status,
          })
        }
      />
    )
  }

  function addToDo({ title }: HomeSchema) {
    createToDo(title)
    reset()
  }

  function updateToDoStatus({ todoID, status }: UpdateToDo) {
    updateToDo(status, todoID)
  }

  // useEffect(() => {
  //   api.defaults.headers.common.Authorization = `Bearer ${ac}`
  //   console.log(api.defaults.headers.common.Authorization)
  // }, [ac])

  return (
    <View
      className="flex-1 justify-center bg-white px-5"
      style={{
        paddingTop: top,
      }}>
      <Text className="font-bold text-2xl mb-4">USER ToDo List</Text>

      <Button title="sair" onPress={removeCredentials} />

      <View className="pb-5">
        <FormTextInput
          control={control}
          name="title"
          placeholder="Adicione seu todo"
        />

        <CustomButton
          title="Add Todo"
          onPress={handleSubmit(addToDo)}
          disabled={isLoading}
        />
      </View>

      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshing={isLoading}
        onRefresh={refresh}
        contentContainerStyle={{
          paddingBottom: bottom,
        }}
        ItemSeparatorComponent={() => <View className="h-[2px] bg-gray-200" />}
      />
    </View>
  )
}
