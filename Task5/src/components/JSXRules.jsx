import React from "react";

export default function JSXRules() {
  let rules = [
    "JSX elements must be properly closed.",
  ];

  return (
    <>
      <h1>JSX Rules</h1>
      <ul>
        {rules.map((rule) => (
          <li>{rule}</li> 
        ))}
      </ul>
    </>
  );
}