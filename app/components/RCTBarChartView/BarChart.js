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
		Whether or not to draw the background grid.
	*/
	drawGridBackgroundEnabled: PropTypes.bool,

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
	}),

	/**
		Whether highlight of individual data entries is enabled
	*/
	highlightEnabled: PropTypes.bool,

	/**
		Whether drawing of the value above the bar is enabled.
	*/
	drawValueAboveBarEnabled: PropTypes.bool,

	/**
		The position for the legend.

		TODO: Use a string value instead of a number
		A number is used for now because it maps directly to the enumeration.
	*/
	legendPosition: PropTypes.number,

	/**
		The color of the x-axis.
	*/
	xAxisColor: PropTypes.string,

	/**
		The width of the x-axis.
	*/
	xAxisLineWidth: PropTypes.number,

	/**
		The position of the labels on the x-axis

		TODO: Use a string value instead of a number
		A number is used for now because it maps directly to the enumeration.
	*/
	xAxisLabelPosition: PropTypes.number,

  	/**
		Whether the x-axis should draw gridlines
  	*/
  	xAxisDrawGridlinesEnabled: PropTypes.bool,

  	/**
		Whether or not values should be drawn above the bars
  	*/
  	drawValuesEnabled: PropTypes.bool
};

var RCTBarChart = requireNativeComponent('RCTBarChartView', BarChart)

module.exports = BarChart