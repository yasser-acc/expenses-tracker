import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.DataPoints.map((DataPoint) => (
        <ChartBar
          key={DataPoint.label}
          value={DataPoint.value}
          maxValue={null}
          label={DataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
