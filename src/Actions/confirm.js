/**
 * action types
 */
export const OPEN_CONFIRM = 'CONFIRM/OPEN_CONFIRM'
export const CLOSE_CONFIRM = 'CONFIRM/CLOSE_CONFIRM'

/**
 * ActionCreator
 *
 * @param {function} proceed
 * @param {array} messages
 * @return {Object} action
 */
export const openConfirm = (proceed, messages) => ({
  type: OPEN_CONFIRM,
  payload: { proceed, messages }
})

/**
 * ActionCreator
 *
 * @return {Object} action
 */
export const closeConfirm = () => ({
  type: CLOSE_CONFIRM
})
