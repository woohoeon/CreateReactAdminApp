import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Confirm from '../Components/Confirm'
import { closeConfirm } from '../Actions/confirm'

/**
 * Container
 *
 * @return {JSX}
 */
const ConfirmContainer = ({ proceed, closeConfirm, ...others }) => {
  const handleProceed = () => {
    proceed()
    closeConfirm()
  }
  return <Confirm {...others} proceed={handleProceed} cancel={closeConfirm} />
}

ConfirmContainer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  proceed: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  closeConfirm: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isOpen: state.confirm.isOpen,
  proceed: state.confirm.proceed,
  messages: state.confirm.messages
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ closeConfirm }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmContainer)
