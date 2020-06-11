/**
 * @file com/job-card/index.jsx
 */

import React from "react";
import "./index.scss";

const JobCard = ({ id, job, onFilterClick }) => {
  const filters = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div className="fm-job-card">
      <div className="fm-job-logo"></div>
      <div className="fm-job-body">
        <p className="fm-job-company">
          <span>{job.company}</span>
          {job.new && <span className="fm-job-badge new">NEW!</span>}
          {job.featured && (
            <span className="fm-job-badge featured">FEATURED</span>
          )}
        </p>
        <p className="fm-job-position">{job.position}</p>
        <ul className="fm-job-details">
          <li>{job.postedAt}</li>
          <li>{job.contract}</li>
          <li>{job.location}</li>
        </ul>
      </div>
      <div className="fm-job-filters">
        {filters.map((filter) => (
          <button
            onClick={() => onFilterClick(filter)}
            className="fm-job-filter"
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
