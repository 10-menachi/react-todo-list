/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 } from 'uuid';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: true,
    },
  ]);
  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: parseInt(v4(), 10),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const editTodo = (newTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: newTitle }; // Create a new object with the updated title
        }
        return todo;
      }),
    );
  };

  return (
    <Routes>
      <Route path="/add-todo" element={<InputTodo todos={todos} addTodoItem={addTodoItem} />} />
      <Route path="/list-todo" element={<TodosList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} editTodo={editTodo} />} />
    </Routes>
  );
};

export default TodosLogic;
