import React from "react";
import "../Style/style.css";

const Cart = ({ NewData, OnButtonChange }) => {
  return (
    <>
      <div className="col-sm-4 mt-4 ">
        <div className="card">
          <img
            src={NewData.Img}
            id="Image"
            className="card-img-top img img-fluid"
            alt="..."
          />
          <hr />
          <div className="card-body">
            <p className="card-text h6 fw-bold text-center">
              ProductName: {NewData.Title}
            </p>
            <p className="text-center h6 mt-2">{NewData.Price}</p>
            <div className="text-center">
              <button
                id="buttonVal"
                className="btn btn-dark btn-sm"
                onClick={() => {
                  OnButtonChange(NewData.id);
                }}
              >
                {NewData.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
