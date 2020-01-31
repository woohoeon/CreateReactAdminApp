import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const env = process.env.NODE_ENV

const StyledAppBar = styled(AppBar)`
  && {
    z-index: ${props => props.theme.zIndex.drawer + 1};
    position: fixed;
    box-shadow: none;
  }
`

const StyledEnvTypo = styled(Typography)`
  && {
    margin: 0 10px;
    padding: 4px 0 0;
  }
`

/**
 * Header
 *
 * @param {Object} props
 * @description Container
 * @return {JSX}
 */
const Header = props => (
  <StyledAppBar>
    <Toolbar>
      <Typography color="inherit" variant="h6">
        HOME
      </Typography>
      <StyledEnvTypo color="inherit">{env}</StyledEnvTypo>
    </Toolbar>
  </StyledAppBar>
)

export default Header
