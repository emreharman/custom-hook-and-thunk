import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, loginFail } from "../redux/actions/loginActions";
import useAuth from "../customHooks/useAuth";

import Loading from "./Loading";
import LoginErrors from "./LoginErrors";

const Login = () => {
    const {result,isAuth}=useAuth()
    const navigate=useNavigate()
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { loginState } = useSelector((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email || !form.password) {
      dispatch(loginFail("Bütün alanlar zorunludur"))
      return;
    }
    dispatch(login(form));
  };
  if(result && isAuth){
    navigate("/")
  }
  return (
    <div>
      {loginState.start && <Loading />}
      {loginState.fail && <LoginErrors />}
      <Header />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="email"
          />
        </div>
        <div>
          <input
            value={form.pasword}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
