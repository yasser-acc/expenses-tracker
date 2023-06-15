import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.DataPoint.map(
    (dataPoints) => dataPoints.value
  );
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.DataPoints.map((DataPoint) => (
        <ChartBar
          key={DataPoint.label}
          value={DataPoint.value}
          maxValue={totalMaximum}
          label={DataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
