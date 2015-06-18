var { 
	requireNativeComponent,
	PropTypes,
} = React

class BarChart extends React.Component {
	render() {
		return <RCTBarChart {...this.props}/>
	}
}

BarChart.propTypes = {
	/**
		The description text to be set on the chart.
 	*/
	descriptionText: PropTypes.string,

	/**
		The color of the grid behind the bars.
	*/
	gridBackgroundColor: PropTypes.string,

	/**
		The color of the border.
	*/
 	borderColor: PropTypes.string,

 	/**
		The width of the border.
	*/
 	borderLineWidth: PropTypes.number,
  
	/**
		The amount of space between bars
	*/
	groupSpace: PropTypes.number,

	/**
		The data to be displayed by the chart
	*/
	data: PropTypes.shape({
		xValues: PropTypes.arrayOf(PropTypes.string),
		dataSets: PropTypes.array
	})
  
};

var RCTBarChart = requireNativeComponent('RCTBarChartView', BarChart)

module.exports = BarChart