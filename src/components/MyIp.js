import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./MyIp.css";

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
          console.log(res);
          setMyIp([
            res.data.ip,
            res.data.location.region,
            res.data.location.country,
            res.data.location.timezone,
          ]);
        });
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    getIp();
  }, [getIp]);

  return (
    <div className="myIp">
      <h1>Your IP address is {myIp[0]} </h1>
      <p>
        You are currently located in {myIp[1]} , {myIp[2]}
      </p>
      <hr />
      <div>
        icon
        <div>We are the {myIp[3]}</div>
      </div>
      <div>
        icon
        <div>
          Your local time is{" "}
          {/* {new Date().toLocalString("en-US", { timeZone: myIp[3] })} */}
        </div>
      </div>
    </div>
  );
};
