import { DragDropContext } from "react-beautiful-dnd";
import useCalculatorStore from "./store/useCalculatorStore";
import DropZone from "./components/DropZone";
import Calculator from "./components/Calculator";
import ThemeToggle from "./components/ThemeToggle";
import LayoutManager from "./components/LayoutManager";
import "./App.css";

const App = () => {
  const { addButton } = useCalculatorStore();

  const onDragEnd = (result) => {
    if (!result.destination) return;
    addButton(result.draggableId);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
      <ThemeToggle />
      <DragDropContext onDragEnd={onDragEnd}>
        <DropZone />
      </DragDropContext>
      <Calculator />
      <LayoutManager />
    </div>
  );
};

export default App;
