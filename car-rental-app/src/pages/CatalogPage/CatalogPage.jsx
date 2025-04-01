import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          "https://car-rental-api.goit.global/cars"
        );
        if (response.data && Array.isArray(response.data.cars)) {
          setCars(response.data.cars);
        } else {
          setError(new Error("non-array data"));
        }
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul className={s.listСar}>
        {cars.map((car) => (
          <li key={car.id}>
            <img
              src={car.img}
              alt={`${car.brand} ${car.model}`}
              style={{ maxWidth: "300px" }}
            />
            <h2>
              {car.brand} {car.model}
            </h2>
            <p>{car.rentalPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CatalogPage;
