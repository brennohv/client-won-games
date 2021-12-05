import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import Button from 'components/Button'

import { FilterList } from '@styled-icons/material-outlined/FilterList'
import { Close } from '@styled-icons/material-outlined/Close'
import { useState } from 'react'

import * as S from './styles'
import { ParsedUrlQueryInput } from 'querystring'
import xor from 'lodash.xor'

export type Field = {
  label: string
  name: string
}

type Values = ParsedUrlQueryInput

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
  const [isOpen, setIsOpen] = useState(false)

  const handleFilter = () => {
    onFilter(values)
    setIsOpen(false)
  }

  const handleRadio = (name: string, value: string | boolean) => {
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleCheckbox = (name: string, value: string) => {
    //armazenando os values.name como um array, exemplo: platforms: ['windows', 'linux']
    const currentList = (values[name] as []) || []

    //xor retornar um array da diferença simetrica entre 2 arrays
    // values.name e array [name]: xor
    // estou fazendo um spread dos initialValues com a diferença simetrica de xor

    // [name] quer dizer um campo dinamico, exemplo:
    // blablabla: ['windows', 'linux']

    setValues((v) => ({ ...v, [name]: xor(currentList, [value]) }))
    //https://lodash.com/docs/#xor
  }

  // antes tinha windows, entao ele esta no currentList
  // agora cliquei no Checkbox e chamou o handlecheckbox,
  // passando name platform e value windows
  // set value = platforms: [] pois o xor retorna a diferença simetrica

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={!isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>
      <S.Content>
        {items.map((item) => (
          <S.Items key={item.name}>
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
                  isChecked={(values[item.name] as string[])?.includes(
                    field.name
                  )}
                  onCheck={() => handleCheckbox(item.name, field.name)}
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
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  }
                  onChange={() => handleRadio(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidht onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
