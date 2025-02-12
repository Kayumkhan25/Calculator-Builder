import { Droppable } from "react-beautiful-dnd";
import DraggableButton from "./DraggableButton";
import useCalculatorStore from "../store/useCalculatorStore";

const DropZone = () => {
  const { layout } = useCalculatorStore();

  return (
    <Droppable droppableId="dropzone">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="p-4 min-h-[200px] border-dashed border-2 rounded-lg"
        >
          {layout.map((btn, index) => (
            <DraggableButton key={index} id={btn} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DropZone;
