import React from 'react';

function JobCard({ job, apply }) {
  const { title, salary, equity, id, state } = job;
  console.log('... job obj in job card', job);

  return (
    <div>
      <p>{title}</p>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      {state ?
        <div>
          Applied
      </div> :
        <div onClick={() => apply(id)}>
          Apply
      </div>}
    </div>
  );
}

export default JobCard;
