import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import SearchForm from './SearchForm';
import JobCardList from './JobCardList';

function JobList() {
  const [jobs, setJobs] = useState([]);
  useEffect(function () {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobs();
  }, []);

  async function searchFor(str) {
    const searchResult = await JoblyApi.getJobs(str);
    setJobs(searchResult);
  }

  // async function searchForHelper(str, getFunc = null, setFunc=null) {
  //   const searchResult = await JoblyApi.getFunc(str);
  //   setJobs(searchResult);
  // }

  // searchForHelper(str, getJobs, setJobs);

  function apply() {
    return null;
  }

  return (
    <div>
      <SearchForm searchFor={searchFor} />
      <JobCardList jobs={jobs} apply={apply} />
    </div>
  );
}

export default JobList;
