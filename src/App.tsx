// import Card, { CardVariant } from "./components/Card";
import { useState, useEffect, use } from "react";
// import UserList from "./components/UserList";
// import List from "./components/List";
// import UserItem from "./components/UserItem";
// import TodoItem from "./components/TodoItem";
import { IUser, ITodo } from "./types/types";
import EventExample from "./components/EventExample";
import './App.css';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json))
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => response.json())
      .then(json => setTodos(json))
  }, []);


  return (
    <div className="App">
      <EventExample />
      {/*<Card onClickFunc={() => console.log("Я функция")} variant={CardVariant.outlined} width="200px" height="200px">
        <button>Кнопка</button>
      </Card>
       <UserList users={users} /> 
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} /> */}
      
    </div>
  );
}

export default App;

// <IUser> - generic