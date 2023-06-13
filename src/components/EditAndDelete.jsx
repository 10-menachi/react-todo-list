// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { AiFillEdit } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';

const EditAndDelete = ({
  setEditing, editing, editTodo, todo, deleteTodo,
}) => (
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
);

EditAndDelete.propTypes = {
  setEditing: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  editTodo: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default EditAndDelete;
