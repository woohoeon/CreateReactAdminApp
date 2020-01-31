import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'

const StyledDialog = styled(Dialog)`
  div {
    min-width: 300px;
  }
`

/**
 * Confirm
 *
 * @description Container
 * @return {JSX}
 */
const Confirm = ({ isOpen, proceed, messages, cancel }) => (
  <StyledDialog
    disableBackdropClick
    disableEscapeKeyDown
    maxWidth="sm"
    open={isOpen}
  >
    <DialogTitle>confirm</DialogTitle>
    <DialogContent>
      {messages.map((message, index) => (
        <Typography key={index}>{message}</Typography>
      ))}
    </DialogContent>
    <DialogActions>
      <Button onClick={proceed} color="primary">
        process
      </Button>
      <Button onClick={cancel}>cancel</Button>
    </DialogActions>
  </StyledDialog>
)

Confirm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  proceed: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  cancel: PropTypes.func.isRequired
}

export default Confirm
