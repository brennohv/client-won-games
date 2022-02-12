import '../.jest/next-image-mock'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme.ts'
import { CartContext, CartContextDefaultValues } from 'hooks/use-cart'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider
        value={{
          ...CartContextDefaultValues,
          ...(context.args?.cartContextValue || {}),
          ...context.args
        }}
      >
        <GlobalStyles />
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
  )
]
