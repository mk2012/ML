import React, { useEffect, useState } from "react";
import axios from "axios";

const Ml = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8082/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <pre>{data}</pre>
    </div>
  );
};

export default Ml;
