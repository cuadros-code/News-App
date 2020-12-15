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
                    options.map( option => (
                        <option
                            value={option.value}
                            key={option.value}
                        >
                            { option.label}
                        </option>))
                }
            </select>
        )

    }

    return [state, SelectCategory];
}
