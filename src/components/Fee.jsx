import React from "react";
import "./Fee.css";

const Fee = () => {
  const fees = [
    { name: "Tuition Fee", amount: 150000 },
    { name: "Hostel Fee", amount: 180000 },
    { name: "AdmissionFee ", amount: 10000 }
  ];

  const total = fees.reduce((sum, f) => sum + f.amount, 0);

  return (
    <div className="fees-page">
      <h1 className="page-title">Fees</h1>
      <table className="fees-table">
        <tbody>
          {fees.map((fee, index) => (
            <tr key={index}>
              <td>{fee.name}</td>
              <td>{fee.amount}/-</td>
            </tr>
          ))}
          <tr className="total-row">
            <td>Total</td>
            <td>{total}/-</td>
          </tr>
        </tbody>
      </table>
      <div className="payment-status">
        Payment Status: <span className="status-pending">Pending</span>
      </div>
      <button className="btn btn-pay">Pay Online</button>
      <div className="notices">
        <h2>Notices</h2>
        <ul>
          <li>Last date to pay fees: 28th Feb 2026</li>
          <li>Late fee will be charged after due date</li>
        </ul>
      </div>
    </div>
  );
};

export default Fee;