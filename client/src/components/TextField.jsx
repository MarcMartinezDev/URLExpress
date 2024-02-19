import { useState } from "react";
import { context } from "../App";
import { useContext } from "react";

const TextField = ({ textFieldRef, placeholderTextField, legendTextField }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { setError } = useContext(context);

  return (
    <fieldset className={isFocused ? "fieldset-focused" : "fieldset-unfocused"}>
      <legend className={isFocused ? "legend-focused" : "legend-unfocused"}>{legendTextField}</legend>
      <input
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
