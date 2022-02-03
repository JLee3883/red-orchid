import React, { useState }  from 'react';
import './FormField.css'

const FormField = ({isMultiLine, label, change}) => {
  return (<div>
    {!isMultiLine && <input name={label.toLowerCase()}onChange={change} type="text" placeholder={label}/>}
    {isMultiLine && <textarea rows="3" placeholder={label}/>}
  </div>);
};


export default FormField;
