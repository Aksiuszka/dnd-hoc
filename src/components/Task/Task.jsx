import { todosActions } from '../../store/slices/todos';

function Task({ task, dispatch, ...rest }) {
  console.log(dispatch);
  return (
    <li {...rest}>
      <p>{task.name}</p>
      <button onClick={() => dispatch(todosActions.removeTodo(task.id))}> x </button>
      {/*metoda toggletodo to actioncreator i zwraca nam action object, w ktorym wartosc payloadu bd rowna przekazanemu  argumentowi, ma on payload i type */}
    </li>
  );
}

export default Task;
