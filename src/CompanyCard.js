import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard({ companyInfo }) {
  const { name, description, logo_url, handle } = companyInfo;
  return (
    <div>
      <Link exact to={`/companies/${companyInfo.handle}`}>
        <p>{name}</p>
        <p>{description}</p>
        <img src={logo_url} />
      </Link>
    </div>
  );
}

export default CompanyCard;
