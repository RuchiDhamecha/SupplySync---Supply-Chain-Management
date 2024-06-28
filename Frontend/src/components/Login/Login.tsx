import React from 'react';
import styles from "./Login.module.scss";
import { LoginProps } from "./Login.types.ts";
import { useNavigate } from 'react-router-dom';
import { login } from "../../auth/login.instance.ts";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address").trim(),
  password: z.string().min(1, "Password is required")
})

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = ({}: LoginProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema)
  });
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      console.log(data);
      const { user, token } = await login(data);
   
      const role = user.roleId[0];
      localStorage.setItem('roleId', role);
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
            <input {...register('email')} />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>
        </div>
        <div>
          <label>Password :</label>
          <div>
            <input type="password" {...register('password')} />
            {errors.password && <span className={styles.error}>{errors.password.message}</span>}
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
