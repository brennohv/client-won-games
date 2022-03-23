// Hook criado para esconder o scroll no mobile quando o filtro estiver aberto.

import { useContext, createContext, useState } from 'react'

export type HandleScrollData = {
  hideScrollOnMobile: (value: boolean) => void
  isOpen: boolean
}

export const HandleScrollDefaultValues = {
  hideScrollOnMobile: () => null,
  isOpen: false
}

export const HandleScroll = createContext<HandleScrollData>(
  HandleScrollDefaultValues
)

export type HandleProviderProps = {
  children: React.ReactNode
}

const HandleProvider = ({ children }: HandleProviderProps) => {
  const [handleisOpen, setHandleIsOpen] = useState(false)

  const hideScrollOnMobile = (value: boolean) => {
    value ? setHandleIsOpen(true) : setHandleIsOpen(false)
  }

  const isOpen = handleisOpen

  return (
    <HandleScroll.Provider
      value={{
        hideScrollOnMobile,
        isOpen
      }}
    >
      {children}
    </HandleScroll.Provider>
  )
}

const useHandleScroll = () => useContext(HandleScroll)

export { HandleProvider, useHandleScroll }

//useContext = Aceita um objeto de contexto (o valor retornado de React.createContext) e retorna o valor atual do contexto.
//O valor de contexto atual é determinado pela prop value do<MyContext.Provider>
