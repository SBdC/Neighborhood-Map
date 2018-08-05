import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = (props) => (

  <div>
    <header className="App-header">
      <div className="hamburger-menu " onClick={() => props.onClick()}><FontAwesomeIcon className="icon-hamb"icon={ faBars } /></div>
      <h1 className="App-title">Independent Shops Berlin Mitte</h1>
    </header>
  </div>

)

export default Header
