import { useState } from "react";
import { context } from "../App";
import { useContext } from "react";

const TextField = ({ textFieldRef, placeholderTextField, legendTextField }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { setError } = useContext(context);

  return (
    <fieldset
      className={`${
        isFocused ? "border-purple-600 shadow-md" : ""
      } relative bg-transparent border-2 text-lg border-gray-600 outline-none w-full p-2 placeholder:text-sm`}
    >
      <legend className={`${isFocused ? "inline absolute top-[-12px]" : "hidden"} bg-gray-800 h-fit text-sm px-2`}>
        {legendTextField}
      </legend>
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={e => {
          if (e.target.textContent == null) setError("Please enter a valid URL");
          else setError(null);
        }}
        className="bg-transparent outline-none w-full"
        type="text"
        placeholder={isFocused ? "" : placeholderTextField}
        ref={textFieldRef}
      ></input>
    </fieldset>
  );
};

export default TextField;
