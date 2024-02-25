import React, { useState } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";
const HomePage = () => {
  let [data, setdata] = useState([]);
  const auth = "dIp3MIaaKWCk9rasyDGK5DP7UEHOxwaiFZtRk7jKpeq5K51sTXFJcryo";
  const url = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const search = async () => {
    let result = await axios.get(url, { headers: { Authorization: auth } });
    console.log(result);
    setdata(result.data.photos)
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={search} />
      <Picture />
    </div>
  );
};

export default HomePage;
