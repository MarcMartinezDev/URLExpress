import { useState } from "react";

const TextField = ({ textFieldRef, textFieldError, placeholderTextField }) => {
  const [isFocused, setIsFocused] = useState(false);

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
        className="bg-transparent outline-none w-full transition-all"
        type="text"
        placeholder={isFocused ? "" : placeholderTextField}
        ref={textFieldRef}
        error={textFieldError}
      ></input>
    </fieldset>
  );
};

export default TextField;
