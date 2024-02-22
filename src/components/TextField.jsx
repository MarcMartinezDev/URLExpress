import { useState } from "react";
import { context } from "../App";
import { useContext } from "react";

const TextField = ({ textFieldRef, placeholderTextField, legendTextField }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { setError } = useContext(context);

  return (
    <fieldset
      className={`w-full border-2 bg-transparent relative text-lg border-gray-600 h-14 rounded-md  ${
        isFocused ? "fieldset-focused" : null
      }`}
    >
      <legend className={`bg-gray-800 text-sm px-2 hidden ${isFocused ? "legend-focused" : null}`}>
        {legendTextField}
      </legend>
      <input
        className="bg-transparent outline-none w-full transition-all h-full px-4"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={e => {
          if (e.target.textContent == null) setError("Please enter a valid URL");
          else setError(null);
        }}
        type="text"
        placeholder={isFocused ? "" : placeholderTextField}
        ref={textFieldRef}
      ></input>
    </fieldset>
  );
};

export default TextField;
