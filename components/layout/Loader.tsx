import React from "react";
import { ImSpinner9 } from "react-icons/im";

export default function Loader() {
  return (
    <div className="absolute z-100 inset-0 flex justify-center items-center">
      <ImSpinner9 className="animate-spin size-10" />
    </div>
  );
}
