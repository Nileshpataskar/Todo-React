import "./App.css";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div style={{position:"relative"}}>
      <div className="todo-app">
        <TodoList />
      </div>
      <h4 style={{position:"absolute", right:"5%"}}>Made by Nilesh Pataskar</h4>
    
      </div>
  );
}

export default App;
