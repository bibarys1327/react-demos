import React, { useId } from "react";

const UniqueID = () => {
  const id = useId();
  const _id2 = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />

      <br />

      <label htmlFor={`${id}-password`}>Password</label>
      <input type="password" id={`${id}-password`} />
    </div>
  );
};

export default UniqueID;
