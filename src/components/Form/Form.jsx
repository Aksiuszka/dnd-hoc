import { useState } from 'react';
import { todosActions } from '../../store/slices/todos';

function Form({ dispatch }) {
  const [task, setTask] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask();
    setTask('');
  };
  const addTask = () => {
    dispatch(todosActions.addTodo(task));
  };
  const handleChange = e => {
    console.log('Change ya');
    setTask(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Task</label>
      <input
        value={task}
        type="text"
        placeholder="write ya task dude"
        onChange={handleChange}></input>
      <button>+</button>
    </form>
  );
}

export default Form;
