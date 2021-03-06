import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import Button from 'components/Button'

import { FilterList } from '@styled-icons/material-outlined/FilterList'
import { Close } from '@styled-icons/material-outlined/Close'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { ParsedUrlQueryInput } from 'querystring'
import xor from 'lodash.xor'
import { useHandleScroll } from 'hooks/handleScroll'

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
  fields: Field[]
}

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const { hideScrollOnMobile } = useHandleScroll()

  const handleFilterMenu = () => {
    setIsOpenFilter(false)
    hideScrollOnMobile(false)
  }

  const handleOpenFilter = () => {
    hideScrollOnMobile(true)
    setIsOpenFilter(true)
  }

  const handleCloseFilter = () => {
    hideScrollOnMobile(false)
    setIsOpenFilter(false)
  }

  const handleRadio = (name: string, value: string | boolean) => {
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleCheckbox = (name: string, value: string) => {
    //armazenando os values.name como um array, exemplo: platforms: ['windows', 'linux']
    const currentList = (values[name] as []) || []

    // xor retornar um array da diferença simetrica entre 2 arrays
    // values.name e array [name]: xor
    // estou fazendo um spread dos initialValues com a diferença simetrica de xor

    // [name] quer dizer um campo dinamico, exemplo:
    // blablabla: ['windows', 'linux']

    setValues((v) => ({ ...v, [name]: xor(currentList, [value]) }))
    //https://lodash.com/docs/#xor
  }

  // antes tinha windows, entao ele esta no currentList
  // agora cliquei no Checkbox e chamou o handlecheckbox,
  // passando name: platform e value: windows
  // set value = platforms: [] pois o xor retorna a diferença simetrica

  useEffect(() => {
    //no caso nao preciso de um button para acionar a chamada
    onFilter(values)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]) //toda vez que values mudar vai chamar o onFilter passando os values

  return (
    <S.Wrapper isOpen={isOpenFilter}>
      <S.Overlay aria-hidden={!isOpenFilter} />
      <S.IconWrapper>
        <FilterList
          aria-label="open filters"
          onClick={() => handleOpenFilter()}
        />
        <Close aria-label="close filters" onClick={() => handleCloseFilter()} />
      </S.IconWrapper>
      <S.Content>
        {items.map((item) => (
          <S.Items key={item.name}>
            <Heading size="small" lineBottom lineColor="secondary">
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
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
              item.fields.map((field) => (
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
        <Button fullWidht onClick={handleFilterMenu}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
