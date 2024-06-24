import React from 'react';
import styles from "./Login.module.scss";
import { LoginProps } from "./Login.types.ts";
import { Link, useNavigate } from 'react-router-dom';
import { LoginFormInputs } from './Login.types.ts';
import { login } from "../../auth/login.instance.ts";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({}: LoginProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      console.log(data);
      const { user, token } = await login(data);

      const role = user.roleId[0];
      console.log(`data : ${user}`);
      if (role === 1) {
        navigate('/manufacturer');
      } else if (role === 2) {
        navigate('/distributor');
      }
      localStorage.setItem("token", token);
      toast.success("Login successful!");
    } catch (error) {
      console.error('Login failed', error);
      toast.error('Login failed');
    }
  };

  return (
    <div className={styles.Login}>
      <ToastContainer />
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email :</label>
          <div>
            <input {...register('email', { required: true })} />
            {errors.email && <span className={styles.error}>This field is required</span>}
          </div>
        </div>
        <div>
          <label>Password :</label>
          <div>
            <input type="password" {...register('password', { required: true })} />
            {errors.password && <span className={styles.error}>This field is required</span>}
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
