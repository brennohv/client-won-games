import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import Button from 'components/Button'
import * as S from './styles'
import { useState } from 'react'

export type ExploreSidebarProps = {
  items: Items[]
  initialValues?: Value
}

type Value = {
  [field: string]: boolean
}

export type Items = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

const ExploreSidebar = ({ items, initialValues = {} }: ExploreSidebarProps) => {
  const [value] = useState(initialValues)

  return (
    <S.Wrapper>
      {items.map((item) => (
        <div key={item.title}>
          <Heading lineBottom lineColor="secondary" size="small">
            {item.title}
          </Heading>
          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox
                key={field.name}
                name={field.name}
                label={field.label}
                labelFor={field.name}
                isChecked={!!value[field.name]}
              />
            ))}
          {item.type === 'radio' &&
            item.fields.map((field) => (
              <Radio
                key={field.name}
                value={field.name}
                name={item.name}
                label={field.label}
                labelFor={field.name}
                defaultChecked={!!value[field.name]}
              />
            ))}
        </div>
      ))}

      <Button fullWidht size="medium">
        Filtrar
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
