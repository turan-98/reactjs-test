import React from 'react';
import styles from '../../../../css/itemlist.css'

export default function Todo({ id, description, done }) {

    return (
        <div >
            <div >
                <div class="item-list">{id} - {description}</div>
                <div >Feito? {done === true ? 'Sim' : 'Não'}</div>
            </div>
            <div >
                <button type="button" >Ok</button>
            </div>
        </div>
    )
}