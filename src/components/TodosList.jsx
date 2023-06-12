// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React from 'react';
import Todo from './Todo';

const TodosList = ({
  todos, setTodos, deleteTodo, editTodo,
}) => (
  <div style={{ marginTop: '2rem' }}>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    ))}
  </div>
);

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodosList;
