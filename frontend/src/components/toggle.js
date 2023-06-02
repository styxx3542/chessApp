import { useState } from "react";

const Toggle = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChange && onChange(event.target.checked);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={checked}
            onChange={handleChange}
          />
          <div className="block bg-gray-600 w-8 h-5 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition ${
              checked ? "transform translate-x-full bg-green-500" : ""
            }`}
          ></div>
        </div>
        {label && <div className="ml-3 font-medium text-gray-700">{label}</div>}
      </label>
    </div>
  );
};

export default Toggle;
