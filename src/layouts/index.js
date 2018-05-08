import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
// import './index.css'
import './bootstrap.css'
import './genisis.css'

const TemplateWrapper = ({ children }) => (
  <div className='site-root'>
    <Helmet
      title='Genesis Services'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
