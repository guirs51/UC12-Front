 //rfce - Reac Functional  Export Component

import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='header'>
        <h1 className='logo'>Meu Logo</h1>
        <nav className='nav'>
            <a href="">Home</a>
            <a href="">Sobre</a>
            <a href="">Contato</a>
        </nav>
    </header>
  )
}

export default Header