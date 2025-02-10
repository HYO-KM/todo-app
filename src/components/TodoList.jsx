import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {

    const taskComp = (id) => {
        setTaskList(taskList.map((task) => {
            if(id === task.id) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        }))
    };


    const taskDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
    }

  return (
    <div className='todoList'>
        <div className='todos'>
            {taskList.map((task, index ) => (
                <div className={`todo ${task.completed ? "completed" : ""}`} key={index}>
                    <div className='todoText'>
                        <span>{task.text}</span>
                    </div>
                    <div className='icons'>
                        <button onClick={() => taskComp(task.id)}>
                            <i className="bi bi-check-lg"></i>
                        </button>
                        <button onClick={() => taskDelete(task.id)}>
                            <i className="bi bi-trash3"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
