const CHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  layout: {
    padding: {
      top: 20,
      bottom: 10
    }
  },
  scales: {
    xAxes: [{
      scaleLabel: {
        display: true,
        fontStyle: 'bold',
        fontSize: 18,
        labelString: 'ID'
      }
    }],
    yAxes: [{
      scaleLabel: {
        display: true,
        fontStyle: 'bold',
        fontSize: 18,
        labelString: 'Votes'
      }
    }]
  }
};

export default CHART_OPTIONS;
export { CHART_OPTIONS };
