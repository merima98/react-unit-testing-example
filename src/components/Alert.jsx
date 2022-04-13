import { useState } from "react";

const Alert = () => {
  return (
    <div>
      <button id="button">Click to open alert</button>
      <input aria-label="alert-input" placeholder="Alert component input" />
    </div>
  );
};

export default Alert;
