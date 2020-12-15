import React from 'react'
import styles from './Form.module.css';
import { useSelect } from '../hooks/useSelect';

const OptionSelect = [ 
    {value:'general', label:'general' },
    {value:'business', label:'business' },
    {value:'entertainment', label:'entertainment' },
    {value:'health', label:'health' },
    {value:'science', label:'science' },  
    {value:'sports', label:'sports' },  
    {value:'technology', label:'technology' },  
 ]

export const Form = ({ setSaveCategorie }: any ) => {

    const [stateSelect, SelectComponent ] = useSelect('general', OptionSelect );

    const handleSubmit = ( event : React.FormEvent ) => {
        event.preventDefault();
        setSaveCategorie(stateSelect);
    }

    return (
        <div className={` row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={ handleSubmit }>
                    <h3 className={styles.heading} > categories</h3>

                    <SelectComponent />

                    <div className="input-field col s12">
                        <input 
                        
                        type="submit"
                        className={`btn-large amber darken-2 ${styles.btn_block}`}
                        value="Search"

                        />

                    </div>
                </form>
            </div>
        </div>
    )
}
