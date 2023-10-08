import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'

interface Props {
  scrollable?: boolean
  children: React.ReactNode
}

export function Screen({ scrollable = false, children }: Props) {
  const Container = scrollable ? ScrollView : View

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Container
        className="flex-1"
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {children}
      </Container>
    </KeyboardAvoidingView>
  )
}
