<<<<<<< HEAD
=======

>>>>>>> cbb248798fda5c7090041633e9f5c8d4c27e3ec4
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import "./FormField.css";
<<<<<<< HEAD
=======

>>>>>>> cbb248798fda5c7090041633e9f5c8d4c27e3ec4

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
