import React from 'react'
import styles from './Form.module.css';
import { useSelect } from '../hooks/useSelect';

const OptionSelect = [ 
    {value:'business', label:'business' },
    {value:'entertainment', label:'entertainment' },
    {value:'general', label:'general' },
    {value:'health', label:'health' },
    {value:'science', label:'science' },  
    {value:'sports', label:'sports' },  
    {value:'technology', label:'technology' },  
 ]

export const Form = () => {

    const [stateSelect, SelectComponent ] = useSelect('', OptionSelect );

    return (
        <div className={` row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading} >Search by categories</h2>

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
