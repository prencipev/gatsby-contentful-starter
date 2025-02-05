import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return ([
        <Navigation/>,
        <Container>
          {children}
          <Footer/>
        </Container>]
    )
  }
}

export default Template
