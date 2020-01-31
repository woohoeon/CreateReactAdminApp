import * as Confirm from '../../Actions/confirm'

describe('confirm actions', () => {
  test('confirm actions', () => {
    const proceed = () => {
      console.log('test log.')
    }
    const messages = ['test message0', 'test message1']

    const actions = [
      Confirm.openConfirm(proceed, messages),
      Confirm.closeConfirm()
    ]

    const expectedActions = [
      {
        type: Confirm.OPEN_CONFIRM,
        payload: {
          proceed,
          messages
        }
      },
      {
        type: Confirm.CLOSE_CONFIRM
      }
    ]

    expect(actions).toEqual(expectedActions)
  })
})
