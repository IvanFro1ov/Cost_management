import "./Costs.css";

import Card from "../UI/Card";

import CostsFilter from "./CostsFilter";

import CostsDiagram from "./CostsDiagram";

import React, { useState } from "react";
import CostList from "./CostList";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState();

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = selectedYear
    ? props.costs.filter(
        (cost) => cost.date.getFullYear() === parseInt(selectedYear)
      )
    : props.costs;

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;
