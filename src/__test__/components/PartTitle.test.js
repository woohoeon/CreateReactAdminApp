import React from 'react'
import { render, getByText } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import configureTheme from '../../configureTheme'
import PartTitle from '../../Components/PartTitle'

describe('<PartTitle />', () => {
  const theme = configureTheme('development')

  test('check render', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <PartTitle title="test" />
      </ThemeProvider>
    )
    expect(container).toMatchSnapshot()
  })

  test('check props', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <PartTitle title="test" />
      </ThemeProvider>
    )
    getByText(container, 'test')
  })
})
