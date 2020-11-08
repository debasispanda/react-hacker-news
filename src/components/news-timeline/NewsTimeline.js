import { Line } from "react-chartjs-2";
import PropTypes from 'prop-types';
import { CHART_OPTIONS as options } from './config'

const NewsTimeline = ({ news }) => {
  const chartData = {
    labels: news.map(d => d.objectID),
    datasets: [{
      data: news.map(d => d.points),
      borderColor: '#0000ff',
      backgroundColor: '#0000ff',
      fill: false,
      pointRadius: 5
    }]
  };


  return (
    <div className="NewsTimeline">
      <Line
        data={chartData}
        options={options}
      />
    </div>
  )
}

NewsTimeline.propTypes = {
  news: PropTypes.array
};

export default NewsTimeline;