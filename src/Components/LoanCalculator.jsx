import React, { useState } from 'react';
import './LoanCalculator.css';

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [termYears, setTermYears] = useState(5);
  const [emi, setEmi] = useState(null);
  const [currency, setCurrency] = useState('USD');
  const [showTable, setShowTable] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseInt(termYears);
    const months = years * 12;
    const monthlyRate = annualRate / 12 / 100;

    // EMI formula
    const emiValue = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                     (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(emiValue.toFixed(2));
    setShowTable(true);

    // Generate amortization schedule
    let balance = principal;
    const newSchedule = [];

    for (let i = 1; i <= months; i++) {
      const interest = balance * monthlyRate;
      const principalPaid = emiValue - interest;
      balance -= principalPaid;

      newSchedule.push({
        month: i,
        principal: principalPaid.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : '0.00'
      });
    }

    setSchedule(newSchedule);
  };

  const resetTable = () => {
    setEmi(null);
    setShowTable(false);
    setSchedule([]);
  };

  return (
    <div className="main" style={{ padding: '1rem 3rem' }}>
      <h1>Loan Calculator Dashboard</h1>

      <div className="input-group">
  <div>
    <label>Loan Amount</label><br />
    <input
      type="text"
      className="input-box"
      value={loanAmount}
      onChange={(e) => setLoanAmount(Number(e.target.value))}
    />
  </div>
  <div>
    <label>Interest Rate (%)</label><br />
    <input
      type="text"
      className="input-box"
      value={interestRate}
      onChange={(e) => setInterestRate(Number(e.target.value))}
    />
  </div>
  <div>
    <label>Term (Years)</label><br />
    <input
      type="text"
      className="input-box"
      value={termYears}
      onChange={(e) => setTermYears(Number(e.target.value))}
    />
  </div>
</div>


      <button className="calculate-btn" onClick={calculateEMI}>Calculate</button>

      {showTable && (
        <>
          <div className="emi-info">
            <h3>Monthly EMI: ${emi}</h3>
            <div className="cur-res">
              <div className="currency-selector">
                {/* Custom Currency Dropdown */}
<div className="custom-dropdown">
  <label>Currency</label>
  <div className="dropdown-container" onClick={() => setShowDropdown(!showDropdown)}>
    {currency}
    <span className="arrow">{showDropdown ? '▲' : '▼'}</span>
  </div>
  {showDropdown && (
    <ul className="dropdown-options">
      {['USD', 'EUR', 'INR', 'GBP', 'JPY', 'AUD', 'CAD'].map((cur) => (
        <li
          key={cur}
          onClick={() => {
            setCurrency(cur);
            setShowDropdown(false);
          }}
        >
          {cur}
        </li>
      ))}
    </ul>
  )}
</div>

              </div>
              <button className="reset-btn" onClick={resetTable}>RESET TABLE</button>
            </div>
          </div>

          <div className="table-wrapper">
  <h3>Amortization Schedule ({currency})</h3>
  <table className="scroll-table">
    <thead>
      <tr>
        <th>Month</th>
        <th>Principal</th>
        <th>Interest</th>
        <th>Remaining Balance</th>
      </tr>
    </thead>
  </table>

  <div className="scroll-body">
    <table className="scroll-table">
      <tbody>
        {schedule.map((row, index) => (
          <tr key={index}>
            <td>{row.month}</td>
            <td>{row.principal} {currency}</td>
            <td>{row.interest} {currency}</td>
            <td>{row.balance} {currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </>
      )}
    </div>
  );
}

export default LoanCalculator;
