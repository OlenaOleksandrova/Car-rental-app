import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <h1 className={s.title}>Find your perfect rental car</h1>
      <p className={s.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <button className={s.button}>View Catalog</button>
    </div>
  );
};

export default HomePage;
