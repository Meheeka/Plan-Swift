import React, { useState } from "react";
import FilterBox from "../../Components/FilterBox/FilterBox";
import SearchEventlist from "../../Components/SearchEventlist/SearchEventlist";
import Navigation from "../../Components/Navigation/Navigation";
import "./FilterEvents.css";

const FilterEvents = () => {
  const [monthYear, setMonthYear] = useState({
    selectedMonth: null,
    selectedYear: null,
  });

  const getMonthYear = (selectedMonth, selectedYear) => {
    setMonthYear({ selectedMonth, selectedYear });
  };

  return (
    <div>
      <Navigation />
      <div className="find-events-wrapper">
        <FilterBox getMonthYear={getMonthYear} />
        {/* Place SearchEventlist component below the FilterBox */}
        
      </div>
      <SearchEventlist monthYear={monthYear} />
    </div>
  );
};

export default FilterEvents;
