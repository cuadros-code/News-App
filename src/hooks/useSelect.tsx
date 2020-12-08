import React, { useState } from 'react'


export const useSelect = (initialState: string, options: Array<{ value: string, label: string }>) => {

    const [state, setstate] = useState(initialState);


    const handleChange = ( e : React.ChangeEvent<HTMLSelectElement> ) => {
        setstate( e.target.value );
    }

    const SelectCategory = () => {

        return (
            <select
                className="browser-default"
                value={ state }
                onChange={ handleChange }
            >
                <option value="" disabled >Select Option</option>
                {
                    options.map( b => (
                        <option
                            value={b.value}
                            key={b.value}
                        >
                            { b.label}
                        </option>))
                }
            </select>
        )

    }

    return [state, SelectCategory];
}
