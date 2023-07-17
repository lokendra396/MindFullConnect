import React from "react";

const Footer = () => {
  let footerStyle = {
    backgroundColor: "#092338",
    color: "white",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
    fontFamily: '"Baloo Bhai 2","Poppins",sans-serif',
    borderTop: "1px solid white",
  };
  return (
    <>
      <section className="footer" style={footerStyle}>
        ∞ copyright@2023
      </section>
    </>
  );
};

export default Footer;
