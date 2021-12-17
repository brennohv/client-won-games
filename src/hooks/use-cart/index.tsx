import { useQueryGames } from 'graphql/queries/games'
import { useContext, createContext, useState, useEffect } from 'react'
import formatPrice from 'utils/format-price'
import { getStorageItem } from 'utils/localStorage'
import { cartMapper } from 'utils/mappers'

const CART_KEY = 'cartItems'

type CartItem = {
  id: string
  img: string
  price: string
  title: string
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '€0.00'
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  // Assim que montar o componente, ele vai pegar no localStorage
  // e passar o valor para o cartItems
  // Que é retornado para o provider

  const { data } = useQueryGames({
    skip: !cartItems.length, //skip faz com que se nao tiver cartItems eu nao rodo a querie
    // Caso eu nao encontre nenhum id ia pegar todos os jogos
    // por isso temos que usar o skip com uma validação se existe algo no storage
    variables: {
      where: {
        id: cartItems
      }
    }
  })

  //Estou fazendo um requisição de jogos aonde o id: seja igual ao id no storaged
  //com isso retorno os jogos, e monto a estrutura do meu objeto que quero passar
  //para o provider

  const total = data?.games.reduce((acc, game) => {
    return acc + game.price
  }, 0)

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }

//useContext = Aceita um objeto de contexto (o valor retornado de React.createContext) e retorna o valor atual do contexto.
//O valor de contexto atual é determinado pela prop value do<MyContext.Provider>
