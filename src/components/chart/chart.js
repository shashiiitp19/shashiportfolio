import React from "react";
import chartBar from "./chartBar";
import "./chart.css";

const chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoints=>dataPoints.avlue);
    const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chat">
      {props.dataPoints.map((dataPoints) => (
        <chartBar
        key={dataPoints.label}
        value={dataPoints.value}
        maxValue={totalMaximum}
        label ={dataPoints.label}/>
      ))}
    </div>
  );
};
export default chart;
