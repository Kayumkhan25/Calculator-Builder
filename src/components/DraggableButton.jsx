import { Draggable } from "react-beautiful-dnd";

const DraggableButton = ({ id, index }) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <button
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="p-4 bg-blue-500 text-white rounded-md shadow-md"
      >
        {id}
      </button>
    )}
  </Draggable>
);

export default DraggableButton;
