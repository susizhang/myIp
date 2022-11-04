import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./MyIp.css";
import { MyMap } from "./MyMap";
import { Countries } from "./Countries";

export const MyIp = () => {
  const [myIp, setMyIp] = useState([]);

  const { REACT_APP_GEOIPIFY_URL, REACT_APP_GEOIPIFY_APIKEY } = process.env;

  // console.log(REACT_APP_GEOIPIFY_URL);

  const getIp = useCallback(async () => {
    try {
      await axios
        .get(
          ` ${REACT_APP_GEOIPIFY_URL}/country,city?apiKey=${REACT_APP_GEOIPIFY_APIKEY}`
        )
        .then((res) => {
          // console.log(res);
          setMyIp([
            res.data.ip,
            res.data.location.region,
            res.data.location.country,
            // res.data.location.timezone,
          ]);
        });
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    getIp();
  }, [getIp]);

  const region = myIp[1];

  return (
    <>
      <div>
        <MyMap />
      </div>
      <div>
        <img src="https://flagcdn.com/w320/de.png" alt="flag" />
      </div>
      <div className="myIp">
        <h1>Your IP address is {myIp[0]} </h1>
        <p>
          You are currently located in {region} , {myIp[2]}
        </p>
        <hr />
        <Countries region={region} />
      </div>
    </>
  );
};
