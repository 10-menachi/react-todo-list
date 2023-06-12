// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';

const Todo = ({
  todo, setTodos, deleteTodo, editTodo,
}) => {
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const [editing, setEditing] = useState(false);

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <div className="item">
      <div key={todo.id} className="content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChange(todo.id)}
        />
        <span style={viewMode}>{todo.title}</span>
        <input
          type="text"
          onChange={(e) => editTodo(e.target.value, todo.id)}
          style={editMode}
          className="text-input"
        />
        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              setEditing(!editing);
              editTodo(todo.id);
            }}
          >
            <AiFillEdit />
          </button>
          <button type="button" onClick={() => deleteTodo(todo.id)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default Todo;
