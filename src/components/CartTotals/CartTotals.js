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

  const formatCurrencyDisplay = (numValue = 0) => {
    // For now, hardcoded to USD format, later this can be refactored into a config
    return numValue.toLocaleString("en-us", {
      style: "currency",
      currency: "USD"
    });
  };

  const { itemsCount, subtotal = 0, tax = 0, grandTotal = 0 } = cartTotals;
  return (
    <div className="cart-totals-container">
      <div className="right col s12">
        {renderTotalLineItem("Items Count:", itemsCount)}
        {renderTotalLineItem(
          "Purchase Subtotal:",
          `${formatCurrencyDisplay(subtotal)}`
        )}
        {renderTotalLineItem("Tax:", `${formatCurrencyDisplay(tax)}`)}
        {renderTotalLineItem("TOTAL:", `${formatCurrencyDisplay(grandTotal)}`)}
      </div>
    </div>
  );
};

export default CartTotals;
