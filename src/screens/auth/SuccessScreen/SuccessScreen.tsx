import { CustomButton, Logo } from '@components'
import { AuthScreenProps } from '@routes'
import React from 'react'
import { Text, View } from 'react-native'

import SVG from '../../../assets/success.svg'

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  const { user } = route.params

  function goToLoginScreen() {
    navigation.navigate('LoginScreen')
  }

  return (
    <View className="flex-1 justify-center items-center bg-white px-5">
      <Logo />

      <View className="pt-10" />

      <SVG width={200} height={200} />

      <Text className="mt-5 mb-5">
        Olá, <Text className="text-green-500 font-bold uppercase">{user} </Text>
        bem-vindo ao <Text className="text-green-500 font-bold">ToDoList</Text>
      </Text>

      <CustomButton
        title="Voltar para tela de login"
        onPress={goToLoginScreen}
      />
    </View>
  )
}
