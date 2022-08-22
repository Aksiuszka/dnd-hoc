import { List } from './styled';
import Task from '../Task';
import withDrag from '../withDrag';

function TaskList({ todos, dispatch, ...rest }) {
  return (
    <List {...rest}>
      {!!todos.length &&
        todos.map(task => {
          const { id } = task;
          const TaskWithDrag = withDrag(Task);
          return <TaskWithDrag key={id} id={id} task={task} dispatch={dispatch} />;
        })}
    </List>
  );
}

export default TaskList;
