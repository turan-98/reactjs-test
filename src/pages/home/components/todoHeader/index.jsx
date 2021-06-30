import React, { useState, useContext } from 'react';
import { TodoContext } from '../../../../contexts/todo.context';
import styles from '../../../../css/style.css'


export default function TodoHeader() {

    const todoContext = useContext(TodoContext);
    const [todo, setTodo] = useState(() => "");

    const handleAddTodo = (e) => {
        e.preventDefault()
        todoContext.dispatch({ type: 'add', payload: todo });
    }

    return (
        <div>
            <p>Lista de Atividades</p>
            <div >
                <input type="text" class="input-list" onChange={(e) => { setTodo(e.target.value) }} placeholder="digite para filtrar"></input>
                <button class="btn btn-primary m-4 btn-click" type="button" onClick={(e) => handleAddTodo(e)}>Adicionar</button>
            </div>
        </div>
    )
}