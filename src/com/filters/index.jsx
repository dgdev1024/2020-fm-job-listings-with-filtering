/**
 * @file com/filters/index.jsx
 */

import React from "react";
import IconRemove from "../svg/icon-remove";
import "./index.scss";

const Filters = ({ filters, toggleFilter, clearFilters }) => (
  <div className={`fm-filters ${filters.length === 0 ? "fm-empty" : ""}`}>
    <div className="fm-filter-cards">
      {filters.map((category) => (
        <div key={category} className="fm-filter-card">
          <span className="fm-filter-card-name">{category}</span>
          <button
            aria-label="Remove Filter"
            className="fm-filter-card-close"
            onClick={() => toggleFilter(category)}
          >
            <IconRemove className="fm-svg-icon-remove" />
          </button>
        </div>
      ))}
    </div>
    <a
      href="#"
      onClick={(ev) => {
        ev.preventDefault();
        clearFilters();
      }}
    >
      Clear
    </a>
  </div>
);

export default Filters;
