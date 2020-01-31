import React from 'react'
import Section from '../../Components/Section'
import { translate } from 'react-i18next'

const HomePresenter = () => (
  <React.Fragment>
    <Section title="HOME" />
  </React.Fragment>
)

export default translate()(HomePresenter)
