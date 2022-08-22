import { todosActions } from '../../store/slices/todos';

export default function withDrop(Component) {
  const WithDrop = ({ items, dispatch, ...rest }) => {
    const handleDragOver = e => {
      console.log('i drag over');
      if (!e.dataTransfer) return;
      e.preventDefault();
    };
    const handleDrop = e => {
      console.log('im dropping');
      const dropId = e.dataTransfer.getData('text/plain'); // pobiera z eventu nasze id

      if (items.find(({ id }) => id === dropId)) return;
      dispatch(todosActions.toggleTodo(dropId));
    };
    return (
      <Component
        {...{
          ...rest,
          dispatch: dispatch,
          onDragOver: handleDragOver,
          onDrop: handleDrop,
          draggable: false,
        }}
      />
    );
  };
  return WithDrop;
}
