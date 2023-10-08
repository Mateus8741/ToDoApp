import React from 'react'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import {
  CustomCheckBox,
  CustomCheckBoxProps,
} from '../CustomCheckBox/CustomCheckBox'

export function FormCustomCheckBox<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...customCheckBoxProps
}: CustomCheckBoxProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <CustomCheckBox
          onPress={(val) => field.onChange(val)}
          isChecked={field.value}
          {...customCheckBoxProps}
        />
      )}
    />
  )
}
