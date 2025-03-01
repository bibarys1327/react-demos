import React, { useContext } from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
  const username = useContext(Data);
  const Age = useContext(Data1);
  return (
    <h1>
      My name is: {username} adm I'm {Age} years old
    </h1>
  );
};

export default ComponentC;
