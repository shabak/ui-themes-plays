import type { Theme } from 'theme-ui'

export const theme: Theme = {
  config: {
    // initialColorModeName: 'light',
    // useCustomProperties: false,
  },
  colors: {
    // text: '#fff',
    // background: '#000',
    // primary: 'gray',
    modes: {
      dark: {
        text: '#000',
        background: '#fff',
        primary: 'red',
      },
      light: {
        text: '#fff',
        background: '#000',
        primary: 'gray',
        // text: '#000',
        // background: '#fff',
        // primary: 'red',
      },
    }
  },
}