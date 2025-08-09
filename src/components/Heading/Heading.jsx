import React from "react";

const Heading = ({ Variant, Txt, className }) => {
  return <Variant className={className}>{Txt}</Variant>;
};

export default Heading;
