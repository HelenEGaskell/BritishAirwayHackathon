import LoginHero from "../../components/LoginHero/LoginHero";
import { useState } from "react";

import Header from "../../components/Header/Header";

const Login = () => {
  const [name, setName] = useState("");

  const changeName = (newName) => {
    setName(newName);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <LoginHero submitForm={submitForm} name={name} changeName={changeName} />
    </>
  );
};

export default Login;
