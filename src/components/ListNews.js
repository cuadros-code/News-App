import React from 'react'
import { ItemNew } from './ItemNew';

export const ListNews = ({ news }) => {

    return (
        <div className="row" >
            {
                news.map( ( item , i) => (
                    <ItemNew item={item} key={i}/>
                ) )
            }
        </div>
    )
}
