import { CartItem } from 'hooks/use-cart'

export type CreatePaymentIntentProps = {
  items: CartItem[]
  jwt: string
}

export const createPaymentIntent = async ({
  items,
  jwt
}: CreatePaymentIntentProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/create-payment-intent`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cart: items })
    }
  )

  return await response.json()
}
