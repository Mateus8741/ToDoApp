import { CustomButton, FormTextInput, OrSeparator } from '@components'
import { AuthScreenProps } from '@routes'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

export function SignUpScreen({ navigation }: AuthScreenProps<'SignUpScreen'>) {
  const { control } = useForm()

  function handleSubmit() {
    navigation.navigate('SuccessScreen', { user: 'John Doe' })
  }

  function goToRegisterOccount() {
    navigation.navigate('LoginScreen')
  }

  return (
    <View className="flex-1 justify-center items-center bg-white px-5">
      {/* <Logo /> */}

      <Text className="text-5xl font-bold text-center">Cadastro</Text>

      <View className="pt-12" />

      <FormTextInput
        control={control}
        name="name"
        placeholder="Digite seu nome"
        label="Nome"
      />

      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu e-mail"
        label="E-mail"
      />

      <FormTextInput
        control={control}
        name="password"
        placeholder="Digite sua senha"
        label="Senha"
      />

      <View className="pt-12" />

      <CustomButton title="Entrar" onPress={handleSubmit} />

      <OrSeparator />

      <View className="flex-row justify-start items-start self-start mt-5">
        <Text>Já possui uma conta? </Text>
        <Pressable onPress={goToRegisterOccount} hitSlop={10}>
          <Text className="text-green-400 font-bold">Faça o login</Text>
        </Pressable>
      </View>
    </View>
  )
}
