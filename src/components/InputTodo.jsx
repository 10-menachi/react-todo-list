// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { useState } from 'react';
import { TiPlus } from 'react-icons/ti';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
    }
  };

  return (
    <>
      <form
        className="form-container"
        onSubmit={(e) => {
          handleSubmit(e);
          e.target.reset();
        }}
      >
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <button aria-label="Delete" type="submit" className="input-submit"><TiPlus /></button>
      </form>
    </>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
