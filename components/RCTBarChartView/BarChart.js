//  BarChart.js
//  RCTCharts
//
//  Justin Makaila
//

var React = require('react-native');

var { requireNativeComponent } = React;

class BarChart extends React.Component {
	render() {
		return <RCTBarChart {...this.props}/>;
	}
}

BarChart.propTypes = {
	/**
		The description text to be set on the chart.
 	*/
	descriptionText: React.PropTypes.string,

	/**
		The color of the grid behind the bars.
	*/
	gridBackgroundColor: React.PropTypes.string,

	/**
		The color of the border.
	*/
 	borderColor: React.PropTypes.string,

 	/**
		The width of the border.
	*/
 	borderLineWidth: React.PropTypes.number,
  
	/**
		The amount of space between bars
	*/
	groupSpace: React.PropTypes.number,

	/**
		The data to be displayed by the chart
	*/
	data: React.PropTypes.shape({
		xValues: React.PropTypes.arrayOf(React.PropTypes.string),
		dataSets: React.PropTypes.array
	})
  
};

var RCTBarChart = requireNativeComponent('RCTBarChartView', BarChart);

module.exports = BarChart;