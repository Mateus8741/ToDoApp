import React from 'react';

import { useAuthSignIn } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToastService } from '@services';
import { useForm } from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import { AuthScreenProps } from '@routes';

import { LoginSchema, loginSchema } from './loginScheema';

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
  const { showToast } = useToastService();

  const { isLoading, signIn } = useAuthSignIn({
    onError(message) {
      showToast({
        type: 'error',
        message,
      });
    },
  });

  const { control, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function onSubmit(data: LoginSchema) {
    signIn(data);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotoPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen>
      <Text mb="s8" preset="headingLarge">
        Olá
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        boxProps={{ mb: 's20' }}
        label="E-mail"
        placeholder="Digite seu E-mail"
      />

      <FormPasswordInput
        control={control}
        name="password"
        boxProps={{ mb: 's10' }}
        label="Senha"
        placeholder="Digite sua Senha"
      />

      <Text
        color="primary"
        preset="paragraphSmall"
        onPress={navigateToForgotoPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button
        mt="s48"
        title="Entrar"
        loading={isLoading}
        onPress={handleSubmit(onSubmit)}
      />
      <Button
        mt="s12"
        preset="outline"
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
