import { useState } from "react";
import { context } from "../App";
import { useContext } from "react";

const TextField = ({ textFieldRef, placeholderTextField }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { error, setError } = useContext(context);

  return (
    <fieldset
      className={`${
        isFocused ? "border-purple-600 shadow-md transition-all" : ""
      } relative bg-transparent border-2 rounded-md text-lg border-gray-600 outline-none w-full p-2 placeholder:text-sm transition-all`}
    >
      <legend
        className={`${
          isFocused ? "inline absolute top-[-12px]" : "hidden"
        } bg-gray-800 h-fit text-sm px-2 transition-all`}
      >
        {placeholderTextField}
      </legend>
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={e => {
          if (e.target.textContent == null)
            setError("Please enter a valid URL");
          else setError(null);
        }}
        className="bg-transparent outline-none w-full transition-all"
        type="text"
        placeholder={isFocused ? "" : placeholderTextField}
        ref={textFieldRef}
      ></input>
    </fieldset>
  );
};

export default TextField;
