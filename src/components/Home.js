import { useCallback, useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Humberger from './Humberger';
import SideBar from './Sidebar';
import Todo from './Todo';

import '../styles/home.css';

const Home = () => {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) ?? []);

  const handleEdit = (edited) => {
    setTodos((prev) => prev.map((todo) => (todo.id === edited.id ? edited : todo)));
  };
  const handleAdd = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };
  const handleRemove = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editReferrenced = useCallback(handleEdit, []);
  const addReferrenced = useCallback(handleAdd, []);
  const removeReferrencd = useCallback(handleRemove, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <Humberger />
      <SideBar />
      <div className="todos">
        <h1>todos</h1>
        <AddTodo addItem={addReferrenced} />
        <div className="todos">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              description={todo.description}
              completed={todo.completed}
              editItem={editReferrenced}
              removeItem={removeReferrencd}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
