import { useState } from "react";
import useCalculatorStore from "../store/useCalculatorStore";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const { layout } = useCalculatorStore();

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setExpression(eval(expression).toString());
      } catch {
        setExpression("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
      <div className="p-2 bg-white dark:bg-black text-xl">{expression}</div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {layout.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn)}
            className="p-4 bg-blue-600 text-white rounded-lg"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
