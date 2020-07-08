import React from 'react';

function JobCard({ job, apply }) {
  const { title, salary, equity } = job;
  return (
    <div>
      <p>{title}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button onClick={() => apply()}>Apply</button>
    </div>
  );
}

export default JobCard;
