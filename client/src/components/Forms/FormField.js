import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import './FormField.css'

const FormField = ({isMultiLine, label, change}) => {
  return (<div>
    {!isMultiLine && <input name={label.toLowerCase()}onChange={change} type="text" placeholder={label}/>}
    {isMultiLine && <textarea rows="3" placeholder={label}/>}
  </div>);
};


export default FormField;
