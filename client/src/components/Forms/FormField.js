
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import "./FormField.css";


const FormField = ({ isMultiLine, label, change, value }) => {
  return (
    <div>
      {!isMultiLine && (
        <input
          value={value}
          name={label.toLowerCase()}
          onChange={change}
          type="text"
          placeholder={label}
        />
      )}
      {isMultiLine && (
        <textarea
          value={value}
          rows="3"
          placeholder={label}
          onChance={change}
        />
      )}
    </div>
  );
};

export default FormField;
