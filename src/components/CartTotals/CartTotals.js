import React from "react";
import "./CartTotals.scss";

const CartTotals = ({ cartTotals }) => {
  if (!cartTotals) return null;

  const renderTotalLineItem = (label, value) => {
    return (
      <p className="total-line row">
        <span className="col s2 m1 number right">{value}</span>
        <span className="col s10 m3 right">{label}</span>
      </p>
    );
  };

  const { itemsCount, subtotal = 0, tax = 0, grandTotal = 0 } = cartTotals;
  return (
    <div className="cart-totals-container">
      <div className="right col s12">
        {renderTotalLineItem("Items Count:", itemsCount)}
        {renderTotalLineItem("Purchase Subtotal:", `$${subtotal}`)}
        {renderTotalLineItem("Tax:", `$${tax}`)}
        {renderTotalLineItem("TOTAL:", `$${grandTotal}`)}
      </div>
    </div>
  );
};

export default CartTotals;
