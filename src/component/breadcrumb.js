import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ title }) => {
  return (
    <div className="breadcrumbs">
      <Link to="/" className="text-decoration-none">
        <span style={{ fontWeight: 'bolder' }}>Movies</span>
      </Link>
      <span style={{ fontSize: '26px' }}> / </span>
      <span style={{ fontWeight: 'bolder' }}>{title}</span>
    </div>
  );
};

export default BreadCrumb;
