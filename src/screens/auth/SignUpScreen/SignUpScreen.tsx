import { CustomButton, FormTextInput, OrSeparator } from '@components'
import { zodResolver } from '@hookform/resolvers/zod'
import { useResetNavigationSuccess } from '@hooks'
import { AuthScreenProps } from '@routes'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'
import { SignUpSchema, signUpSchema } from './signUpScheema'

export function SignUpScreen({ navigation }: AuthScreenProps<'SignUpScreen'>) {
  const { reset } = useResetNavigationSuccess()

  const { control, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),

    defaultValues: {
      name: '',
      email: '',
      password: '',
    },

    mode: 'onChange',
  })

  function createAccount(data: SignUpSchema) {
    navigation.navigate('SuccessScreen', { user: data.name })
    reset({
      user: data.name,
    })
  }

  function goToRegisterOccount() {
    navigation.navigate('LoginScreen')
  }

  return (
    <View className="flex-1 justify-center items-center bg-white px-5">
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

      <CustomButton title="Entrar" onPress={handleSubmit(createAccount)} />

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
