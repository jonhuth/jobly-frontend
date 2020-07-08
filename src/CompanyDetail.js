import React, { useEffect, useState } from 'react';
import JobCardList from './JobCardList';
import JoblyApi from './JoblyApi';
import { useParams } from 'react-router-dom';

function CompanyDetail() {
  const { company } = useParams();

  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    async function getCompanyDetail() {
      const companyData = await JoblyApi.getCompany(company);
      setCompanyData(companyData);
      console.log('companyData...', companyData);
    }
    getCompanyDetail();
  }, []);

  function apply() {
    return null;
  }
  const { name, description, jobs } = companyData;
  console.log(jobs);
  
  return (
    <div>
      <h1>{name}</h1>
      <h3>{description}</h3>
      <JobCardList jobs={jobs} apply={apply} />
    </div>
  );
}

export default CompanyDetail;
