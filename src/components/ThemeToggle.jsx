import useCalculatorStore from "../store/useCalculatorStore";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useCalculatorStore();

  return (
    <button onClick={toggleDarkMode} className="p-2 bg-gray-600 text-white rounded-md">
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
