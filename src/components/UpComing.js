import React, { useEffect, useState } from "react";
import Card from "./Card";

let API_KEY = "f5baf8c74c7d5f00a242c165979d0913";
let base_url = "https://api.themoviedb.org/3";
let sub_url = "/movie/upcoming?api_key=";
let url = base_url + sub_url + API_KEY;

const Upcoming = () => {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setUrl(data.results);
      });
  }, [url_set]);

  return (
    <>
      <div class="container">
        <div class="container h-100">
          <div class="d-flex justify-content-md-center align-items-center">
            <h3>Upcoming Movies</h3>
          </div>
        </div>

        <div className="row">
          {movieData.length === 0 ? (
            <p>Not Found</p>
          ) : (
            movieData.map((res, pos) => {
              return <Card info={res} key={pos} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Upcoming;
