import styles from "./Login.module.scss";
import { LoginProps } from "./Login.types.ts";
import { Link, useNavigate } from 'react-router-dom';
import { LoginFormInputs } from './Login.types.ts'
import { login } from "../../auth/login.instance.ts";
import { useForm } from "react-hook-form";
// import {LoginResponse} from '../../auth/login.instance.ts'
const Login = ({}: LoginProps) => {
//  console.log(`hey`)
 const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
 const navigate = useNavigate();
 
 const onSubmit = async (data: LoginFormInputs) => {
   try {
    console.log(data);
    
     const response = await login(data);
    //  console.log(`heeeeeey`)
        console.log(`data : ${response.user}`);
        if (response.user.roleId[0] === 1 ) {
          navigate('/manufacturer');
          {
            <Link to="/manufacturer"></Link>
          }
        } else if (response.roleId[0] === 2 ) {
          navigate('/distributor');
          {
            <Link to="/distributor"></Link>
          }
        }
        localStorage.setItem("token", response.data.user.accessToken);
        alert("login successful!");
       
      } catch (error) {
        console.error('Login failed', error);
        alert('Login failed');
      }
    };
  
    return (
      <div className={styles.Login}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email :</label>
            <div>
            <input {...register('email', { required: true })} />
            {errors.email && <span>This field is required</span>}
            </div>
          
          </div>
          <div>
            <label>Password :</label>
            <div>
            <input type="password" {...register('password', { required: true })} />
            {errors.password && <span>This field is required</span>}
            </div>
            
          </div>
          <button type="submit">Login
          </button>
        </form>
      </div>
    );
  };
  


export default Login;
