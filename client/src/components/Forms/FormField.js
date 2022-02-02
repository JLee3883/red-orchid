import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import './FormField.css'

const FormField = (props) => {
  return (<div>
    <input type="text" placeholder={props.label}/>
  </div>);
};

export default FormField;
