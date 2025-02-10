import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState("")

    const submit = (e) => {
        e.preventDefault();

        setTaskList([
            ...taskList,
            {
                id: taskList.length,
                text: inputText,
                completed: false
            }
        ]);

        setInputText("");
    }

    const change = (e) => {
        setInputText(e.target.value);
    }

    return (

    <div className="inputForm">
        <form onSubmit={submit}>
            <input type="text" onChange={change} value={inputText}/>
            <button type="submit">
                <i className="bi bi-plus-square"></i>
            </button>
        </form>
    </div>
  )
}
