import React from 'react'
import { render } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import Confirm from '../../Containers/Confirm'

describe('<Confirm />', () => {
  const mockStore = configureMockStore({})

  const store = mockStore({
    confirm: {
      isOpen: true,
      proceed: f => f,
      messages: ['confirm']
    }
  })

  let container = null

  test('check render', () => {
    const renderReault = render(<Confirm store={store} />)
    container = renderReault.container
  })

  test('check before render', () => {
    expect(container).toMatchSnapshot()
  })
})
