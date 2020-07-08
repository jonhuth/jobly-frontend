import React, { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from './JoblyApi';
import SearchForm from './SearchForm';

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  // const [searchTerm, setSeachTerm]
  useEffect(function () {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies();
      // This modifies companies; don't put companies in the []
      setCompanies(companies);
    }
    getCompanies();
  }, []); // don't put companies here

  async function searchFor(str) {
    // This modifies companies; don't put companies in the []
    const searchResult = await JoblyApi.getCompanies(str);
    setCompanies(searchResult);
  }

  return (
    <div>
      <SearchForm searchFor={searchFor} />
      {companies.map((company) => (
        <CompanyCard key={company.handle} companyInfo={company} />
      ))}
    </div>
  );
}

export default CompanyList;
