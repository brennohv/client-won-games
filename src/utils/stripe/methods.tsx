import { PaymentIntent } from '@stripe/stripe-js'
import { CartItem } from 'hooks/use-cart'

type FetcherParams = {
  url: string
  body: string
  jwt: string
}

export const fetcher = async ({ url, body, jwt }: FetcherParams) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    },
    body
  })

  return await response.json()
}

export type CreatePaymentIntentProps = {
  items: CartItem[]
  jwt: string
}

export const createPaymentIntent = async ({
  items,
  jwt
}: CreatePaymentIntentProps) => {
  return fetcher({
    url: '/orders/create-payment-intent',
    body: JSON.stringify({ cart: items }),
    jwt
  })
}

type CreatePaymentParams = {
  items: CartItem[]
  paymentIntent?: PaymentIntent
  jwt: string
}

export const createPayment = async ({
  items,
  jwt,
  paymentIntent
}: CreatePaymentParams) => {
  return fetcher({
    url: '/orders',
    body: JSON.stringify({
      cart: items,
      paymentIntentId: paymentIntent?.id,
      paymentMethod: paymentIntent?.payment_method
    }),
    jwt
  })
}
