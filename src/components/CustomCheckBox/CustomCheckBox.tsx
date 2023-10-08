import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

export type CustomCheckBoxProps = React.ComponentProps<typeof BouncyCheckbox>

export function CustomCheckBox({ ...rest }: CustomCheckBoxProps) {
  return (
    <BouncyCheckbox
      size={20}
      fillColor="#cdfed5"
      innerIconStyle={{
        borderRadius: 6,
        backgroundColor: '#cdfed5',
      }}
      iconImageStyle={{ tintColor: '#0a9f23' }}
      textContainerStyle={{
        marginLeft: 8,
      }}
      textStyle={{
        color: '#404040',
        fontSize: 14,
        textDecorationLine: 'none',
      }}
      {...rest}
    />
  )
}
