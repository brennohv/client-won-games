import React, { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: JSX.Element
  iconPosition?: 'right' | 'left'
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInput,
  icon,
  iconPosition = 'left',
  label,
  labelFor = '',
  initialValue = '',
  disabled = false,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper iconPosition={iconPosition}>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          {...props}
          iconPosition={iconPosition}
          disabled={disabled}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
