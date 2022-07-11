import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (prop) => {
  const dataPointValues = prop.dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {prop.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
