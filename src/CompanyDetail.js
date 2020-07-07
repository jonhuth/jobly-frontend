import React, {useEffect, useState} from 'react';
import JoblyApi from './JoblyApi';


function CompanyDetail() {

  useEffect(() => {
    async function getCompanyDetail() {
      let res = await JoblyApi.getCompany('edwards-lee-and-reese');
      console.log(res);
    }
    
    getCompanyDetail();
  }, []);
  return (<div>
    Company Detail goes here


  </div>);
}

export default CompanyDetail;