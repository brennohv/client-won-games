import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme.ts'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
