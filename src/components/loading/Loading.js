import React from "react";
import PropTypes from "prop-types";

import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.loading}>
      <div className={classes.spinner}></div>
    </div>
  );
};

Loading.propTypes = {
  loadingClass: PropTypes.string,
};

export default Loading;
