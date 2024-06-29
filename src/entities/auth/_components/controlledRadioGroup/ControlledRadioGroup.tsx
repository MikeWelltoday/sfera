import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/shared'

type ControlledRadioGroupProps<T extends FieldValues> = Omit<
  RadioGroupProps,
  'onChange' | 'value'
> &
  UseControllerProps<T>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  rules,
  shouldUnregister,
  ...rest
}: ControlledRadioGroupProps<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    name,
    rules,
    shouldUnregister,
  })

  return <RadioGroup {...rest} onValueChange={onChange} value={value} {...field} />
}
