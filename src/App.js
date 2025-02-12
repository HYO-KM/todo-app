import './App.css'; // アプリ全体のスタイルを適用
import { Title } from "./components/Title"; // タイトルコンポーネントのインポート
import { InputForm } from "./components/InputForm"; // タスク入力フォームのインポート
import { TodoList } from './components/TodoList'; // タスク一覧コンポーネントのインポート
import { useState } from 'react'; // React の useState フックをインポート

function App() {
  // タスク一覧を管理する state
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body"> {/* アプリのコンテナ */}
      <Title /> {/* タイトルコンポーネントの表示 */}
      <InputForm taskList={taskList} setTaskList={setTaskList} /> {/* タスク入力フォームの表示 */}
      <TodoList taskList={taskList} setTaskList={setTaskList} /> {/* タスク一覧の表示 */}
    </div>
  );
}

export default App; // App コンポーネントをエクスポート
