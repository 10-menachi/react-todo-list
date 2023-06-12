import NavBar from './NavBar';
import Title from './Title';
import TodosLogic from './TodosLogic';

const TodoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <NavBar />
      <Title />
      <TodosLogic />
    </div>
  </div>
);
export default TodoApp;
