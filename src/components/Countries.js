import { useState, useEffect, useCallback } from "react";
import axios from "axios";
const url = "https://restcountries.com/v3.1/all";

export const Countries = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = useCallback(async () => {
    try {
      await axios.get(url).then((res) => {
        console.log(res);
        // setCountries([]);
      });
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return <div></div>;
};
