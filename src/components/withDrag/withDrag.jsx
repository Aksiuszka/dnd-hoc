export default function withDrag(Component) {
  const WithDrag = ({ id, ...rest }) => {
    const handleDragStart = e => {
      //datatransfer setuje dane, ktore bedziemy przekazywac i przekazujemy 2 paramsy : 'action type' i id
      console.log('I drag');
      e.dataTransfer.setData('text/plain', id);
      e.dataTransfer.effectAllowed = 'move';
    };
    return <Component {...{ ...rest, onDragStart: handleDragStart, draggable: true }} />;
  };
  return WithDrag;
}
