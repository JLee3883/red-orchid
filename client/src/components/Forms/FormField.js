import React from 'react';
import './FormField.css'

const FormField = (props) => {
  return (<div>
    <input type="text" placeholder={props.label}/>
  </div>);
};

export default FormField;
