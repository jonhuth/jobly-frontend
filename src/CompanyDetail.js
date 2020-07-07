import React, { useEffect, useState } from 'react';
import JoblyApi from './JoblyApi';
import { useParams } from 'react-router-dom';

function CompanyDetail() {
  const { company } = useParams();

  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    async function getCompanyDetail() {
      const companyData = await JoblyApi.getCompany(company);
      console.log('companyData...', companyData);
    }
    getCompanyDetail();
  }, []);

  const { name, jobs } = companyData;
  return (
    <div>
      <JobCard jobs={jobs} />
    </div>
  );
}

export default CompanyDetail;
