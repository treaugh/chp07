import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, lightGreen } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#9bbb8e',
      main: '#597d4a',
      dark: '#374f2e',
      contrastText: '#dff2dc',
    },
    secondary: {
      light: '#e7ff8c',
      main: '#b2ff59',
      dark: '#7ecb20',
      contrastText: '#000',
    },
      openTitle: blueGrey['400'],
      protectedTitle: lightGreen['400'],
      type: 'light'
    }
  })


  export default theme
