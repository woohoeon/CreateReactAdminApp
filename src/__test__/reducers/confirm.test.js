import * as Confirm from '../../Actions/confirm'
import confirmReducer from '../../Reducers/confirm'

describe('confirm reducers', () => {
  const proceed = () => {
    console.log('test log.')
  }
  const messages = ['test message0', 'test message1']

  let state = confirmReducer(undefined, {})

  test('should return the initalState', () => {
    expect(state).toHaveProperty('isOpen', false)
    expect(state).toHaveProperty('proceed')
    expect(state).toHaveProperty('messages', ['confirm'])
  })

  test('should open confirm', () => {
    state = confirmReducer(state, Confirm.openConfirm(proceed, messages))

    expect(state).toEqual({
      isOpen: true,
      proceed: proceed,
      messages: messages
    })
  })

  test('should close confirm', () => {
    state = confirmReducer(state, Confirm.closeConfirm())

    expect(state).toEqual({
      isOpen: false,
      proceed: proceed,
      messages: messages
    })
  })
})
