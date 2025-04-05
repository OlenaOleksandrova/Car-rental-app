import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBrandList, setShowBrandList] = useState(false);
  const [showPriceList, setShowPriceList] = useState(false);
  const [brands, setBrands] = useState([]);

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

    const fetchBrands = async () => {
      try {
        const response = await axios.get(
          "https://car-rental-api.goit.global/brands"
        );
        if (response.data && Array.isArray(response.data)) {
          setBrands(response.data);
        } else {
          setError(new Error("non-array brands data"));
        }
      } catch (err) {
        setError(err);
      }
    };

    fetchCars();
    fetchBrands();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleBrandIconClick = () => {
    setShowBrandList(!showBrandList);
  };

  const handlePriceIconClick = () => {
    setShowPriceList(!showPriceList);
  };

  return (
    <div className={s.sectionCatalog}>
      <div className={s.filter}>
        <div className={s.inputContainer}>
          <input
            type="text"
            placeholder="Choose a brand"
            className={`${s.input} ${s.inputChooseCatalog}`}
          />
          <svg className={s.icon} onClick={handleBrandIconClick}>
            {/* моя SVGіконка бренду */}
          </svg>
          {showBrandList && (
            <ul className={s.list}>
              {brands.map((brand) => (
                <li className={s.itemBrands} key={brand}>
                  {brand}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={s.inputContainer}>
          <input
            type="text"
            placeholder="Choose a price"
            className={`${s.input} ${s.inputChoosePrice}`}
          />
          <svg className={s.icon} onClick={handlePriceIconClick}>
            {/* тут SVGіконка ціни */}
          </svg>
          {showPriceList && (
            <ul className={s.list}>
              <li className={s.itemBrands}>Price 1</li>
              <li>Price 2</li>
              <li>Price 3</li>
              {/* треба додати елементи списку цін поки чорнова заглушка*/}
            </ul>
          )}
        </div>
        <input
          type="number"
          placeholder="From"
          className={`${s.input} ${s.inputFrom}`}
        />

        <input
          type="number"
          placeholder="To"
          className={`${s.input} ${s.inputTo}`}
        />
        <button className={s.searchButton}>Search</button>
      </div>
      <ul className={s.listСar}>
        {cars.map((car) => {
          const addressParts = car.address.split(", ");
          const city = addressParts[addressParts.length - 2];
          const country = addressParts[addressParts.length - 1];
          const rentalCompany = car.rentalCompany;
          const type = car.type;
          const mileage = car.mileage;

          return (
            <li key={car.id} className={s.item}>
              <img
                src={car.img}
                alt={`${car.brand} ${car.model}`}
                className={s.image}
              />
              <div className={s.infoList}>
                <h2 className={s.mainInfo}>
                  <span className={s.carBrand}>{car.brand}</span>{" "}
                  <span className={s.carModel}>{car.model}</span>{" "}
                  <span className={s.carYear}>, {car.year}</span>
                  <p className={s.price}>${car.rentalPrice}</p>
                </h2>
                <div className={s.geoInfo}>
                  <p className={s.company}>
                    {city} | {country} | {rentalCompany} |
                  </p>
                  <p>
                    {type}, {mileage}km
                  </p>
                </div>
              </div>
              <button className={s.readMoreButton}>Read more</button>
            </li>
          );
        })}
      </ul>
      <button className={s.loadMore}>Load more</button>
    </div>
  );
};
export default CatalogPage;
