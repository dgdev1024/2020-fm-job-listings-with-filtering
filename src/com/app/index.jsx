/**
 * @file com/app/index.jsx
 */

import React, { useState } from "react";
import Filters from "../filters";
import JobCard from "../job-card";
import Jobs from "../../lib/data";
import "./index.scss";

const App = () => {
  const [filters, setFilters] = useState(["Frontend", "JavaScript", "CSS"]);
  const toggleFilter = (category) => {
    if (typeof category !== "string" || category === "") {
      return;
    }

    if (filters.includes(category)) {
      setFilters(filters.filter((element) => element !== category));
    } else {
      setFilters([...filters, category]);
    }
  };

  const filterJobs = () => {
    return filters.length === 0
      ? Jobs
      : Jobs.filter((job) => {
          const jobFilters = [
            job.role,
            job.level,
            ...job.languages,
            ...job.tools,
          ];

          return filters.reduce(
            (acc, val) => acc === true && jobFilters.includes(val),
            true
          );
        });
  };

  return (
    <main>
      <div className="fm-container">
        <Filters
          filters={filters}
          toggleFilter={toggleFilter}
          clearFilters={() => setFilters([])}
        />
        <div className="fm-job-cards">
          {filterJobs().map((job) => (
            <JobCard key={job.id} job={job} onFilterClick={toggleFilter} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
