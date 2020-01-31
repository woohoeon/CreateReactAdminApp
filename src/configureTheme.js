import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'
import deepOrange from '@material-ui/core/colors/deepOrange'

/**
 * configureTheme
 *
 * @param {string} env
 * @return {MuiTheme}
 */
const configureTheme = env => {
  const t = {
    production: {
      palette: {
        primary: indigo,
        secondary: pink
      }
    },
    development: {
      palette: {
        primary: green,
        secondary: deepOrange
      }
    }
  }
  return createMuiTheme(t[env])
}

export default configureTheme
