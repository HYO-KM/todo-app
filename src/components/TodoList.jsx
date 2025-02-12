import React from 'react'

export const TodoList = ({ taskList, setTaskList }) => {

    // タスクの完了状態を切り替える関数
    const taskComp = (id) => {
        setTaskList(taskList.map((task) => {
            if (id === task.id) {
                return {
                    ...task,
                    completed: !task.completed // 完了状態を反転
                };
            }
            return task;
        }));
    };

    // タスクを削除する関数
    const taskDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id)); // 指定された ID のタスクを除外
    };

    return (
        <div className='todoList'> {/* タスクリスト全体のコンテナ */}
            <div className='todos'> {/* タスクリストを表示する領域 */}
                {taskList.map((task, index) => (
                    <div 
                        className={`todo ${task.completed ? "completed" : ""}`} 
                        key={index} // タスクのキーを設定
                    >
                        <div className='todoText'>
                            <span>{task.text}</span> {/* タスクのテキストを表示 */}
                        </div>
                        <div className='icons'> {/* ボタンアイコンを表示 */}
                            <button onClick={() => taskComp(task.id)}> {/* タスクの完了状態を切り替えるボタン */}
                                <i className="bi bi-check-lg"></i>
                            </button>
                            <button onClick={() => taskDelete(task.id)}> {/* タスクを削除するボタン */}
                                <i className="bi bi-trash3"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
