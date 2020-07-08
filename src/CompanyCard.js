import React from 'react';
import { NavLink } from 'react-router-dom';

function CompanyCard({ companyInfo }) {
  const { name, description, logo_url, handle } = companyInfo;
  const DEFAULT_IMAGE =
    'https://2.bp.blogspot.com/-_dqSHvMdmBU/XCUgstDF87I/AAAAAAAADKw/8Tc5072Cz3g1p2E40tpuxqsZEKu0qeKuwCLcBGAs/s640/FAANG%2BStocks.jpg';
  return (
    <div>
      <NavLink exact to={`/companies/${handle}`}>
        <p>{name}</p>
        <p>{description}</p>
        <img
          src={logo_url || DEFAULT_IMAGE}
          style={{ width: '160px', height: '90px' }}
        />
      </NavLink>
    </div>
  );
}

export default CompanyCard;
