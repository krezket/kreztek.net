import { useState } from 'react'
import './Header.css'

function Header() {

    return (
        <>
            <header>
                <h1>KrezTek</h1>

                <nav>
                    <a>search</a>
                    <a>profile</a>
                    <a>cart</a>
                </nav>
            </header>
        </>
    )
}

export default Header; 

