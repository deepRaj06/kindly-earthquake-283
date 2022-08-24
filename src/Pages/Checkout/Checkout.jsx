import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import style from'./chekout.module.css'

const Checkout = () => {
  return (
    <div>
      <div className="main">
        <div>
          <div className={style.one}>
          <div className="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div className="card-header">Header</div>
  <div className="card-body">
    <h5 className="card-title">Primary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
          </div>
          <div className="two"></div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Checkout;
