import React, { useState } from "react";
import "../Style/Header.css";

const Header = ({ Product }) => {
  let Sum = 0;
  Product.forEach((NewData) => {
    Sum += NewData.Qty;
  });
  return (
    <>
      <div className="container-fluid ">
        <div className="row bg-dark p-2">
          <div className="col-sm-12 d-flex justify-content-between">
            <div>
              <h3 className="text-white-50">SHOPPING</h3>
            </div>
            <div>
              <button
                id="button-icon"
                className="btn btn-info fw-bold btn-lg mt-1"
              >
                CART
                <span
                  id="Badge"
                  className="badge bg-white fw-bolder text-black ms-2"
                >
                  {Sum}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
