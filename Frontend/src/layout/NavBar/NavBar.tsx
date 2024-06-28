import styles from "./NavBar.module.scss";
import { NavBarProps } from "./NavBar.types.ts";
import logo from "../../assets/favicon.png";
import { useNavigate } from "react-router-dom";
import { logout } from "../../auth/login.instance.ts";
const NavBar = ({}: NavBarProps) => {
  const navigate = useNavigate();
  const handleLogout=()=>{
    {
      try{
        logout();
        navigate("/");
      }
      catch(error:any){
        console.log("")
      }
     
    }
  }
  return (
    <div className={styles.Flex}>
      <div className={styles.NavBar}>
        <span>
          <img src={logo} alt="" />
        </span>
        <h2 className={styles.NavHeading}>SupplySync</h2>
      </div>
      <div>
        <button onClick={()=>handleLogout()}>Logout</button>
      </div>
      
    </div>
  );
};

export default NavBar;
