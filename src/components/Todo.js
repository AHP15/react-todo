import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import remove from '../media/remove.png';

// eslint-disable-next-line object-curly-newline
const Todo = ({ id, description, completed, editItem, removeItem }) => {
  const [edited, setEdited] = useState(() => ({ id, description, completed }));
  const [item, setItem] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(true);
  };

  useEffect(() => {
    editItem(edited);
  }, [edited, edited.completed, edited.description, editItem]);

  return (
    <div>
      {item ? (
        <div onDoubleClick={() => setItem(false)} className="todo-item">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setEdited((prev) => ({ ...prev, completed: !prev.completed }))}
          />
          <p className={completed ? 'completed' : ''}>{description}</p>
          <button type="button" onClick={() => removeItem(id)}>
            <img src={remove} alt="remove task" />
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="edit-form">
          <input
            type="text"
            value={description}
            onChange={(e) => setEdited((prev) => ({ ...prev, description: e.target.value }))}
          />
          <button type="submit" hidden>edit</button>
        </form>
      )}
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  editItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};
export default Todo;
