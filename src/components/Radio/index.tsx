import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number | undefined

export type RadioProps = {
  onCheck?: (value: RadioValue) => void
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input
        type={'radio'}
        onChange={onChange}
        id={labelFor}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
