import React from "react";
import { useParams } from "react-router-dom";

const Cat = () => {
  const { id } = useParams();
  const data = {
    "123": {
      title: "Wmoen",
      description: "This is test Description for service 1",
    },
    "121": {
      title: "Men",
      description: "This is test Description for service 2",
    },
    "122": {
        title: "Kids",
        description: "This is test Description for service 2",
      },
  };

  return (
    <div>
      <h2>{data[id].title}</h2>
      <p>{data[id].description}</p>
    </div>
  );
};

export default Cat;
