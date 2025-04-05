import { useNavigate } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewCatalogClick = () => {
    navigate("/catalog");
  };

  return (
    <div className={s.homePage}>
      <h1 className={s.title}>Find your perfect rental car</h1>
      <p className={s.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <button className={s.button} onClick={handleViewCatalogClick}>
        View Catalog
      </button>
    </div>
  );
};

export default HomePage;
