import React from 'react'
import './nav.scss'
import DateTime from './DateTime'

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="apple-icon">
                <img src="./navbar-icons/apple.svg" alt="" />
            </div>

            <div className="nav-items">
                <p>Chahit Shah</p>
            </div>

            <div className="nav-items">
                <p>File</p>
            </div>

            <div className="nav-items">
                <p>Window</p>
            </div>

            <div className="nav-items">
                <p>Terminal</p>
            </div>
        </div>
      <div className="right">
        <div className="wifi-icon">
            <img src="./navbar-icons/wifi.svg" alt="" />
        </div>

        <div className="time">
            <DateTime/>
        </div>
      </div>
    </nav>
  )
}

export default Nav
