import React from 'react'

type HeaderProps = {
    title : string
}

export const Header= ( {title } : HeaderProps ) => {
    return (
        <div className="title" > 
            <h3 className="brand-logo center">{ title }</h3>
        </div>
    )
}
