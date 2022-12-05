import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import add from '../media/add.png';

const AddTodo = ({ addItem }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addItem({
      id: uuidv4(),
      description: todo,
      completed: false,
    });
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        className="add-input"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="add-btn">
        <img src={add} alt="add new item" />
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default AddTodo;
