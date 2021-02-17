import React from "react";
import classes from "./clouds.module.css";

const UpClouds = () => {
  return (
    <div>
      <div className={classes.clouds__up}></div>
    </div>
  );
};
const DownClouds = () => {
  return (
    <div>
      <div className={classes.clouds__down}></div>
    </div>
  );
};

export { UpClouds, DownClouds };
