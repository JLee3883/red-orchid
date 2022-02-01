import React from 'react';

const FormField = (props) => {
  return (<div>
    <input type="text" placeholder={props.label}/>
  </div>);
};

export default FormField;
