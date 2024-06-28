import Login from "../../components/Login/Login.tsx";
import NavBar from "../../layout/NavBar/NavBar.tsx";
import Distributor from "../Distributor/Distributor.tsx";
import Manufacturer from "../Manufacturer/Manufacturer.tsx";
import styles from "./HomePage.module.scss";
import { HomePageProps } from "./HomePage.types.ts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const HomePage = ({}: HomePageProps) => {
  return (
    <>
      <NavBar />

      <div className={styles.Body}>
        <div className={styles.Text}>
          <h1>SupplySync</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            deleniti minima tenetur est expedita corporis numquam deserunt
            repellat molestiae nulla nemo laboriosam odio fugit sint excepturi
            aliquid ratione impedit possimus! Ab quam nesciunt iste cum itaque
            quo vero aut quisquam laborum voluptatem voluptatum nostrum, rem qui
            harum vitae! Obcaecati, perspiciatis.
          </p>
          <p>Lorem</p>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            deleniti minima tenetur est expedita corporis numquam deserunt
            repellat molestiae nulla nemo laboriosam odio fugit sint excepturi
            aliquid ratione impedit possimus! Ab quam nesciunt iste cum itaque
            quo vero aut quisquam laborum voluptatem voluptatum nostrum, rem qui
            harum vitae! Obcaecati, perspiciatis.
          </p>
        </div>
        <div>
          <Login />
        </div>
      </div>
    </>
  );
};

export default HomePage;
