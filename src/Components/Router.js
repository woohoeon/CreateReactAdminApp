import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { withTheme } from '@material-ui/core/styles'
import routes from '../routes'

const drawerWidth = 220

const StyledWrapper = styled.div`
  display: flex;
`

const StyledMain = styled.main`
  overflow: auto;
  margin-left: ${drawerWidth}px;
  padding: 24px;
  width: 100%;
`

/**
 * Router
 *
 * @return {JSX}
 */
const Router = ({ theme }) => (
  <BrowserRouter basename={process.env.ROUTER_BASENAME}>
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <StyledMain>
          <Switch>
            <Redirect path="*" to={routes.home} />
          </Switch>
        </StyledMain>
      </StyledWrapper>
    </ThemeProvider>
  </BrowserRouter>
)

Router.propTypes = {
  theme: PropTypes.object.isRequired
}

export default withTheme(Router)
