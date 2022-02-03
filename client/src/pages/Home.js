import FormField from "../components/Forms/FormField";
import { useMutation } from "@apollo/client";
import IconCard from "../components/dashboard/IconCard/IconCard";
import NavBar from "../components/navbar/NavBar";
import BlogCard from "../components/BlogCard/BlogCard";
import { useState } from "react";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Home = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  console.log(formState);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: formState,
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <NavBar />
      <BlogCard />
      {/* <FormField change={handleChange} label="Email" />
      <FormField change={handleChange} label="Password" />
      <button onClick={handleFormSubmit}>Submit</button> */}
    </div>
  );
};

export default Home;
