import React from "react";
import FormField from "../../components/Forms/FormField";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <FormField label="username" />
      <FormField label="password" />
    </div>
  );
};

export default Login;
