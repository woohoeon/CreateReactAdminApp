import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import configureTheme from '../configureTheme'
import Router from './Router'
import GlobalStyles from './GlobalStyles'

const theme = configureTheme(process.env.NODE_ENV)
const store = configureStore({})

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </MuiThemeProvider>
  </Provider>
)

export default App
