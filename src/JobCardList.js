import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import JoblyApi from './JoblyApi';

function JobCardList({ jobs, apply }) {
  // console.log('jobs in job card list', jobs);
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} apply={apply} />
      ))}
    </div>
  );
}

export default JobCardList;
