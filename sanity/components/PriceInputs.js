import React from "react";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

function createPatchFrom(value) {
  return PatchEvent.from(value === "" ? unset() : set(Number(value)));
}

const PriceInput = (props) => {
  const { value, type, onChange, inputComponent } = props;
  let formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value / 100);

  return (
    <>
      <h5>
        {type.title}: {formattedValue === "$NaN" ? "" : formattedValue}
      </h5>
      <input
        type={type.name}
        value={value}
        onChange={(e) => onChange(createPatchFrom(e.target.value))}
        ref={inputComponent}
      ></input>
    </>
  );
};

export default PriceInput;
