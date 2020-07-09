import React, { useEffect, useState } from 'react';
import JobCardList from './JobCardList';
import JoblyApi from './JoblyApi';
import { useParams } from 'react-router-dom';

function CompanyDetail() {
  const { company } = useParams();

  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    async function getCompanyDetail() {
      let companyData = await JoblyApi.getCompany(company);
      setCompanyData(companyData);
    }
    getCompanyDetail();
  }, []);

  // async function apply(jobId) {
  //   await JoblyApi.applyForJob(jobId);
  //   let jobs = await JoblyApi.getJobs();
  //   setJobs(jobs);
  // }

  const { name, description, jobs } = companyData;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{description}</h3>
      {jobs && <JobCardList jobs={jobs} />}
    </div>
  );
}

export default CompanyDetail;
