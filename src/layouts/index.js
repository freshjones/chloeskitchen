import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NewsletterHeader from '../components/NewsletterHeader'
import Header from '../components/Header'
import Featured from '../components/Featured'
import {About} from '../components/Spotlights'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Chloe's Kitchen - A food blog with simple and tasty recipes"
      meta={[
        { name: 'description', content: 'A food blog with simple, delicious recipes' },
      ]}
    />
    <NewsletterHeader />
    <Header />
    <Featured />
    <About />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
