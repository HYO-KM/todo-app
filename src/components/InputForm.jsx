import React, { useState } from 'react'

export const InputForm = ({ taskList, setTaskList }) => {
    
    // 入力されたテキストを管理する state
    const [inputText, setInputText] = useState("");

    // フォームの送信時に新しいタスクを追加する関数
    const submit = (e) => {
        e.preventDefault(); // ページリロードを防ぐ

        // 入力が空の場合は追加しない
        if (inputText.trim() === "") return;

        // 新しいタスクをタスクリストに追加
        setTaskList([
            ...taskList,
            {
                id: taskList.length, // IDを現在のタスクリストの長さで設定
                text: inputText, // 入力されたテキスト
                completed: false // 初期状態では未完了
            }
        ]);

        setInputText(""); // 入力フィールドをクリア
    };

    // 入力フィールドの変更を state に反映
    const change = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div className="inputForm"> {/* 入力フォーム全体のコンテナ */}
            <form onSubmit={submit}> {/* フォーム */}
                <input 
                    type="text" 
                    onChange={change} 
                    value={inputText} 
                    placeholder="タスクを入力" // プレースホルダー追加
                />
                <button type="submit"> {/* タスク追加ボタン */}
                    <i className="bi bi-plus-square"></i>
                </button>
            </form>
        </div>
    );
}
