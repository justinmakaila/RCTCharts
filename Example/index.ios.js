// React global
React = require('react-native')

// Load App Registry & App
var { 
	AppRegistry,   
	StyleSheet,
  	View
} = React

// Load BarChart component & dependencies
var BarChart = require('rctcharts')
var ChartData = require('./RCTChartData.json')

var BarChartExample = React.createClass({
	render: function () {
		var fontName = 'Avenir-Medium'
    	var fontSize = 13

    	ChartData.dataSets[0].label = "Your Score"
    	ChartData.dataSets[0].color = "#00B4F1"

    	ChartData.dataSets[1].label = "Community Average"
    	ChartData.dataSets[1].color = "#0087B5"

		return(
			<View style={styles.container}>
				<BarChart 
				  style={styles.barChart}
				  data={ChartData}
				  descriptionText=''
				  groupSpace={150}
				  drawGridBackgroundEnabled={false}
				  highlightEnabled={false}
				  drawValueAboveBarEnabled={true}

				  legendForm={2}
				  legendFormLineWidth={3}
				  legendPosition={8}
				  legendFont={fontName}
				  legendFontSize={fontSize}

				  xAxisColor='#00B3F0'
				  xAxisLineWidth={1.5}
				  xAxisLabelPosition={1}
				  xAxisDrawGridlinesEnabled={false}
				  xAxisFont={fontName}
				  xAxisFontSize={fontSize}

				  yAxisDrawGridlinesEnabled={true}
				  yAxisColor="rgba(0, 0, 0, 0)"
				  yAxisLineWidth={1.5}
				  yAxisFont={fontName}
				  yAxisFontSize={fontSize}/>
			</View>
		)
	}
})

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	barChart: {
		position:"absolute",
		top: 200,
		bottom: 200,
		left: 0,
		right: 0,
		backgroundColor: "#fff",
	},
})

// Register App w/ App Registry
AppRegistry.registerComponent('BarChartExample', () => BarChartExample)
