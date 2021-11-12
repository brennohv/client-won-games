import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import Button from 'components/Button'
import * as S from './styles'
import { useState } from 'react'

export type Field = {
  label: string
  name: string
}

type Values = {
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (value: Values) => void
}

export type ItemProps = {
  title: string
  name: string
  type: string
  field: Field[]
}

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)

  const handleFilter = () => {
    onFilter(values)
  }

  const handleChange = (name: string, value: string | boolean) => {
    setValues((v) => ({ ...v, [name]: value }))
  }

  return (
    <S.Wrapper>
      {items.map((item) => (
        <div key={item.name}>
          <Heading size="small" lineBottom lineColor="secondary">
            {item.title}
          </Heading>

          {item.type === 'checkbox' &&
            item.field.map((field) => (
              <Checkbox
                label={field.label}
                name={field.name}
                key={field.name}
                labelFor={field.name}
                isChecked={!!values[field.name]}
                onCheck={(v) => handleChange(field.name, v)}
              />
            ))}

          {item.type === 'radio' &&
            item.field.map((field) => (
              <Radio
                label={field.label}
                value={field.name}
                name={item.name}
                key={field.name}
                labelFor={field.name}
                defaultChecked={field.name === values[item.name]}
                onCheck={() => handleChange(item.name, field.name)}
              />
            ))}
        </div>
      ))}
      <Button fullWidht onClick={handleFilter}>
        Filter
      </Button>
    </S.Wrapper>
  )
}

export default ExploreSidebar
