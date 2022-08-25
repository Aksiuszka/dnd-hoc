import { useSelector, useDispatch } from 'react-redux';
import Form from './components/Form';
import Modal from './components/Modal';
import Spinner from './components/Spinner';
import { TaskGroup } from './components/styled';
import TaskList from './components/TaskList';
import withDrop from './components/withDrop';

function App() {
  const todos = useSelector(state => state.todos); // reach do stora i pobiera nam state ze storu
  const dispatch = useDispatch();
  const ListWithDrop = withDrop(TaskList);
  const completedTodos = todos.filter(({ isCompleted }) => isCompleted === true);
  const pendingTodos = todos.filter(({ isCompleted }) => isCompleted === false);
  return (
    <div className="App">
      <Form dispatch={dispatch} />
      <TaskGroup>
        <h2>Pending</h2>
        <ListWithDrop dispatch={dispatch} items={pendingTodos} todos={pendingTodos} />
      </TaskGroup>
      <TaskGroup>
        <h2>Done</h2>
        <ListWithDrop dispatch={dispatch} items={completedTodos} todos={completedTodos} />
      </TaskGroup>
      <Modal><Spinner/></Modal>
    </div>
  );
}

export default App;
