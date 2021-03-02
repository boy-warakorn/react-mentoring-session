import React from "react";
import PropTypes from "prop-types";

export const ResultItem = ({ multiBase, multiplyNum }) => {
  return (
    <li>{`${multiBase} x ${multiplyNum} = ${multiBase * multiplyNum}`}</li>
  );
};

ResultItem.propTypes = {
  multiBase: PropTypes.number.isRequired,
  multiplyNum: PropTypes.number.isRequired,
};
