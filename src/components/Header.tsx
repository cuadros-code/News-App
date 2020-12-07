import React from 'react'

type HeaderProps = {
    title : string
}

export const Header= ( {title } : HeaderProps ) => {
    return (
        <nav className="nav-wrapper light-blue darken-4" > 
            <a href="#!" className="brand-logo center">{ title }</a>
        </nav>
    )
}
