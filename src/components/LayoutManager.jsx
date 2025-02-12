import { useEffect } from "react";
import useCalculatorStore from "../store/useCalculatorStore";

const LayoutManager = () => {
  const { layout, undo } = useCalculatorStore();

  useEffect(() => {
    localStorage.setItem("layout", JSON.stringify(layout));
  }, [layout]);

  return (
    <div className="flex gap-4 mt-4">
      <button onClick={undo} className="p-2 bg-red-500 text-white rounded-md">Undo</button>
    </div>
  );
};

export default LayoutManager;
