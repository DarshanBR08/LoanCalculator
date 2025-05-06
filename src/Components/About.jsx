import React from "react";

const About = () => {
  return (
    <div className="about-page" style={{ padding: "1rem", maxWidth: "1160px", margin: "0 auto" }}>
      <h1>About This App</h1>
      <p>      
        This Loan Calculator App is a modern, single-page web application built using React JS and Material UI. It allows users to calculate loan EMIS (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.
      </p>
<hr></hr>
      <h2>Instructions foe Candidates</h2>
      <p>Please follow these Instructions to complete and submit your project.</p>
      <ul>
        <li>Loan EMI calculation using standard financial formulas .</li>
        <li>Dynamic amortization schedule table with monthly breakdown .</li>
        <li>Real-time currency conversion of EMI using a live exchange rate API .</li>
        <li>Paginated exchange rate table for 160+ currencies .</li>
        <li>Dark/Light mode toggle for a customizable experience .</li>
        <li>Collapsible header navigation on mobile screens .</li>
        <li>Fully responsive UI built with Material UI .</li>
      </ul>
      
      <hr></hr>
      <h2>Features</h2>
      <ul>
        <li>Loan EMI calculation using standard financial formulas .</li>
        <li>Dynamic amortization schedule table with monthly breakdown .</li>
        <li>Real-time currency conversion of EMI using a live exchange rate API .</li>
        <li>Paginated exchange rate table for 160+ currencies .</li>
        <li>Dark/Light mode toggle for a customizable experience .</li>
        <li>Collapsible header navigation on mobile screens .</li>
        <li>Fully responsive UI built with Material UI .</li>
      </ul>
      <hr></hr>
      <h2>Technologies Used</h2>
      <ul>
        <li><strong>React</strong> (Hooks, Routing, Context API)</li>
        <li><strong>Material UI</strong> for styling and responsive components.</li>
        <li><strong>Axios</strong> for API calls</li>
        <li><strong>Exchange Rate API</strong> for real-time currency conversion</li>
      </ul>
      <hr></hr>
      <h2>Vision</h2>
      <p>
        Our vision is to empower users with financial literacy and tools that simplify complex calculations, enabling better decision-making in real-life loan scenarios.
      </p>
      <hr></hr>
      <h2>Feedback & Support</h2>
      <p>
        We’re constantly improving. If you have feedback or face any issues, please don’t hesitate to reach out.
      </p>

      <p>Thank you for using the Loan Calculator App!</p>
    </div>
  );
};

export default About;
