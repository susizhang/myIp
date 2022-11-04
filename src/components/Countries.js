import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const url = "https://restcountries.com/v3.1/name/germany";

export const Countries = ({ region }) => {
  // console.log(region);
  const [myCountry, setMyCountry] = useState("");

  const getMyCountry = useCallback(async () => {
    try {
      await axios.get(url).then((res) => {
        // console.log(res.data);
        setMyCountry(res.data);
      });
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    getMyCountry();
  }, [getMyCountry]);

  // console.log(myCountry);
  const [myCountryGerman] = myCountry;
  console.log(myCountryGerman);
  // const flagUrl = myCountryGerman.flags.png;
  // const timezone = myCountryGerman.timezones;

  return (
    <>
      <div className="countries">
        <div>
          icon
          <div>We are the </div>
        </div>
        <div>
          icon
          <div>Your local time is</div>
        </div>
      </div>
    </>
  );
};

// const{name,region,flag} = country;
// flag, timezone
