import { InputHTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react'
import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} type="checkbox" />
    {!!label && (
      <S.Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)

export default Checkbox
